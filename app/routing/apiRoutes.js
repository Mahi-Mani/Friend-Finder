var friends = require("../data/friends");
var path = require("path");

module.exports = function(app) {

// Friends objects are sent as response
app.get("/api/friends", function(req, res){
    return res.json(friends);
})

// Whenever new user is looked upon, values are posted to the below route
app.post("/api/friends", function(req, res) {
    var newFriend = req.body;

    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    console.log(newFriend);
    // friends.push(newFriend);
    res.json(newFriend);
});
}