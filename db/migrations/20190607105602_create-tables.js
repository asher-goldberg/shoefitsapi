
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shoefits', (table) => {
      table.increments();
      table.integer('shoeId');
      table.integer('fitValue');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shoefits');
};
