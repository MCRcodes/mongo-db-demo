const mongoose = require("mongoose");

const breakfastSchema = new mongoose.Schema({
  eggs: {
    type: Number,
    min: [6, "Too few eggs"],
    max: 12
  },
  bacon: {
    type: Number,
    required: [true, "Why no bacon?"]
  }
});

module.exports = mongoose.model("breakfast", breakfastSchema);
