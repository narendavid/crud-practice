const express = require("express");
const User = require('../models/user')

const router = express.Router()


router.get('/users', (req, res) => {
    res.send('Welcome to my app');
});

router.post('/user', (req, res) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const phoneNumber = req.body.phoneNumber;
        const user = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
        }
        User(user).save().then(()=>{

        }).catch()

    } catch (error) {

    }

});

module.exports = router