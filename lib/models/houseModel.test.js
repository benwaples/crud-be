const pool = require('../utils/pool');
const fs = require('fs');
const House = require('./house');

describe('house model', () => {
  beforeEach(() => pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8')));

  it('should insert a house', async() => {
    const house = await House.insert({
      address: 'fake address', 
      images: ['an image'], 
      price: '$33093898',
      lotSQFT: 'lod', 
      houseSQFT: 'little', 
      saleStatus: 'sold', 
      lastSold: '2017', 
    });

    const { rows } = await pool.query('SELECT * FROM houses WHERE id=$1', [house.id]);
    
    expect(rows[0]).toEqual({ id: expect.any(String), address: 'fake address', images: expect.any(String), price: '$33093898', lot_sqft: 'lod', house_sqft: 'little', sale_status: 'sold', last_sold: '2017' });
  });
});
