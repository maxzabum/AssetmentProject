const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const StaffSchema = new Schema({
  username: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  },

  oTell: {
    type: String,
    required: false
  },
  oPermission: {
    type: Boolean,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Staff = mongoose.model("staff", StaffSchema);
