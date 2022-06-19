// imports ---
const express = require("express");
require("dotenv").config();
const app = express();

const cors = require("cors");
const { default: mongoose } = require("mongoose");

const studentRoutes = require("./route/student"); // import student route

// db connection --
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("DB Connected!");
  })
  .catch(() => {
    console.log("DB unable to connect!");
  });

//middleware
app.use(cors());
app.use(express.json());

app.use("/api", studentRoutes); // student routes

//port config
const port = process.env.PORT || 8082;
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
