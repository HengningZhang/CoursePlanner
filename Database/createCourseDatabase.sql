DROP DATABASE IF EXISTS coursedatabase;
CREATE DATABASE coursedatabase;
SET SQL_SAFE_UPDATES = 0;
set sql_mode='no_auto_create_user,no_engine_substitution';

DROP TABLE IF EXISTS courses;
CREATE TABLE courses(
	course_id VARCHAR(255),
    course_name VARCHAR(255),
    section INT,
    total_slots INT,
    currently_enrolled INT,
    department VARCHAR(255),
    credit Double,
    course_time VARCHAR(255),
    instructor VARCHAR(255),
    description TEXT,
    PRIMARY KEY(course_id, section)
);

DROP TABLE IF EXISTS users;
CREATE TABLE users(
	user_id VARCHAR(255),
    user_name VARCHAR(255),
	user_type INT,
    PRIMARY KEY(user_id)
);