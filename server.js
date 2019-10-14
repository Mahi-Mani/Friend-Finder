// Express package
var express = require("express");
// Path package
var path = require("path");
// assigning all express methods of use to app variable
var app = express();
// Port
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// Listening to port
app.listen(PORT, function(){
    console.log("App listening to PORT " + PORT);
})

