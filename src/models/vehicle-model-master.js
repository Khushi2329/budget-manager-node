const mongoose = require("mongoose");

const vehicleModelSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    vehicleModel: {
      type: String,
      required: true,
    },
    vehicleModel: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const vehicleModelMaster = mongoose.model(
  "vehicle-model-master",
  vehicleModelSchema
);

module.exports = vehicleModelMaster;
