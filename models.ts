const mongoose = require("mongoose");

const mySchema: any = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    default: 'Anonymous',
  },
  message: {
    type: String,
    default: 'this is a test',
  },
});

const Model = mongoose.model("Model", mySchema);

module.exports = Model;