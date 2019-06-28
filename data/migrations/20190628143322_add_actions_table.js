exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', table => {
        table
        .increments('id')
        .unique('id')
        .string('description')
        .boolean('completed');

        //Foreign Keys
        table
          .integer('action_id') 
          .unsigned() 
          .references('id') 
          .inTable('projects') 
          .onDelete('CASCADE')
          .onUpdate('CASCADE');

          table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('action');
};
