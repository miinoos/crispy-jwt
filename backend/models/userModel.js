const mongoose = require("mongoose");

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

mondule.exports = mongoose.model("User", userSchema); //passing the userSchema which we created and the name of the model
