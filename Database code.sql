CREATE DATABASE mentorship_db;

USE mentorship_db;

CREATE TABLE mentors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    expertise VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mentor_id INT,
    student_id INT,
    session_date DATE,
    FOREIGN KEY (mentor_id) REFERENCES mentors(id),
    FOREIGN KEY (student_id) REFERENCES students(id)
);

INSERT INTO mentors(name, expertise, email)
VALUES
('Arun Kumar', 'Web Development', 'arun@gmail.com'),
('Priya Sharma', 'Data Science', 'priya@gmail.com');
