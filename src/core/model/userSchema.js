const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  createAt: { type: Date, default: Date.now },
});
const USER = mongoose.model("userSchema", userSchema);
module.exports = USER;
