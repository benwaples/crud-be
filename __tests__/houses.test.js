require('../lib/data/data-helper');
const request = require('supertest');
const app = require('../lib/app');

describe('House routes', () => {
  it('should insert a house', async() => {
    const house = {
      address: 'fake address', 
      images: ['an image'], 
      price: '$33093898',
      lotSQFT: 'lod', 
      houseSQFT: 'little', 
      saleStatus: 'sold', 
      lastSold: '2017', 
    };

    return await request(app)
      .post('/api/v1/houses')
      .send(house)
      .then(res => expect(res.body).toEqual({ ...house, id: expect.any(String), images: expect.any(String) }));
  });

  it('should return a list of all houses', async() => {
    return await request(app)
      .get('/api/v1/houses')
      .then(res => expect(res.body.length).toEqual(20));
  });
});
