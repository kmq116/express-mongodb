"use strict";
const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
  username: { type: String, required: true },
  phoneNo: { type: String, required: true },
  department: { type: Array, required: true },
  reported: { type: String, required: true },
  remark: { type: String, required: true },
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
