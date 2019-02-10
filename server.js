//Dependencies
var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");


//Express app
var app = express();
var PORT = 3000;

//Handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//Data for reservations and waitlists

var reservations = [
    {
        name: "Mike Smith",
        phone: "555-555-5555",
        email: "mike.smith@mikesmith.com",
        UniqueId: "454545"
    },
    {
        name: "Jenny Jones",
        phone: "555-555-3333",
        email: "jenny.jones@jennyjones.com",
        UniqueId: "454546"
    },
    {
        name: "Susan Flake",
        phone: "555-555-8888",
        email: "susan.flake@susanflake.com",
        UniqueId: "454547"
    },
];

var waitList = [
    {
        name: "Samantha Henry",
        phone: "555-222-2323",
        email: "samantha.henry@samanthahentry.com",
        UniqueId: "454548"
    },
    {
        name: "Lisa Smith",
        phone: "555-222-8555",
        email: "lisa.smith@lisasmith.com",
        UniqueId: "454549"
    },
    {
        name: "Sky Blue",
        phone: "555-222-5569",
        email: "sky.blue@skyblue.com",
        UniqueId: "454550"
    },
];


// Routes

// Home - how the user acces the home (request and response) info client reqeust is put in params 
app.get('/', function (req, res) {
    // res.send("welcome to the home page");
    res.sendFile(path.join(__dirname, "home.html"));
});

//Reserve Page
app.get('/reserve', function (req, res) {
    // res.send("welcome to the Reserve page");
    res.sendFile(path.join(__dirname, "reserve.html"));
});

//Tables Page
app.get('/tables', function (req, res) {
    // res.send("welcome to the tables page");
    res.sendFile(path.join(__dirname, "tables.html"));
});


//page not found
app.get('*', function (req, res) {
    res.send(404);
});


//Waitlist - display waitlist
app.get("/api/waitList/:waitList", function (req, res) {
    return res.json(waitList);
});

//Display name on wailtist
app.get("/api/waitList/:waitlist", function (req, res) {
    var chosen = req.params.waitlist;  //unsure about waitList.  If broken need to return to this line.
    console.log(chosen);

    for (var i = 0; i < waitList.length; i++) {
        if (chosen === waitList[i].name); {
            return res.json(waitList[i]);
        }
    }
    return res.json(false);
})


//Place a new reservation
app.post("/api/reservations", function (req, res) {
    var newreservation = req.body;

    console.log(newreservation);

    reservations.push(newreservation);

    res.json(newreservation);
});


//listen to server
app.listen(3000, function () {
    console.log("The application is running on localhost:3000");
})














