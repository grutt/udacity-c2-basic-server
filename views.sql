DROP VIEW IF EXISTS joined;
CREATE VIEW joined AS
SELECT cars.type, cars.cost, cars.make_id, make.make
  FROM cars
  INNER JOIN make ON (cars.make_id = make.id)
  ORDER BY cost DESC  LIMIT 30;
  
DROP VIEW IF EXISTS toyotas;
CREATE VIEW toyotas AS
SELECT cars.type, cars.cost, cars.make_id, make.make
  FROM cars
  INNER JOIN make ON (cars.make_id = make.id)
  WHERE make.make = 'toyota'
  ORDER BY cost DESC  LIMIT 30;