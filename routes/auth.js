const express = require('express')
const router = express.Router(); // line 1 and 2 can be combined, but our goal is to provide clarity. alternate code could be... const router = require('express).Router();
const User = require("../models/User");

//Self Reminder: post create, get read, put update, delete delete

//Register routes
router.post("/register", async (req, res) => {
    try{
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }) // we could have simply wrote req.body to gather all info, but the purpose of writing it all out is to present clean code.
        const user = await newUser.save(); //updates the database with the user.
        res.status(200).json(user)
    } catch(err){
        res.status(500).json // this error indicates that there is something wrong with the server. Being official ra
    }
})
// async is used because we don't know how long it will take for the user to become registered within the database.
//Login

module.exports = router