const mongoose = require("mongoose");

const stateCountrySchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    stateName: {
      type: String,
      required: true,
    },
    abbrStateName: {
      type: String,
      required: true,
    },
    zone: {
      type: String,
      required: true,
    },
    stateCodeGST: {
      type: String,
      required: true,
    },
    remarks: {
        type: String,
        required: true,
      },

  },
  { timestamps: true }
);

const stateCountryMaster = mongoose.model(
  "states-master",
  stateCountrySchema
);

module.exports = stateCountryMaster;
