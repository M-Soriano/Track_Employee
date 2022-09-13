const db = require('./db/connection');
const inquirer = require('inquirer');
const cTable =require('console.table');
const { query } = require('./db/connection');


db.connect(err => {

    if (err) throw err;
    console.log('Databese connected');
    promptUser();

});


const promptUser = () => {

    inquirer
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
    })
};

const ViewallDepartments = () =>  {
    console.log("Showing all departments");
    const sql = `SELECT department.id AS id, department.name AS deparment FROM department`;
    db.query(sql, (err, res) =>{
        console.table(res);
        promptUser();

    });
};
