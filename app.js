// eslint-disable-next-line no-unused-vars
import db from './src/mongodb/db.js' //连接数据库
import express from 'express'
import router from './src/routes/index'
import cors from 'cors'
import path from 'path'
import setSwagger from './src/swagger'
import token from './src/middlewares/checkToken'
import http from 'http'
import socket from 'socket.io'

const app = express()

setSwagger(app)
const PORT = process.env.PORT || 3000
// 先允许跨域
app.use(cors())
// 防止 req.body 获取不到值
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(token.checkToken)
// 跨域
// 路由
router(app)

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))

const httpServer = http.createServer(app)
const io  = socket(httpServer, {
  cors: {
    origin: 'http://127.0.0.1:5501/index.html',
    methods: ['GET', 'POST']
  }})

io.on('connection',(socket)=>{
  console.log(socket)
  process.socket = socket
})

httpServer.listen(PORT, () => console.log(`Listening on http://127.0.0.1:${PORT}/api-docs`))
