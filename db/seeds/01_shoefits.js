const shoefits = require ('./data/shoefits');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shoefits').del()
    .then(function () {
      // Inserts seed entries
      return knex('shoefits').insert(shoefits);
    });
};
