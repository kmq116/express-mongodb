"use strict";
const mongoose = require("mongoose");
const config = require('config-lite')('default.js')

mongoose.connect(config.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("数据库连接成功");
});

db.on("error", (error) => {
  console.log("err in mongodb");
});

db.on("close", () => {
  console.log("数据库断开连接");
});

module.exports = db;
