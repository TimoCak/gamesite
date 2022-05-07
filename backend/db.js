const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 't7i9m8o12',
    database: 'gaming'
})

connection.connect(error => {
    if (error) throw error;
    console.log("Connected to database.")
});

module.exports = connection;