//require dependencies
const express = require("express");
const budget = require("./models/budgets.js");
const bodyParser = require("body-parser")


//initialize express app
const app = express();
const port = 3000

//bank
let bankAcc = 0;

//middleware
app.use(express.static("Public"))
app.use(express.urlencoded({ extended: false }))

app.get("/budgets", (req, res) => {
    res.render("views/index.ejs", {
        data: budget,
        money: bankAcc,
    })
})


//define routes

app.get("/budgets/:index", (req, res) =>{
    res.send("views/index.ejs")
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
    let tag = req.body.tags 
    const tagArr = tag.split(", ") 
        let budgetObj = { 
        date: req.body.date,
        name: req.body.name,
        from: req.body.from,
        amount: req.body.amount,
        tags: tagArr,
    }
    budget.push(budgetObj) 
    console.log(budget)
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
    console.log("Can you hear me")
});