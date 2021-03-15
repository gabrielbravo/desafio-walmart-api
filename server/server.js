require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ErrorMiddleware = require('./middlewares/errorConverterMiddleware');
const config = require('./config/config');
const app = express();
const bodyParser = require('body-parser');


app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.disable('x-powered-by');

app.use (require('./routes/index'));
 
mongoose.Promise = global.Promise;
console.log(config.database)
mongoose.connect(config.database.uri, config.database.options)
  .then(() => {
    console.log('Mongo DB Connected!');
  })
  .catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
});

// mongoose.set("debug", (collectionName, method, query, doc) => {
//   console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
// });

app.use(ErrorMiddleware);

app.listen(config.port, () => {
    console.log("Escuchando en puerto: ", config.port);
})