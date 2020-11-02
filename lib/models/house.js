const pool = require('../utils/pool');

module.exports = class House {
  id;
  address;
  images;
  price;
  lotSQFT;
  houseSQFT;
  saleStatus;
  lastSold;

  constructor(row) {
    this.id = row.id;
    this.address = row.address;
    this.images = row.images;
    this.price = row.price;
    this.lotSQFT = row.lot_sqft;
    this.houseSQFT = row.house_sqft;
    this.saleStatus = row.sale_status;
    this.lastSold = row.last_sold;
  }

  static async insert(house) {
    const { rows } = await pool.query(
      'INSERT INTO houses (address, images, price, lot_sqft, house_sqft, sale_status, last_sold) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [house.address, house.images, house.price, house.lotSQFT, house.houseSQFT, house.saleStatus, house.lastSold]
    );

    return new House(rows[0]);
  }

  static async find() {
    const { rows } = await pool.query(
      'SELECT * FROM houses'
    );

    return rows.map(house => new House(house));
  }

  static async findById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM houses WHERE id=$1',
      [id]
    );

    return new House(rows[0]);
  }

  static async update(id, house) {
    const { rows } = await pool.query(`
      UPDATE houses
        SET address=$1, 
            images=$2, 
            price=$3, 
            lot_sqft=$4, 
            house_sqft=$5, 
            sale_status=$6, 
            last_sold=$7
        WHERE id=$8
        RETURNING *
    `,
    [house.address, house.images, house.price, house.lotSQFT, house.houseSQFT, house.saleStatus, house.lastSold, house.id]);

    return new House(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM houses WHERE id=$1 RETURNING *', [id]
    );
    return new House(rows[0]);
  }


};
