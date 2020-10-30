const House = require('../models/house');

const chance = require('chance').Chance();

module.exports = async({ houseCount = 20 } = {}) => {
  const statusTypes = ['sold', 'pending', 'for sale'];
  const housesToInsert = [...Array(houseCount)]
    .map(() => ({
      address: chance.address(), 
      images: ['an image', 'an image', 'an image', 'an image'], 
      price: `$${chance.integer({ min: 300000, max: 600000 })}`,
      lotSQFT: `${chance.integer({ min: 1000, max: 6000 })}`, 
      houseSQFT: `${chance.integer({ min: 900, max: 2000 })}`, 
      saleStatus: `${chance.pickone(statusTypes)}`, 
      lastSold: `${chance.integer({ min: 1990, max: 2020 })} for $${chance.integer({ min: 300000, max: 600000 })}`,
    }));

  const insertedHouses = await Promise.all(housesToInsert.map(house => House.insert(house)));
};
