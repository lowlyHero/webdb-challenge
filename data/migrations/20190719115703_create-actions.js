
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', table => {
    table.increments().unique();
    table.foreign('project_id').notNullable().references('projects.id').inTable('projects');
    table.string('description');
    table.string('notes');
    table.boolean('is_complete');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
