const mongoose = require("mongoose");

const MONGO_URL = "mongodb://localhost:27017";

const connectDB = () => {
    mongoose
        .connect(MONGO_URL)
        .then(() => {
            console.log('Database is connect');
        })
        .catch(() => {
            console.log('Error to connect');
        });
};

module.exports = connectDB;
