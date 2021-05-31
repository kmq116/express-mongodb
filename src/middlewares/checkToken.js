import jwt from 'jsonwebtoken'

class JWT {
  constructor(data){
    this.data = data
  }

  // 检查token是否是自己发布的
  checkToken(req, res, next){
    // 登录注册接口白名单
    if(req.url !== '/user/login' && req.url !== '/user/register'){
      try {
        const result = jwt.verify(req.headers.token, 'mobileOA')
        if(result) next()
      } catch (error) {
        res.send({code:403,message:'登录已经失效，请重新登录'})
        console.log(error)
      }
    }else{
      next()
    }
  }
}

export default new JWT()