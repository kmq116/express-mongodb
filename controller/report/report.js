const ReportModel = require("../../models/report/reportModel");

class Report {
  constructor() {}

  async addReport(req, res, next) {
    let newReport = new ReportModel({
      ...req.body,
    });

    try {
      await newReport.save();
      res.send({
        code: 200,
        message: "举报成功，请等待相关人员联系您",
      });
    } catch (error) {
      res.send({
        code: 500,
        reason:error,
        message: "网络或后台异常",
      });
    }
  }

  async reportList(req, res, next) {
    ReportModel.find({}, (err, doc) => {
      if (err)
        return res.send({
          code: 500,
          message: "查询失败",
        });
      res.send({
        code: 200,
        data: doc,
        message: "查询成功",
      });
    });
  }
}

module.exports = new Report();
