const express = require('express');
const userRoutes = require("../routes/userRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(userRoutes);

module.exports = app;