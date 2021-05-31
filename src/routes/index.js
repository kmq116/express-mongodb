'use strict'
import user from './user'
import upload from './upload'
import report from './report'
import personInfo from './person-info'

export default (app) => {
  app.use('/user', user)
  app.use('/', upload)
  app.use('/',report)
  app.use('/',personInfo)
}
