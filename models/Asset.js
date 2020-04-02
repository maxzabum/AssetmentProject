const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const AssetSchema = new Schema({
  aSerial: {
    type: String,
    required: false
  },
  aName: {
    type: String,
    required: false
  },
  aStatus: {
    type: String,
    required: false
  },
  aDate: {
    type: Date,
    required: false
  },
  aPrice: {
    type: String,
    required: false
  },

  aReason: {
    type: String,
    required: false
  },
  aGet: {
    type: String,
    required: false
  },

  pID: {
    type: String,
    required: false
  },
  cID: {
    type: String,
    required: false
  },
  rID: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Asset = mongoose.model("assetment", AssetSchema);
