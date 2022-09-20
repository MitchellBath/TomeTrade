USE tometrade;

DROP TABLE IF EXISTS profile;

CREATE TABLE trade(
trade_id INT AUTO_INCREMENT NOT NULL,
owner VARCHAR(40) NOT NULL,
requester VARCHAR(40) NOT NULL,
bookname VARCHAR(40) NOT NULL,
trade_status VARCHAR(20),
isbn INT NOT NULL,
primary key(trade_id, owner, requester, bookname),
FOREIGN KEY (isbn)
        REFERENCES books(isbn)
        ON DELETE CASCADE
);

select * from trade