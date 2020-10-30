// add to database

const { request } = require('../scraper/request');
const { parseDoc } = require('./parse');
 
const scrape = url => {
  return request(url)
    .then(doc => parseDoc(doc));
};

module.exports = { scrape };
