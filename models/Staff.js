const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const StaffSchema = new Schema({
  aUsername: {
    type: String,
    required: false
  },
  aPassword: {
    type: String,
    required: false
  },
  aPic: {
    type: String,
    required: false
  },
  aName: {
    type: String,
    required: false
  },
  aMail: {
    type: String,
    required: false
  },
  aStatus: {
    type: String,
    required: false
  },
  aGender: {
    type: String,
    required: false
  },
  aTell: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Staff = mongoose.model("staff", StaffSchema);
