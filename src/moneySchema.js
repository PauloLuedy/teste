const mongoose = require('mongoose');
const { Schema } = mongoose;

const moneySchema = new Schema({
  type: {
    type: String,
    required: true
  },
  data: {
    type: Date,
    default: Date.now
  },
  horario: {
    type: Date,
    default: Date.now
  },
  valor:{
    type:String,
    require:true
  }
});

module.exports = mongoose.model('money', moneySchema);