#! /usr/bin/env node
import Hymn from './db/Models/Hymn';

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
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

const hymns = [];

const hymnCreate = (name, order, originalKey, chorus, v1, v2, v3, v4, v5, bridge, cb) => {
  const hymndetail = {
    name,
    order,
    v1,
    v2,
    v3,
    v4,
    v5,
    chorus,
    bridge,
    originalKey,
  };

  const hymn = new Hymn(hymndetail);
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
    [
      (callback) => {
        hymnCreate('Amazing Grace', ['v1', 'chorus', 'v2', 'chorus', 'v3', 'chorus'], 'A', 'Chorus Lyrics', 'V1 Lyrics', 'V2 Lyrics', 'V3 Lyrics', '', '', '', callback);
      },
      (callback) => {
        hymnCreate('Close to Thee', ['v1', 'chorus', 'v2', 'chorus', 'v3', 'chorus'], 'D', 'Chorus Lyrics', 'V1 Lyrics', 'V2 Lyrics', 'V3 Lyrics', '', '', '', callback);
      },
      (callback) => {
        hymnCreate('The Old Rugged Cross', ['v1', 'chorus', 'v2', 'chorus', 'v3', 'chorus'], 'G', 'Chorus Lyrics', 'V1 Lyrics', 'V2 Lyrics', 'V3 Lyrics', '', '', '', callback);
      },
      (callback) => {
        hymnCreate('Abide with Me', ['v1', 'chorus', 'v2', 'chorus', 'v3', 'chorus'], 'C', 'Chorus Lyrics', 'V1 Lyrics', 'V2 Lyrics', 'V3 Lyrics', '', '', '', callback);
      },
    ],
    // optional callback
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

