const Users = require("../model/Documents");

const addUser = async (req, res) => {
  try {
    const { fullname, email, gender } = req.body.data;

    if (!fullname) {
      return res.status(400).json({ error: "Fullname is required" });
    }

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    if (!gender) {
      return res.status(400).json({ error: "Gender is required" });
    }

    await Users.create({ fullname, email, gender });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occurred while processing the request" });
  }
};

const getUser = async (req, res) => {
  try {
    const allUsers = await Users.find();
    return res.status(200).json(allUsers);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occurred while retrieving users" });
  }
};

module.exports = {
  addUser,
  getUser,
};
