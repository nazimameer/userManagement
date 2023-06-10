const express = require("express");
const router = express.Router();
const { addUser, getUser } = require("../controllers/controllers");

router.post("/adduser", addUser);
router.get("/getusers", getUser);

module.exports = router;
