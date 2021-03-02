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

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  status: Number,
});

let User = mongoose.model("User", userSchema);
// 修改数据
// User.updateOne(
//   { _id: "603b48861bbd11378c2f10c6" },
//   { name: "修改" },
//   (err, doc) => {
//     if (err) return console.log("修改失败");
//     console.log(doc);
//   }
// );

// 删除数据
// User.deleteOne({ _id: "603b48861bbd11378c2f10c6" }, (err, doc) => {
//   if (err) return console.log("删除失败");
//   console.log("删除成功");
// });
// // 查询数据
// User.find({}, (err, doc) => {
//   if (err) return console.log(err);
//   console.log(doc);
// });

// 增加数据
// let u = new User({
//   name: "李四",
//   age: 20,
//   status: 2,
// });
// u.save((err) => {
//   if (err) return console.log(err);
//   console.log("成功");
// });

module.exports = db;
