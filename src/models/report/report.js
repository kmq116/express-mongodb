'use strict'
// 定义数据库模型

import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reportSchema = new Schema({
  name:{
    type:String,required:true
  },
  relation: {
    type:String,required:true
  },
  patient: {
    type:String,required:true
  }, 
  hospitalNum: {
    type:String,required:true
  },
  reportedPeople:{
    type:String,required:true
  },
  phone: {
    type:String,required:true
  }, 
  imgUrl: {
    type:String,required:true
  },
  age:{
    type:String,required:true
  },
  content:{
    type:String,required:true
  },
  reportType: {
    type:String,required:true
  }
})

const Report = mongoose.model('Report',reportSchema)

export default Report
