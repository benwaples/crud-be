const pool = require('../utils/pool');
const fs = require('fs');
const seed = require('./seed-data');




beforeEach(() => {
  return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
});

beforeEach(() => {
  return seed();
});
