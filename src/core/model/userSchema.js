const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  type: {
    name: String,
  },
  value: {
    email: String,
  },
  value: {
    password: String,
  },
  createAt: { type: Date, default: Date.now },
});
const USER = mongoose.model("userSchema", userSchema);
module.exports = USER;
