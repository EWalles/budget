//require dependencies
const express  = require('express');
const budget = require(".budgets")

//initialize express app
const app = express();
const port = 3000

//middleware


//define routes
app.get("/budgets", (req, res) =>{
    res.send("")
})
app.get("/budgets/:index", (req, res) =>{
    res.send("")
})
app.get("/budgets/new", (req, res) =>{
    res.send("")
})
//index

//new

// d
// u
// c
// e

// show
app.post("/budgets", (req, res) => {
    res.send("")
})
//port listen