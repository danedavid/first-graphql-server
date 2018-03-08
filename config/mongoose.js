const config = require('./index.js');
const mongoose = require('mongoose');

module.exports = function () {
  mongoose.Promise = global.Promise;
  const db = mongoose.connect(config.db);
  mongoose.connection.on('error', err => {
    console.log('Could not connect to MongoDB');
  })
    .on('open', () => {
      console.log('Connection to MongoDB established');
    });

  return db;
};
