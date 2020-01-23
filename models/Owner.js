const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const OwnersSchema = new Schema({
  pName: {
    type: String,
    required: false
  },

  pStatus: {
    type: Boolean,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Owner = mongoose.model("owner", OwnersSchema);
