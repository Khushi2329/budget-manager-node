const mongoose = require("mongoose");

const vehicletypeSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    detentionChargePerDay: {
      type: String,
      required: true,
    },
    noOfTyre: {
      type: String,
      required: true,
    },
    bharatStage: {
      type: String,
      required: true,
    },
    tyreCost: {
      type: String,
      required: true,
    },
    repairCost: {
      type: String,
      required: true,
    },
    earning: {
      type: String,
      required: true,
    },
    loadCapacity: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const vehicletypeMaster = mongoose.model(
  "vehicle-type-master",
  vehicletypeSchema
);

module.exports = vehicletypeMaster;
