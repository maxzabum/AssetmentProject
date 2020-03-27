const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const CheckAssetSchema = new Schema({
  chDate: {
    type: Date,
    default: Date.now
  },
  chRound: {
    type: String,
    required: false
  },
  perID: {
    type: String,
    required: false
  },
  aID: {
    type: String,
    required: false
  },
  chStatus: {
    type: String,
    required: false
  },

  chDetail: {
    type: String,
    required: false
  }
});
module.exports = CheckAsset = mongoose.model("checkAsset", CheckAssetSchema);
