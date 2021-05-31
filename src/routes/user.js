'use strict'
import express from 'express'
import User from '../controller/user/user'
const router = express.Router()

// /**
//  * 用户登录
//  * @route post /user/login
//  * @group 用户模块 - 登录注册
//  * @property {string} username.body.required
//  * @property {string} username.body.required
//  * @returns {object} 200 - An array of user info
//  * @returns {Error}  default - Unexpected error
//  */
/**
 * This function comment is parsed by doctrine
 * sdfkjsldfkj
 * @route POST /users/login
 * @group 用户模块 - 登录注册
 * @param {string} email.query.required - username or email
 * @param {string} password.query.required - user's password.
 */
router.post('/login', User.login)
/**
 * 用户注册
 * @route post /user/register 
 * @group 用户模块 - 登录注册
 * @param {string} username.body.required
 * @param {string} username.body.required
 * @returns {object} 200 - 注册成功
 */
router.post('/register', User.register)

export default router
