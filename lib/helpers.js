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

module.exports = {
  insertIntoUsers: insertIntoUsers
}