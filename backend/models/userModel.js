const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema; //taking out an instance of the Schema method from mongoose.

const userSchema = new Schema({
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});

userSchema.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough");
  }

  const exists = await this.findOne({ email }); //checking if the email is already used by another user.

  if (exists) {
    throw Error("Email already in use"); //we dont have access to reponse function
  }

  const salt = await bcrypt.genSalt(10); //generating a random string which will get attached to the password before hashing
  const hash = await bcrypt.hash(password, salt); //hashing the password

  const user = await this.create({ email, password: hash }); //creating a document in mongo

  return user;
};

module.exports = mongoose.model("User", userSchema); //passing the userSchema which we created and the name of the model
