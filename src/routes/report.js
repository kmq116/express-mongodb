'use strict'
import express from 'express'
import Report from '../controller/report/report'
const router = express.Router()

router.post('/report',Report.reportSave)
router.get('/report',Report.reportQuery)

export default router