const { User } = require("../models/user");
const { CustomError, ctrlWrapper } = require("../helpers");

const signup = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  user &&
    (() => {
      throw CustomError(409, "This email already exists");
    })();
  const newUser = await User.create(req.body);
  res.status(201).json({
    email: newUser.email,
    name: newUser.name,
  });
};

module.exports = {
  signup: ctrlWrapper(signup),
};
