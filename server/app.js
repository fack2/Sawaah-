const express = require('express');
const app = express();
const router = require('./controllers');

app.use(express.json());
app.use(express.urlencoded());
app.use('/api', router);

module.exports = app;
