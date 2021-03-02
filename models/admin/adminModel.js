"use strict";
const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const Admin = mongoose.model("userinfo", adminSchema);

module.exports = Admin;
