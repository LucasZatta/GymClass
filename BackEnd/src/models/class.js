const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
  className: {
    type: String,
    required: true,
  },
  registered: {
    type: Array,
    required: true,
  },
  classSchedule:{
    type: Date,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//console.log(mongoose);
const User = mongoose.model("User", UserSchema);
module.exports = User;
