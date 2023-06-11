const Users = require("../model/Documents");

const addUser = async (req, res) => {
  try {
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

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

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Invalid email address" });
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

const editStatus = async (req, res) => {
  try {
    const { id, status } = req.body.data;
    await Users.findOneAndUpdate({ _id: id }, { $set: { status: status } });
    return res.status(200);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An Error occurred while changing status" });
  }
};

const userDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const userDetails = await Users.findOne({ _id: id });
    return res.status(200).json({ userDetails });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An Error occurred while changing status" });
  }
};

const editUser = async (req, res) => {
  try {

    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    const { fullname, email, gender, _id } = req.body.data;

    if (!fullname) {
      return res.status(400).json({ error: "Fullname is required" });
    }

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    if (!gender) {
      return res.status(400).json({ error: "Gender is required" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    await Users.findOneAndUpdate(
      { _id: _id },
      {
        $set: { fullname: fullname, email: email, gender: gender },
      }
    ).then(() => {
      return res.status(200).json({ success: true });
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An Error occurred while changing status" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;
    await Users.deleteOne({ _id: id }).then(()=>{
      return res.status(200).json({success:true});
    })
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An Error occurred while changing status" });
  }
};

module.exports = {
  addUser,
  getUser,
  editStatus,
  userDetails,
  editUser,
  deleteUser,
};
