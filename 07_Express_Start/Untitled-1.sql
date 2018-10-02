drop database if exists personen;
create database personen;
use personen;
create table person (
    PID int NOT NULL AUTO_INCREMENT, 
    Vorname varchar(50), 
    Nachname varchar(50), 
    Age int, 
    PRIMARY KEY (PID));

insert into person (Vorname, Nachname, Age)
values 
("Tim", "Test", 21),
("Tom", "Test", 22),
("Tem", "Test", 23),
("Tam", "Test", 24),
("Tum", "Test", 25);

select * from person where Age<=23;