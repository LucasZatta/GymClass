const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
  assignedTeacher: {
    type: String,
    required: true,
  },
  studentCpf:{
    type: String,
    required: true
  },
  workoutNumber: {
    type: String,
    required: true,
    unique: true,
  },
  routine:{
    type: Array,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//console.log(mongoose);
const Exercise = mongoose.model("Exercise", UserSchema);
module.exports = Exercise;
