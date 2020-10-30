require('../lib/data/data-helper');
const request = require('supertest');
const app = require('../lib/app');

describe('House routes', () => {
  it('should insert a house', async() => {
    

    return await request(app)
      .post('/api/v1/houses')
      .send({ url: 'https://www.realtor.com/realestateandhomes-detail/1931-NE-Pacific-St_Portland_OR_97232_M22217-96489' })
      .then(res => expect(res.body).toEqual({ address: expect.any(String), houseSQFT: expect.any(String), lotSQFT: expect.any(String), lastSold: expect.any(String), saleStatus: expect.any(String), price: expect.any(String), id: expect.any(String), images: expect.any(String) }));
  });

  it('should return a list of all houses', async() => {
    return await request(app)
      .get('/api/v1/houses')
      .then(res => expect(res.body.length).toEqual(20));
  });
});
