require("dotenv").config();
const connectDB = require("./database/db");
const express = require("express");

const app = express();

//connect to database
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
