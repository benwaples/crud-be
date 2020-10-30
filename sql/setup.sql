DROP TABLE IF EXISTS houses;

CREATE TABLE houses (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  address TEXT NOT NULL, 
  images TEXT NOT NULL, 
  price TEXT NOT NULL,
  lot_sqft TEXT NOT NULL, 
  house_sqft TEXT NOT NULL, 
  sale_status TEXT NOT NULL, 
  last_sold TEXT NOT NULL
)