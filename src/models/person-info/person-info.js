'use strict'
// 定义数据库模型

import mongoose from 'mongoose'

const Schema = mongoose.Schema

const personInfoSchema = new Schema({
  name: {
    type: String,
    required: true,
  }, //姓名
  ID: {
    type: String,
    required: true,
  }, //身份证号
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  currentAddress: {
    type: String,
    required: true,
  },
  RQclass: {
    type: String,
    required: true,
  }, //人群分类
  RYclass: {
    type: String,
    required: true,
  }, //人员类别
  YBclass: {
    type: String,
    required: true,
  }, //医保类型
  YBlevel: {
    type: String,
    required: true,
  }, //医保级别
})

const PersonInfo = mongoose.model('person_info', personInfoSchema)

export default PersonInfo
