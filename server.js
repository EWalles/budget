//require dependencies
const express = require("express");
const budget = require("./models/budget");
const bodyParser = require("body-parser")


//initialize express app
const app = express();
const port = 3000

//bank
let bankAcc = 0

//middleware
app.use(express.static("Public"))
app.use(express.urlencoded({ extended: false }))
app.get("/budgets", (req, res) => {
    res.render("index.ejs", {
        data: budget,
        money: bankAcc,
    })
})


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
// new
app.get("/budgets/new", (req, res) => {
    res.render("new.ejs", {
        newData: budget,
    })
})

// create
app.post("/budgets", (req, res) => {
    // separate tags data to an array
    let tags = req.body.tags.split(',');
    // set tags in body to an array
    req.body.tags = tags;
    budget.push(req.body)
    // console.log(budget)
    res.redirect("/budgets")
})

// show
app.get("/budgets/:index", (req, res) => {
    res.render("show.ejs", {
        dataIndex: budget[req.params.index],
    })
})
//listen
app.listen(port, () => {
    console.log("Chicago is listening")
});