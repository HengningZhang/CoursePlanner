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

DELIMITER //

CREATE PROCEDURE updatecourse(IN course_id VARCHAR(255),
    IN course_name VARCHAR(255),
    IN section INT,
    IN total_slots INT,
    IN currently_enrolled INT,
    IN department VARCHAR(255),
    IN credit Double,
    IN course_time VARCHAR(255),
    IN instructor VARCHAR(255),
    IN description TEXT)
BEGIN
	START TRANSACTION; 
		UPDATE courses
		SET courses.course_name = course_name, 
        courses.total_slots = total_slots, 
        courses.currently_enrolled = currently_enrolled,
        courses.department = department,
        courses.credit = credit,
        courses.course_time = course_time,
        courses.instructor = instructor,
        courses.description = description
        WHERE courses.course_id = course_id AND courses.section = section;
		COMMIT;
		SELECT 'UPDATE SUCCESSFUL!';
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE addcourses(IN course_id VARCHAR(255), IN section INT)
BEGIN
    
	START TRANSACTION;
		INSERT INTO courses
        VALUES(course_id, section);
        
		COMMIT;
		SELECT 'ADD SUCCESSFUL!';

END //

DELIMITER ;



DELIMITER //
CREATE TRIGGER nullcourseid
BEFORE INSERT
ON courses
FOR EACH ROW

	IF NEW.course_id IS NULL OR NEW.section IS NULL THEN
		SIGNAL	SQLSTATE'22003'
		SET	MESSAGE_TEXT = 'Course id and section cannot be null';
END IF;
//
DELIMITER ;

