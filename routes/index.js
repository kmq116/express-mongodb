const express = require("express");
const router = express.Router();
const Report = require("../controller/report/report");


/* 新增举报信息 */
router.post("/report", Report.addReport);
router.get("/reportList", Report.reportList);

module.exports = router;
