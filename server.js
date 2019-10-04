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
        name: "Joey",
        photo: "",
        scores: [5, 1, 4, 1, 1, 1, 4, 1, 5, 1]
    },
    {
        name: "Phoebe",
        photo: "",
        scores: [5, 3, 4, 1, 1, 4, 5, 2, 1, 4]
    },
    {
        name: "Monica",
        photo: "",
        scores: [3, 4, 1, 5, 5, 5, 1, 3, 1, 3]
    },
    {
        name: "Rachel",
        photo: "",
        scores: [3, 5, 5, 3, 3, 1, 2, 1, 1, 2]
    },
    {
        name: "Ross",
        photo: "",
        scores: [1, 2, 2, 3, 1, 1, 3, 3, 1, 5]
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

app.post("/api/friends", function(req, res) {
    var newFriend = req.body;

    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    console.log(newFriend);
    friends.push(newFriend);
    res.json(newFriend);
});

app.listen(PORT, function(){
    console.log("App listening to PORT " + PORT);
})

module.export = friends;