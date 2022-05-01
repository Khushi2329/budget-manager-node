const mongoose = require("mongoose");

const lorryExpenseSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    expenseName: {
      type: String,
      required: true,
    },
    expenseGroup: {
      type: String,
      required: true,
    },
    fromToDateCheck: {
      type: Boolean,
      required: true,
    },
    remarks: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const lorryExpenseMaster = mongoose.model(
  "lorry-expense-master",
  lorryExpenseSchema
);

module.exports = lorryExpenseMaster;
