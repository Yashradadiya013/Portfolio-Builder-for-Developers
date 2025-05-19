const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 4000;
const userrouter = require("./router/userRouter");
app.use(express());
app.use("/", userrouter);

mongoose
  .connect("mongodb://localhost:27017/portfolio_builder")
  .then(() => console.log("mongodb Connected"))
  .catch((error) => console.log("connection error", error));
app.listen(port, () => console.log(`listen port on: ${port}`));
