'use strict'
import ReportModel from '../../models/report/report'

class Report {
  constructor() {}

  // 举报信息保存
  async reportSave(req, res) {
    try {
      const {
        name,
        relation,
        patient,
        sex,
        hospitalNum,
        reportedPeople,
        phone,
        imgUrl,
        content,
        age,
        reportType,
      } = req.body

      const reportData = new ReportModel({
        name,
        relation,
        patient,
        sex,
        hospitalNum,
        reportedPeople,
        phone,
        imgUrl,
        content,
        age,
        reportType,
      })
      
      const saveData = await reportData.save()
      if (saveData) {
        res.send({
          code: 200,
          message: '举报成功，请等待工作人员联系您',
        })
      }
    } catch (error) {
      console.log(error)
      res.send({ code: 500, message: '举报失败，请联系工作人员' })
    }
  }

  async reportQuery(req, res) {
    try {
      const result = await ReportModel.find({})
      console.log(result)
      res.send({ code: 200, data: result, message: '查询成功' })
    } catch (error) {
      console.log(error)
    }
  }
}

export default new Report()
