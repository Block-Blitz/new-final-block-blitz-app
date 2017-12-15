exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({ name: 'Alice', email: "email@email.com", password: "12"}),
        knex('users').insert({ name: 'Bob', email: "email@email.com", password: "12"}),
        knex('users').insert({ name: 'Charlie', email: "email@email.com", password: "12"})
      ]);
    });
};