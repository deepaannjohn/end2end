
CREATE DATABASE e2e;
USE e2e;
CREATE TABLE app1 (name INTEGER(6));
CREATE TABLE app2 (name INTEGER(6));
CREATE USER 'user'@'%' IDENTIFIED BY 'pass';
grant all on *.* to 'user'@'%';
flush privileges;

