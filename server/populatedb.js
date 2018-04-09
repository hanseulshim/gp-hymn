#! /usr/bin/env node
import Hymn from './db/Models/Hymn';
import data from './data';

console.log('This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');

// Get arguments passed on command line
const userArgs = ['mongodb://localhost:27017/hymns'];

const async = require('async');

const mongoose = require('mongoose');

const mongoDB = userArgs[0];
mongoose.connect(mongoDB, {
  useMongoClient: true,
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.dropCollection('hymncollections', (err, result) => {
  console.log('wiped database');
});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

const hymns = [];

const hymnCreate = (id, name, scan, originalKey, chorus, v1, v2, v3, v4, v5, bridge, cb) => {
  const hymnDetail = {
    id,
    name,
    scan,
    v1,
    v2,
    v3,
    v4,
    v5,
    chorus,
    bridge,
    originalKey,
  };

  const hymn = new Hymn(hymnDetail);
  hymn.save((err) => {
    if (err) {
      cb(err, null);
      return;
    }
    console.log(`New Hymn: ${hymn}`);
    hymns.push(hymn);
    cb(null, hymn);
  });
}

const createHymns = (cb) => {
  async.parallel(
    data.map(hymn => {
      return (callback) => {
        hymnCreate(hymn.id, hymn.name, hymn.scan, hymn.originalKey, hymn.chorus, hymn.v1, hymn.v2, hymn.v3, hymn.v4, hymn.v5, hymn.bridge, callback);
      }
    }),
    cb
  );
}

async.series(
  [
    createHymns,
  ],
  // optional callback
  (err, results) => {
    if (err) {
      console.log(`FINAL ERR: ${err}`);
    } else {
      console.log(`HYMNInstances: ${hymns}`);
      // console.log(`results var: ${results}`);
    }
    // All done, disconnect from database
    mongoose.connection.close();
  }
);

