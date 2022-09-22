const mysql =require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',

    user: 'root',

    password: 'Whyme2022#949', 

    database: 'tracker12'

});

module.exports = db;
