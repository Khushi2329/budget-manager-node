const mongoose = require("mongoose");

const sparePartsRepairsSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    partRepairName: {
      type: String,
      required: true,
    },
    mainPreventiveCode: {
      type: String,
      required: true,
    },
    blockRecord: {
      type: Boolean,
      required: true,
    },
    waranteeItem: {
      type: Boolean,
      required: true,
    },
    hsnOrSacCode: {
      type: String,
      required: true,
    },
    rate: {
      type: String,
      required: true,
    },
    waranteeBase: {
      type: String,
      required: true,
    },
    groupName: {
      type: String,
      required: true,
    },
    minQtyInStocks: {
      type: String,
      required: true,
    },
    maxQtyInStocks: {
      type: String,
      required: true,
    },
    reorderQtyInStocks: {
      type: String,
      required: true,
    },
    limitKm: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const sparePartsRepairsMaster = mongoose.model(
  "spare-parts-repairs-master",
  sparePartsRepairsSchema
);

module.exports = sparePartsRepairsMaster;
