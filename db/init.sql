DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS cards;

 -- users table
 CREATE TABLE users(
     user_id SERIAL PRIMARY KEY,
     username TEXT,
     hashed_password TEXT,
     email TEXT
 )


-- cards table
CREATE TABLE cards(
    card_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    type VARCHAR(32),
    annual_fee INT,
    points INT,
    img TEXT
)