INSERT INTO department (title)
VALUES
    ("Marketing"),
    ("Information Technology"),
    ("Software Development"),
    ("Human Resources"),
    ("Accounting"),
    ("Administration");
    
INSERT INTO role (title, salary, department_id)
VALUES
    ("CEO", 200000, 6),
    ("IT Director", 120000, 2),
    ("Accounting Director", 100000, 5),
    ("Human Resources Director", 100000, 4),
    ("Marketing Coordinator", 50000, 1),
    ("IT Analyst", 70000, 2),
    ("Full Stack Developer", 80000, 3),
    ("Accounting Coordinator", 50000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Jack", "Murphy", 1, NULL),
    ("John", "Doe", 2, 1),
    ("Rachel", "Martin", 3, 1),
    ("Jessica", "Smith", 4, 1),
    ("Mark", "Adams", 5, 4),
    ("Brad", "Jones", 6, 2),
    ("Jake", "Miller", 7, 2),
    ("Albert", "Jones", 8, 3);