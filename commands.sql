CREATE TABLE IF NOT EXISTS mechanics(
    name VARCHAR(255) NOT NULL,
    shopname VARCHAR(255) NOT NULL,
    phoneno1 VARCHAR(255) NOT NULL,
    phoneno2 VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    bike BOOLEAN NOT NULL,
    tractor BOOLEAN NOT NULL,
    car BOOLEAN NOT NULL,
    bus BOOLEAN NOT NULL,
    vehicles BOOLEAN NOT NULL,
    location VARCHAR(255) NOT NULL,
    PRIMARY KEY (name)
);
