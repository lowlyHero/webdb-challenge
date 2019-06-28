exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(table) {
        table
        .increments('id')
        .unique('id')
        .string('description')
        .boolean('completed');

        table
          .integer('action_id') 
          .unsigned() 
          .references('id') 
          .inTable('project') 
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('action');
};
