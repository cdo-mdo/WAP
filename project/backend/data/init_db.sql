-- Create Database
CREATE DATABASE IF NOT EXISTS cs472db;
USE cs472db;

-- Create Table for Contacts
CREATE TABLE IF NOT EXISTS contacts (
    id CHAR(36) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    bookmarked BOOLEAN DEFAULT FALSE
);

