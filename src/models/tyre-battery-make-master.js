const mongoose = require("mongoose");

const tyrebatteryMakeSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    tyreMake: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },

    nsd1: {
      type: String,
      required: true,
    },
    nsd3: {
      type: String,
      required: true,
    },
    nsd2: {
      type: String,
      required: true,
    },
    nsd4: {
      type: String,
      required: true,
    },
    remarks: {
      type: String,
      required: true,
    },
    lessNsd: {
      type: String,
      required: true,
    },
    km: {
      type: String,
      required: true,
    },
    tyrePressure: {
      type: String,
      required: true,
    },
    bGrade: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const tyrebatteryMakeMaster = mongoose.model(
  "tyre-battery-make-master",
  tyrebatteryMakeSchema
);

module.exports = tyrebatteryMakeMaster;
