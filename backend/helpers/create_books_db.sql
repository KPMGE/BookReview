CREATE DATABASE books_review;
USE books_review;
CREATE TABLE books(
  id VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(1000) NOT NULL,
  author VARCHAR(100) NOT NULL,
  PRIMARY KEY(id)
);
