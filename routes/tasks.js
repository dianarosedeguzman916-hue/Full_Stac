const express = require('express');
const router = express.Router();
const { tasksDB } = require('../database');

// Get all tasks
router.get('/', (req, res) => {
  tasksDB.find({}, (err, tasks) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(tasks);
  });
});

// Create new task
router.post('/', (req, res) => {
  const newTask = { ...req.body, createdAt: new Date().toISOString() };
  tasksDB.insert(newTask, (err, task) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(task);
  });
});

// Update task by ID
router.put('/:id', (req, res) => {
  tasksDB.update(
    { _id: req.params.id },
    { $set: req.body },
    {},
    (err, numUpdated) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: ${numUpdated} task(s) updated });
    }
  );
});

// Delete task by ID
router.delete('/:id', (req, res) => {
  tasksDB.remove({ _id: req.params.id }, {}, (err, numRemoved) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: ${numRemoved} task(s) deleted });
  });
});

module.exports = router;