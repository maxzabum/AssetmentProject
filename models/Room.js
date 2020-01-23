const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const RoomsSchema = new Schema({
  rID: {
    type: String,
    required: false
  },
  rName: {
    type: String,
    required: false
  },
  rtypeID: {
    type: String,
    required: false
  },
  rStatus: {
    type: Boolean,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Room = mongoose.model("room", RoomsSchema);
