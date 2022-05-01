const mongoose = require("mongoose");

const branchMasterSchema = new mongoose.Schema(
  {
    code: {
      type: String,
    },
    name: {
      type: String,
    },
    zone: {
      type: String,
    },
    managerName: {
      type: String,
    },
    address: {
      type: String,
    },
    phoneOffice: {
      type: String,
    },
    mobile: {
      type: String,
    },
    emailBranch: {
      type: String,
    },
    emailAccount: {
      type: String,
    },
    emailFreight: {
      type: String,
    },
    cashLimit: {
      type: String,
    },
    bankLimit: {
      type: String,
    },
    esiDeduct: {
      type: String,
    },
    salaryQuit: {
      type: String,
    },
    bankIfsc: {
      type: String,
    },
    bankAccountNo: {
      type: String,
    },
    bankName: {
      type: String,
    },
    gstNo: {
      type: String,
    },
  },
  { timestamps: true }
);

const branchMaster = mongoose.model("branch-master", branchMasterSchema);

module.exports = branchMaster;
