const { Router } = require('express');
const House = require('../models/house');

module.exports = Router()
  .post('/', (req, res, next) => {
    House.insert(req.body)
      .then(house => res.send(house))
      .catch(next);
  });
