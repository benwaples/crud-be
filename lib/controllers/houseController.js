const { Router } = require('express');
const House = require('../models/house');
const { scrape } = require('../scraper/store');

module.exports = Router()
  .post('/', (req, res, next) => {
    console.log(req.body);
    scrape(req.body.url)
      .then(house => House.insert(house))
      .then(house => res.send(house))
      .catch(next);
  })
  
  .get('/', (req, res, next) => {
    House.find()
      .then(houses => res.send(houses))
      .catch(next);
  });
