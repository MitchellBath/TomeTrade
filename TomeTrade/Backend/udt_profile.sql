USE tometrade;

DROP TABLE IF EXISTS profile;

CREATE TABLE profile(
firstname VARCHAR(40) NOT NULL,
lastname VARCHAR(40) NOT NULL,
city VARCHAR(40) NOT NULL,
country VARCHAR(40) NOT NULL,
bio VARCHAR(250) NOT NULL,
postalcode INT NOT NULL,
username VARCHAR(40) NOT NULL,
primary key (firstname, lastname),
FOREIGN KEY (username)
        REFERENCES users(username)
        ON DELETE CASCADE
);

select * from profile