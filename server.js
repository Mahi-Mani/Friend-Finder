// Express package
var express = require("express");
// Path package
var path = require("path");
// assigning all express methods of use to app variable
var app = express();
// Port
var PORT = process.env.PORT || 3000;
// variable declarations
var friends = [
    {
        name: "Mahisha",
        photo: "",
        scores: [5, 4, 3, 6, 7, 2, 1, 3, 4, 9]
    },
    {
        name: "Manikandan",
        photo: "",
        scores: [3, 2, 5, 7, 6, 2, 1, 3, 4, 9]
    }
]
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
})

app.get("/api/friends", function(req, res){
    return res.json(friends);
})

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
})

app.listen(PORT, function(){
    console.log("App listening to PORT " + PORT);
})