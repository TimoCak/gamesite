const express = require('express');
const app = express();
const port = 3000;
const connection = require('./db');




app.use(express.json())

app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`));

/*
*HTTP-Responses:
*/

//getUsers sends all signed up users
app.get('/getUsers',function (req,res) {
    let sql = `SELECT * FROM users`;
    connection.query(sql, function(err, data, field){
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "Users succesfully recieved!"
        })
    });}); 
    
//getUser by id 

//postUser
app.post('/postUser',function(req,res){
    
})


