const mongoose = require("mongoose");

const stationMasterSchema = new mongoose.Schema(
  {
    state: {
      type: String,
      required: true,
    },
    gstNo: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    branch: {
      code: {
        type: String,
      },
      name: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const stationMaster = mongoose.model("station-master", stationMasterSchema);

module.exports = stationMaster;
