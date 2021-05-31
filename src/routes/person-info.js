'use strict'
import express from 'express'
import PersonInfo from '../controller/person-info/person-info'
const router = express.Router()

router.post('/person-info',PersonInfo.infoSave)
router.get('/person-info',PersonInfo.infoQuery)

export default router