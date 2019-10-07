var friends = require("../data/friends");
var path = require("path");

module.exports = function(app) {
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
})

app.get("/api/friends", function(req, res){
    return res.json(friends);
})


app.post("/api/friends", function(req, res) {
    var newFriend = req.body;

    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    console.log(newFriend);
    friends.push(newFriend);
    res.json(newFriend);
});
}