const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },
    whoAdded: {
      type: String,
      required: true,
    },
    whatAdded: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const expenses = mongoose.model("expenses", expenseSchema);

module.exports = expenses;
