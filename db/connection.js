const mysql =require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',

    user: 'root',

    password: 'whynot', 

    database: 'tracker12'

});

module.exports = db;
