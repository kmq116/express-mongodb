'use strict'
import PersonInfoModel from '../../models/person-info/person-info'

class PersonInfo {
  constructor() {}

  async infoSave(req, res) {
    try {
      const {
        name,
        ID,
        phone,
        address,
        currentAddress,
        RQclass,
        RYclass,
        YBclass,
        YBlevel,
      } = req.body

      const personInfo = new PersonInfoModel({
        name,
        ID,
        phone,
        address,
        currentAddress,
        RQclass,
        RYclass,
        YBclass,
        YBlevel,
      })

      const saveData = await personInfo.save()
      if (saveData) {
        res.send({
          code: 200,
          message: '信息提交成功，请前去登记核实',
        })
      }
    } catch (error) {
      console.log(error)
      res.send({ code: 500, message: '信息未提交，请去前台登记' })
    }
  }

  async infoQuery(req, res) {
    try {
      const result = await PersonInfoModel.find({})
      res.send({ code: 200, data: result, message: '查询成功' })
    } catch (error) {
      console.log(error)
      res.send({ code: 500,  message: '未查到信息' })
    }
  }
}

export default new PersonInfo()
