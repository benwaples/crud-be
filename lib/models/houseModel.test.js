require('../data/data-helper');
const pool = require('../utils/pool');
const House = require('./house');

describe('house model', () => {

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

  it('should return all houses', async() => {
    const houses = await House.find();

    expect(houses.length).toEqual(20);
  });

  it('should return a house by id', async() => {
    const houseById = await House.findById(1);

    expect(houseById).toEqual({ id: expect.any(String), address: expect.any(String), images: expect.any(String), price: expect.any(String), lotSQFT: expect.any(String), houseSQFT: expect.any(String), saleStatus: expect.any(String), lastSold: expect.any(String) });
  });

  it('should update a house by id', async() => {
    const updatedHouse = {
      id: 5,
      address: 'updated fake', 
      images: ['an image'], 
      price: '$33093898',
      lotSQFT: 'lot', 
      houseSQFT: 'more', 
      saleStatus: 'pending', 
      lastSold: '2019', 
    };

    const response = await House.update(updatedHouse.id, updatedHouse);
    
    expect(response).toEqual({ ...updatedHouse, id: expect.any(String), images: expect.any(String) });
  });

  it('should delete a house by id', async() => {
    await House.delete(1);
    const { rows } = await pool.query(
      'SELECT * FROM houses WHERE id=1'
    );

    expect(rows[0]).toEqual(undefined);
  });
});
