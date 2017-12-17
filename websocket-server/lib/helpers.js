require('dotenv').config();

const ENV = process.env.ENV || 'development';
const knexConfig = require('../knexfile');
const knex = require('knex')(knexConfig[ENV]);
const bcrypt = require('bcrypt');

const insertIntoUsers = (body) => {
  return knex('users')
    .insert({name: body})
    .returning('*');
};

const checkEmailInDB = (email, password) => {
  return knex
    .select('email')
    .from('users')
    .where({'email': email})
    .then((users) => {
      console.log(typeof users);
      return users.length !== 0;
    });
};

function checkLogin(email, password) {
  return knex('users')
    .where({email: email})
    .returning('*')
    .then((result) => {
      if (bcrypt.compareSync(password, result[0].password)) {
        return result[0].id;
      }
      else {
        return 0;
      }
    });
}

const createNewUser = (handle, email, password) => {
  let user_id = 0;
  return knex('users')
    .insert({
      name: handle,
      email: email,
      password: password
    })
    .returning('*')
    .then((users) => {
      user_id = users[0].id;
      return user_id;
    });
};

module.exports = {
  insertIntoUsers: insertIntoUsers,
  createNewUser: createNewUser,
  checkEmailInDB: checkEmailInDB,
  checkLogin: checkLogin
}