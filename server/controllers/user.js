import User from "../models/User.js";

const registerUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const user = await User.register(new User({ email, role }), password);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
    process.exit(1);
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user } = await User.authenticate()(email, password);
    if (!user) {
      res.status(401).json("Unauthorized");
      return;
    }
    res.status(200).json({ _id: user._id, email: user.email, role: user.role });
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
    process.exit(1);
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
    process.exit(1);
  }
};
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
    process.exit(1);
  }
};
const getUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log(userId);
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
    process.exit(1);
  }
};

export default {
  registerUser,
  login,
  createUser,
  getUsers,
  getUser,
};
