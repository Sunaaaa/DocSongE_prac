var mysql = require('mysql');
// const { createConnection } = require('net');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'ssafy',
    password : 'ssafy',
    port : 3306,
    database : 'ssafyfinal'
})

connection.connect();

connection.query('SELECT userid AS solution from userinfo', function(err, rows, fields){
    if (err) throw err;
    rows.forEach(r => {
        console.log('The Solution is : ', r.solution);        
    });
});

connection.end()