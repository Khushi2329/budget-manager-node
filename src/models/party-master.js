const mongoose = require("mongoose");

const partySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
        type: String,
        required: true,
      },
      gstNo: {
        type: String,
        required: true,
      }
  },
  { timestamps: true }
);

const partyMaster = mongoose.model("party-master", partySchema);

module.exports = partyMaster;
