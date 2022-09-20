/*create book table and insert information about books into it.*/

USE tometrade;

DROP TABLE IF EXISTS books;

CREATE TABLE books(
isbn int PRIMARY KEY NOT NULL,
bookname VARCHAR(40) NOT NULL,
username VARCHAR(40) NOT NULL,
uid int NOT NULL,
FOREIGN KEY (uid)
        REFERENCES users(uid)
        ON DELETE CASCADE
);


INSERT INTO books (isbn,bookname,uid,username)
VALUES (1234567890,"The Winds of Winter",2,"Koushik");

INSERT INTO books (isbn,bookname,uid,username)
VALUES (1298712653,"A Song Of Ice And Fire",1,"Hoshank");

INSERT INTO books (isbn,bookname,uid,username)
VALUES (1213245421,"A Dance With Dragons",3,"Yadnesh");

INSERT INTO books (isbn,bookname,uid,username)
VALUES (1234567899,"The Last Wish",4,"Mitch");

select * from books;