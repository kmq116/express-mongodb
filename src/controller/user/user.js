'use strict'

import UserModel from '../../models/user/user'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'



class User {
  constructor() {
    this.register = this.register.bind(this)
    this.login = this.login.bind(this)
  }

  // eslint-disable-next-line no-unused-vars
  async login(req, res, next) {
    console.log(req.body)
    const { username, password } = req.body
    // 生成的token里保存用户信息
    const token = this.generatorToken(username)
    try {
      const user = await UserModel.findOne({ username })
      if(user && user.password === this.Md5(password)) {

        res.send({
          code: 200,
          message: '登录成功',
          token
        })
      }else{
        res.send({
          code:500, message: '登录失败，用户不存在或密码错误'
        })
      }
    } catch (error) {
      res.send({
        code:501, message: '登录错误'
      })
    }

        
  }

  // 注册
  async  register(req,res){
    const { username, password } = req.body
    console.log(req.body)
    const md5password = this.Md5(password)
    
    try {
      const user = await UserModel.findOne({ username })
      if(user) {
        return  res.send({
          code:201, message: '用户名已经存在，请选择其他用户名'
        })
      }
      const userData = new UserModel({
        username:username,
        password:md5password
      })
      const saveData =  await userData.save()
      if(saveData) {
        res.send({
          code: 200,message: '用户注册成功'
        })
      }
    } catch (error) {
      console.log(error)
      res.send({code: 500, message:'注册失败'})
    }
       
  }

  // 加密模块
  Md5(password){
    const md5 = crypto.createHash('md5')
    return md5.update(password).digest('base64')
  }

  generatorToken(data){
    const token = jwt.sign({username:data},'mobileOA')
    return token
  }
}

export default new User()
