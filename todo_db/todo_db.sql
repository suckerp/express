DROP DATABASE IF EXISTS todo;

CREATE DATABASE todo; 

USE todo;

CREATE TABLE Person (
    PID int NOT NULL AUTO_INCREMENT,
    FIRSTNAME varchar(50),
    LASTNAME varchar(50),
    PRIMARY KEY (PID)
);

CREATE TABLE Todolist (
    TID int NOT NULL AUTO_INCREMENT,
    TEXT varchar(255),
    STATUS boolean,
    PID int,
    PRIMARY KEY (TID),
    FOREIGN KEY (PID) REFERENCES Person(PID)
);

INSERT INTO Person (FIRSTNAME, LASTNAME) VALUES
("Max", "Mustermann"),
("Mex", "Mustermann");

INSERT INTO Todolist (TEXT, STATUS, PID) VALUES
("TEST1", false, 1),
("TEST2", true, 2);





