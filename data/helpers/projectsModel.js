const db = require('../dbConfig');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
};

function find() {
    return db('projects');
};

function findById(id) {
    return db('projects')
      .where({ id })
      .first();
  }
  
  function add(track) {
    return db('projects').insert(track, 'id');
  }
  
  function update(id, changes) {
    return db('projects')
      .where({ id })
      .update(changes);
  }
  
  function remove(id) {
    return db('projects')
      .where({ id })
      .del();
  }