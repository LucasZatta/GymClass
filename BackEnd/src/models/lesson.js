const mongoose = require("mongoose");

const LessonSchema = new mongoose.Schema({
  lessonName: {
    type: String,
    required: true,
  },
  registered: {
    type: Array,
    required: true,
  },
  lessonSchedule:{
    type: Date,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  maxCapacity: {
    type: Number,
    default: 5
  }
});

//console.log(mongoose);
const Lesson = mongoose.model("Class", LessonSchema);
module.exports = Lesson;
