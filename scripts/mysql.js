
CREATE DATABASE e2e;

USE e2e;

CREATE TABLE app1 (name INTEGER(6));

INSERT INTO app1 VALUES (999999);

SELECT * FROM app1;

USE e2e;

CREATE TABLE app2 (name INTEGER(6));

INSERT INTO app2 VALUES (999999);

SELECT * FROM app2;



To create credentials :
CREATE USER 'joseph'@'172.17.0.1' IDENTIFIED BY '123456'; 
GRANT ALL PRIVILEGES ON *.* TO 'joseph'@'172.17.0.1' WITH GRANT OPTION; 
flush privileges;

