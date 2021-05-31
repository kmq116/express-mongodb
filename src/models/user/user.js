'use strict'
// 定义数据库模型

import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: String,
  password: String,
})

const User = mongoose.model('User',userSchema)

export default User
