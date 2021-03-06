const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cors = require('cors');

const Hymn = require('./db/Models/Hymn');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(helmet());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.use(cors());

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/hymns';
mongoose.connect(url, { useMongoClient: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => {
  console.log('App started on port:', PORT);
});

app.get('/', (req, res) => {
  Hymn.find({}, (err, docs) => {
    if (err) { throw err; }
    res.send(docs);
  });
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error message
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
