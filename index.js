const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(console.log("Connected to Railway.app")).catch((err) => console.log(err));
// Mongoose always treats creating a new index as true so it is no longer required in the code. If false then you will need to indicate it in the code. Otherwise you are absolutely fine.

console.log("Orion")


app.use("/Orion", (req, res) => {
    console.log("This Url is being seen")
})

app.listen("5000", () => {
    console.log("Backend is running");
})