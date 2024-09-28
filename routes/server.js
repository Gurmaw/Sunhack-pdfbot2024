const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/users');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// API routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Fitness Tracker API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});