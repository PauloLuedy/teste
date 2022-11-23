const mongoose = require("mongoose");

mongoose.connect("mongodb://db:27017/crud-node-mongo-docker", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
