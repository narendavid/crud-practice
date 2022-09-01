const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: String,
    status: {
        type: String,
        default: "enabled",
        enum: ["enabled", "disabled",],
    },
})

module.exports = model("users", userSchema)
