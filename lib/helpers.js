require('dotenv').config();

const ENV         = process.env.ENV || "development";
const knexConfig  = require("../knexfile");
const knex        = require("knex")(knexConfig[ENV]);

debugger;

const insertIntoUsers = (body) => {
  debugger;
  return knex('users')
    .insert({name: body})
    .returning('*');
};

const checkEmailInDB = (handle, email, password) => {
  return knex
  .select('email')
  .from('users')
  .where({'email': email})
  .then((users) => {
    return users.length !== 0;
  });
};

const createNewUser = (handle, email, password) => {

  return knex('users')
    .insert({
      name: handle,
      email: email,
      password: password
    })
    .returning('*');
};

module.exports = {
  insertIntoUsers: insertIntoUsers,
  createNewUser: createNewUser,
  checkEmailInDB: checkEmailInDB
}