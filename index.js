const { application } = require("express");
const express = require ("express");
const app = express();
//allow to receive and parse incoming json data
app.use(express.json())
// use cors (need to dl package for it) to allow api to be accessed from anywhere on the web this is a piece of middleware
const cors = require('cors')
app.use(cors())

app.listen(3001);

app.get("/", (req, res) => {
    res.send("Hello world.")
});

//using colon in url to create wildcard handler,
// multiple handlers are allowed
app.get('/animal/:name', (req, res) => {
    console.log(req.params.name)
    res.json({Type: "doug", Name: "sir wolfenstien"})
})

// creating a query string

app.get ("/fake-search", (req, res) => {
    console.log(req.query)
    res.json("Thank you for your request.")
})
// working with posting and incoming json data
app.post("/api/secret", (req, res) => {
    if (req.body.username === "johndoe"  && req.body.password === "qwerty") {
        res.json("You have secret access")
    } else {
        res.json("that is incorrect.")
    }
})

// use app.delete() to delte something from server
// use app.put() to update something on server