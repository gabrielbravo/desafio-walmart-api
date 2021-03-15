const express = require('express')
const app = express()

const SearchController = require('../controllers/SearchController');

app.get('/search', SearchController.search);
app.get('/product/:code', SearchController.getByCode);

module.exports = app;