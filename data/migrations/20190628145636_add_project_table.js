exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
      table
      .increments('id')
      .unique('id')
      .string('name')
      .string('description')
      .boolean('completed');

      table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects')
};
