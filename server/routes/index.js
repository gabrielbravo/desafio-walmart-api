const express = require('express')
const app = express()

app.use( require ('./search'));

module.exports = app;