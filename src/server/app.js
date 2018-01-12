import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import mongoose from 'mongoose';

import Hymn from './Models/Hymn';

const app = express();
const PORT = 8080;

app.use(helmet());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

const url = 'mongodb://localhost:27017/hymns';
mongoose.connect(url, { useMongoClient: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   // connected
// });

app.listen(PORT, () => {
  console.log('App started on port:', PORT);
});

app.get('/', (req, res) => {
  Hymn.find({}, (err, docs) => {
    if (err) { throw err; }
    res.send(docs);
  });
  // res.send('Hello world!');
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

  // Render the error page
  res.status(err.status || 500);
  res.send('error');
});

export default app;
