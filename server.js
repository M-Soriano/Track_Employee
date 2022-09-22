const db = require('./db/connection');
const inquirer = require('inquirer');
const cTable =require('console.table');

const mysql = require('mysql2');


db.connect(err => {

    if (err) throw err;
    console.log('Databese connected');
    promptUser();

});


const promptUser = () => {

    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'options',
            message: 'Select an option',
            choices: [
                'view all departments',
                'view all roles',
                'view all employees',
                'add a department',
                'add a role',
                'add an employee',
                'update an employee role',
                'exit'



            ]
        }
    ])
    .then((answers) => {
        const {options} =answers;
        if(options === 'view all departments') {
            ViewallDepartments();
        }
        if (options === "view all roles") {
            viewrole();
        }
        if (options === "view all employees") {
            viewemployees();
        }
        if (options === "Add A Department") {
            adddeptt();
        }
        if (options === "add a role") {
            addrole();
        }
        if (options === "add an employee") {
            addemployee();
        }
       // if (options === "exit") {}
        


    })
};

const ViewallDepartments = () =>  {
    console.log("Showing all departments");
    const query = `SELECT * FROM department`;
    //SELECT department.id AS id, department.name AS deparment FROM department
    db.query(query, (err, res) =>{
        console.table(res);
        promptUser();

    });
};
const viewrole = () =>  {
    console.log("Showing all roles");
    const query = `SELECT * FROM role`;
    db.query(query, (err, res) =>{
        console.table(res);
        promptUser();

    });
};







const adddeptt = () => {
    inquirer
        .prompt([
            {
                name: "addDepartment",
                type: "input",
                message: "Add Department"
            },
        ])
        .then((answer) => {
            const query = `INSERT INTO department (name) VALUES (?)`;
            let info = [answer.addDepartment];
            db.query(query, info, () => {
                console.log( `department added.`);
            });
        });
        promptUser();
};


const addrole = () => {
    inquirer
        .prompt([
            {
                name: "role",
                type: "input",
                message: "What is employee role?"
            },
            {
                name: "role_salary",
                type: "input",
                message: "What is the salary?"
            },
            {
                name: "roled_department_id",
                type: "input",
                message: "What is the Department ID"
            },
        ])
        .then((answers) => {
            //inserting to role schema
            const query = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
            //making an array/object
            let info = [answers.role, answers.role_salary, answers.role_department_id];
            db.query(query, info, () => {
                console.log(`Role created!`);
            });
        });
        promptUser();
};

const addemployee = () => {
    inquirer
        .prompt([
            {
                name: "First_name",
                type: "input",
                message: "What is the employee's first name?"
            },
            {
                name: "Last_name",
                type: "input",
                message: "What is the employee's last name?"
            },
            {
                name: "Employee_id",
                type: "input",
                message: "What is the Role ID of the employee? (Numbers Only)"
            },
            {
                name: "Employee_manager",
                type: "input",
                message: "What is the ID of the manager for this employee?"
            },
        ])
        .then((answers) => {
            const query = `INSERT INTO staff (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
            let info = [answers.First_name, answers.Last_name, answers.Employee_id, answers.Employee_manager];
            db.query(query, info, () => {
                console.log(`Employee Added!`);
            });
        });
        promptUser();
};
