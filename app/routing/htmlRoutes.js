var path = require("path");


module.exports = function(app) {
  // survey.html is sent as response upon looking for survey page
app.get("/survey", function(req, res){
  res.sendFile(path.join(__dirname, "../public/survey.html"));
})

// Home.html is sent as response upon looking on root route
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "../public/home.html"));
})

}