DROP DATABASE IF EXISTS coursedatabase;
CREATE DATABASE coursedatabase;
SET SQL_SAFE_UPDATES = 0;
set sql_mode='no_auto_create_user,no_engine_substitution';

DROP TABLE IF EXISTS course_main;
CREATE TABLE course_main(
	course_id VARCHAR(255),
    section INT,
    total_slots INT,
    department VARCHAR(255),
    credit Double,
    course_time VARCHAR(255),
    instructor VARCHAR(255),
    description TEXT,
    PRIMARY KEY(course_id, section)
);

CREATE TABLE students(
	student_id VARCHAR(255),
    PRIMARY KEY(student_id)
);