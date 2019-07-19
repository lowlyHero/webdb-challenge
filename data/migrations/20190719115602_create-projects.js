
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
    table.increments().unique();
    table.text('name', 128);
    table.text('description');
    table.boolean('is_complete');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};
