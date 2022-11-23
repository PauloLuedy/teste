const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moneySchema = new Schema({
  type: {
    type: String,
  },
  value: {
    type: String,
  },
  createAt: { type: Date, default: Date.now },
});
const MONEY = mongoose.model("moneySchema", moneySchema);
module.exports = MONEY;
