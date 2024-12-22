//login controller
const loginUser = (req, res) => {
  res.status(200).json({ message: "You are logged in" });
};

//singup controller
const signupUser = (req, res) => {
  res.status(200).json({ message: "You are signed up" });
};

module.exports = { loginUser, signupUser };
