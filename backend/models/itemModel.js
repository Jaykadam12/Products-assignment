const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    price: String,
    description: String,
    coverImg: String,
    addImg: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
