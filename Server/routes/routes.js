const express = require("express");
const router = express.Router();
const { addUser, getUser, editStatus } = require("../controllers/controllers");

router.post("/adduser", addUser);
router.get("/getusers", getUser);
router.patch('/editstatus', editStatus)

module.exports = router;
