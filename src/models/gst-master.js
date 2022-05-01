const mongoose = require("mongoose");

const gstMasterSchema = new mongoose.Schema(
    {

        address: {
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

const gstMaster = mongoose.model("gst-master", gstMasterSchema);

module.exports = gstMaster;
