const mongoose = require("mongoose");

const truckMakeSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    make: {
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

const truckMakeMaster = mongoose.model("truck-make-master", truckMakeSchema);

module.exports = truckMakeMaster;
