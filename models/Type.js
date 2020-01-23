const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const TypesSchema = new Schema({
  cID: {
    type: String,
    required: true
  },
  cName: {
    type: String,
    required: true
  },
  cStatus: {
    type: Boolean,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Type = mongoose.model("type", TypesSchema);
