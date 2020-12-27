// setInterval(()=>{console.log('repeat every .5 second')},500)

//native modules
const path = require('path');

//3th party modules 
const express = require('express');
const app = express();

app.use(express.static('public'));

app.all('/',(req,res)=>{
    console.log(path.join(__dirname + '/node.html'));
    res.sendFile(path.join(__dirname + '/node.html'));
});

app.all('*',(req,res)=>{
    res.send("<h1>Sorry, this page dosen't exist</h1>");
})

app.listen(3000, ()=>{
    console.log("Server is listening on port 3000");
});