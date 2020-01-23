const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const FixAssetSchema = new Schema({
  fReason: {
    type: String,
    required: false
  },
  fPic: {
    type: String,
    required: false
  },
  fStatus: {
    type: String,
    required: false
  },
  fLocation: {
    type: Boolean,
    required: false
  },
  fPicCard: {
    type: String,
    required: false
  },
  fFixDate: {
    type: Date
  },
  fBillPic: {
    type: String,
    required: false
  },
  fResult: {
    type: String,
    required: false
  },
  fPrice: {
    type: String,
    required: false
  },

  aID: {
    type: String,
    required: false
  },
  dateVar: {
    type: Date,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = FixAsset = mongoose.model("Fixassetment", FixAssetSchema);
