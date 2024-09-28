const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rank: { type: String, default: 'Beginner' }, // Modify as needed for your ranking system
  workouts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workout' }]
});

const User = mongoose.model('User', userSchema);
module.exports = User;
