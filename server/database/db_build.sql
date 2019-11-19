BEGIN;
DROP TABLE IF EXISTS users, destination, tickets
CASCADE;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  user_name VARCHAR (100) NOT NULL,
  email VARCHAR (50) UNIQUE NOT NULL,
  password VARCHAR (50) NOT NULL,
  first_name VARCHAR (50) NOT NULL,
  last_name VARCHAR (50) NOT NULL,
  card_number INTEGER NOT NULL,
  experation_date DATE NOT NULL,
  security_code VARCHAR (50) NOT NULL
  );


  CREATE TABLE destination (
    destination_id SERIAL PRIMARY KEY,
    country VARCHAR (50) NOT NULL,
    date DATE NOT NULL,
    user_id integer REFERENCES users (user_id)

  );

  CREATE TABLE tickets (
    ticket_id SERIAL PRIMARY KEY ,
    departure_time VARCHAR (15) NOT NULL,
    arraival_time VARCHAR (15) NOT NULL,
    destination_id integer REFERENCES destination (destination_id)

  );
  COMMIT;
