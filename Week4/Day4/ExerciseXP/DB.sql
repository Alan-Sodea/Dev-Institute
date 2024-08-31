-- 1. Create Database and Table in PostgreSQL
-- Using psql Command Line:
-- Create Database:
CREATE DATABASE menu_db;

-- Connect to the Database:
\c menu_db

-- Create Table:
CREATE TABLE Menu_Items (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(30) NOT NULL,
    item_price SMALLINT DEFAULT 0
);
