exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(table) {
      table
      .increments('id')
      .unique('id')
      .string('name')
      .string('description')
      .boolean('completed');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects')
};
