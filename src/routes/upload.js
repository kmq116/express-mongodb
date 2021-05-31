'use strict'
import multer from 'multer'
import express from 'express'
import path from 'path'
import fs from 'fs'
const router = express.Router()

// 去找 public 目录下的 images文件夹
const upload = multer({
  dest: path.join(path.dirname(__dirname) + '../../public/images'),
})

router.post('/upload', upload.single('file'), async (req, res) => {
  const file = req.file
  //获取后缀名
  const extname = path.extname(file.originalname)
  const oldPath = path.join(
    path.dirname(__dirname) + '../../public/images/' + file.filename
  )
  const newPath = path.join(
    path.dirname(__dirname) + '../../public/images/' + file.filename + extname
  )
  // 重命名拼接图片后缀
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      res.send({ code: 200, message: '上传成功，文件名修改失败' })
    } else {
      res.send({
        code: 200,
        data: {
          url: `http://${req.hostname}:5000/images/${file.filename}${extname}`,
        },
        message: '上传并修改文件名成功',
      })
    }
  })
})

export default router
