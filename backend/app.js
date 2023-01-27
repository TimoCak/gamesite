const express = require('express');
const app = express();
const port = 3000;
const connection = require('./db');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

//how secure hashes thee password:
const saltRounds = 10;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); //should set to http://localhost::8080 (frontend)
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

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
    });
}); 
    
//getUser by id 

//postUser
app.post('/signup',async function(req,res){

     try {   
        const hashedPassword = await bcrypt.hash(req.body.password,saltRounds)
        const sql = `INSERT INTO users (userUID, userEmail, userPassword) VALUES( "${req.body.username}", "${req.body.email}", "${hashedPassword}");`;
        connection.query(sql, (err,data) => {
            if(err) throw err;
            res.json({
                status: 201,
                data,
                message: "registered successfully",
                success: function() {
                    window.location.href = "http://localhost:8080"
                }
            });
            
        })
        
    } catch {
        res.status(500).send("sorry something went wrong!");
    }    
});

app.post('/signin', async function (req, res) {
    console.log(req.body);
    
        console.log("username:" + req.body.username + "\npassword: " + req.body.password);
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        const sql = `SELECT userID FROM users WHERE userUID="${req.body.username}";`;
        console.log(sql);
        
        connection.query(sql, function(err, data, field){
            if (err) throw err;
             res.json({
                status: 200,
                data,
                message: "Users succesfully recieved!"
            })
        });
});

app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`));