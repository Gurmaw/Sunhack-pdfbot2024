const express = require('express');
const Workout = require('../models/Workout');
const router = express.Router();

// POST a new workout
router.post('/', async (req, res) => {
  const { userId, exercise, sets, reps } = req.body;
  try {
    const newWorkout = new Workout({ userId, exercise, sets, reps });
    await newWorkout.save();
    res.status(201).json(newWorkout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET all workouts for a user
router.get('/:userId', async (req, res) => {
  try {
    const workouts = await Workout.find({ userId: req.params.userId });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;