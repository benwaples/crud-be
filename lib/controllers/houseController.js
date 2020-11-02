const { Router } = require('express');
const House = require('../models/house');
const { scrape } = require('../scraper/store');

module.exports = Router()
  .post('/', (req, res, next) => {
    scrape(req.body.url)
      .then(house => House.insert(house))
      .then(house => res.send(house))
      .catch(next);
  })
  
  .get('/', (req, res, next) => {
    House.find()
      .then(houses => res.send(houses))
      .catch(next);
  })
  
  .get('/:id', (req, res, next) => {
    House.findById(req.params.id)
      .then(house => res.send(house))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    House.update(req.params.id, req.body)
      .then(updatedHouse => res.send(updatedHouse))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    House.delete(req.params.id)
      .then(deletedHouse => res.send(deletedHouse))
      .catch(next);
  })
;
