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

app.get("/", (req, res) => {
    res.render("index.ejs", {
        data: budget,
        money: bankAcc,
    })
})


//define routes

app.get("/budgets/:index", (req, res) =>{
    res.send("views/index.ejs")
})

// new
app.get("/new", (req, res) => {
    res.render("new.ejs", {
        newData: budget,
    })
})

// create
app.post("/", (req, res) => {
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
    res.redirect("/")
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