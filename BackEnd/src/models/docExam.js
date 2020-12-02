const mongoose = require("mongoose");

const ExamSchema = new mongoose.Schema({
  assignedDoc: {
    type: String,
    required: true,
  },
  studentCpf:{
    type: String,
    required: true
  },
  approval: {
    type: Boolean,
    rquired: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//console.log(mongoose);
const Exercise = mongoose.model("Exercise", UserSchema);
module.exports = Exercise;
