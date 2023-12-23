const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const { CustomError, ctrlWrapper } = require("../helpers");
const { SECRET_KEY } = process.env;
const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw CustomError(409, "This email already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 11);
  const newUser = await User.create({ ...req.body, password: hashedPassword });

  res.status(201).json({
    email: newUser.email,
    name: newUser.name,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw CustomError(401, "You email or password is invalid.");
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw CustomError(401, "You email or password is invalid.");
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "11h" });
  res.json({ token });
};

module.exports = {
  signup: ctrlWrapper(signup),
  login: ctrlWrapper(login),
};
