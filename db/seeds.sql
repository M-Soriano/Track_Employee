USE db_tracker12;

INSERT INTO department (name)
VALUES
('Hr'),
('Sales'),
('marketing')

INSERT INTO role (title, salary, department_id)
VALUES

('manager', 45000, 1),
('supervisor', 37000, 2),
('secretary' 35000 ,3),
('associate' 25000, 4)

INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES

('Miguel', 'Soriano', 1, 1 ),
('Mike', 'smith', 2, 2),
('John', 'Doe', 3, 3),
('Peter', 'Parker', 4, 4)