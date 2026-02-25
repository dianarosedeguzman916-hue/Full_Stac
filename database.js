const Datastore = require('nedb');
const path = require('path');

// Initialize tasks database
const tasksDB = new Datastore({
  filename: path.join(__dirname, 'data', 'tasks.db'),
  autoload: true
});

module.exports = { tasksDB };