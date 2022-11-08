INSERT INTO department (title)
VALUES
    ("Marketing"),
    ("Information Technology"),
    ("Software Development"),
    ("Human Resources"),
    ("Accounting");
    
INSERT INTO role (title, salary, department_id)
VALUES
    ("Marketing Coordinator", 50000, 1),
    ("IT Analyst", 70000, 2),
    ("Full-Stack Developer", 80000, 3),
    ("Human Resources Director", 100000, 4),
    ("Accounting Coordinator", 50000, 5),
    ("IT Director", 120000, 6),
    ("Accounting Director", 100000, 7);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("John", "Doe", 4, NULL),
    ("Rachel", "Martin", 6, NULL),
    ("Mark", "Adams", 7, NULL),
    ("Brad", "Jones", 1, 4),
    ("Jessica", "Smith", 2, 6),
    ("Jake", "Miller", 3, 6),
    ("Albert", "Jones", 5, 7);