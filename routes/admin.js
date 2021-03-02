const express = require("express");
const router = express.Router();
const Admin = require("../controller/admin/admin");

router.post("/login", Admin.Login);

module.exports = router;
