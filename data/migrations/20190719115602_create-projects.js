
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
    table.increments().unique();
    table.string('name');
    table.string('description');
    table.boolean('is_complete');
    table.join('actions', 'projects.id', '=', 'actions.id')
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};
