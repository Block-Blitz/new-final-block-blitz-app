exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, name: 'Alice', email: "email@email.com", password: "12"}),
        knex('users').insert({id: 2, name: 'Bob', email: "email@email.com", password: "12"}),
        knex('users').insert({id: 3, name: 'Charlie', email: "email@email.com", password: "12"})
      ]);
    });
};