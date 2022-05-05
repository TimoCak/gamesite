const express = require('express');
const app = express();
const port = 3000;
//const sql = require('./db.js');

app.use(express.json())



app.get('/',(req,res) =>
    res.send('<h1>Hello World</h1>'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
