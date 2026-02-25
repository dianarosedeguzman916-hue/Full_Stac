require('dotenv').config();
const express = require('express');
const cors = require('cors');
const tasksRouter = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// API Routes
app.use('/api/tasks', tasksRouter);

// Start Server
app.listen(PORT, () => {
  console.log(Backend running on http://localhost:${PORT});
});