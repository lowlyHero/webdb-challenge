const db = require('../dbConfig');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
};

function find() {
    return db('actions');
};

function findById(id) {
    return db('actions')
      .where({ id })
      .first();
  }
  
  function add(track) {
    return db('actions').insert(track, 'id');
  }
  
  function update(id, changes) {
    return db('actions')
      .where({ id })
      .update(changes);
  }
  
  function remove(id) {
    return db('actions')
      .where({ id })
      .del();
  }