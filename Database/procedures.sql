-- Creating procedures for website

SET SQL_SAFE_UPDATES = 0;

-- search by date
DROP PROCEDURE IF EXISTS searchbyid;

DELIMITER //

CREATE PROCEDURE searchbyid(IN courseid VARCHAR(255))

BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT('No result found!');

SELECT  *
FROM course
WHERE course.course_id Like courseid;

END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE searchbyinstructor(IN instructor VARCHAR(255))

BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT('No result found!');

SELECT  *
FROM course
WHERE course.instructor = instructor;

END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE searchbyname(IN coursename VARCHAR(255))

BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT('No result found!');

SELECT  *
FROM course
WHERE course.course_name Like coursename;

END //

DELIMITER ;

