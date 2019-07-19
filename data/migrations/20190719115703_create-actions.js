
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', table => {
    table.increments().unique();
    table.text('description');
    table.text('notes');
    table.boolean('is_complete');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
