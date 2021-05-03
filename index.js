const express = require('express')
const app = express();

app.get('/',(req,res) =>{
    res.send("This is Root");
})


// app.get('/:class',(req,res) =>{
//     res.send("Welcome to class " + req.params.class)
// })


app.get('/:class/:batch',(req,res) =>{
    res.send("Welcome to Class " + req.params.class + " Batch " + req.params.batch)
})


app.get('/*land',(req,res) =>{
    res.send("Welcome to string Pattern *land")
})

app.listen(5000,() => console.log("Listening on port 5000"))