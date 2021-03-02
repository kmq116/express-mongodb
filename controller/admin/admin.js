const AdminModel = require("../../models/admin/adminModel");

class Admin {
  constructor() {}
  async Login(req, res, next) {

    const { username, password } = req.body;
    
    AdminModel.findOne({ username }, (err, doc) => {
      if (err)
        return res.send({
          code: 500,
          message: "查询失败",
        });
      if (!doc) {
        res.send({
          code: 500,
          data: doc,
          message: "用户名不正确",
        });
      } else if (doc.password == password) {
        res.send({
          code: 200,
          message: "登录成功",
        });
      } else {
        res.send({
          code: 400,
          message: "密码错误",
        });
      }
    });
  }
}

module.exports = new Admin();
