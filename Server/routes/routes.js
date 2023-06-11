const express = require("express");
const router = express.Router();
const {
  addUser,
  getUser,
  editStatus,
  userDetails,
  editUser,
  deleteUser
} = require("../controllers/controllers");

router.post("/adduser", addUser);
router.get("/getusers", getUser);
router.patch("/editstatus", editStatus);
router.get("/userdetails/:id", userDetails);
router.post('/edituser', editUser);
router.post('/deleteuser', deleteUser)

module.exports = router;
