const seed = require('./lib/data/seed-data');

seed()
  .then(data => console.log('done'));
