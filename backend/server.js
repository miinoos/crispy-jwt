const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); //to get data from the .env file

const userRoutes = require("./routes/userRoutes");

const app = express();

//middleware
app.use(express.json()); //express json middleware for getting information from the body of the req if any

app.use((req, res, next) => {
  console.log(req.path, req.method); // to print the path and the method
  next();
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello there!" });
});

app.use("/", userRoutes); //adding the routes to the file as middleware so that when the any request is passed as "/" the it will go into the userRoutes and check if it matches any of the both login or singup

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    //if the mongo db is connected then start the server
    app.listen(process.env.PORT, () => {
      console.log("Server running at port : ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
