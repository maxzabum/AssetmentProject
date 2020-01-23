const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const UsersSchema = new Schema({
  mUsername: {
    type: String,
    required: true
  },
  mPassword: {
    type: String,
    required: true
  },
  mName: {
    type: String,
    required: false
  },
  mStatus: {
    type: String,
    required: false
  },

  mTell: {
    type: String,
    required: false
  },
  mPermission: {
    type: Boolean,
    required: false
  },
  mPic: {
    type: String,
    required: false
  },
  mGender: {
    type: String,
    required: false
  },
  mMail: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = User = mongoose.model("user", UsersSchema);
