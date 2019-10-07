# Friends' Twin Finder
console log line number 515 from survey.html
## Summary
This application's functionality is quite entertaining as it finds your closely associated friends' character by asking few questions from user.

## Installation Guide
* User has to download all files from GitHub repository
* User can either clone the repository or can download all files manually unzipping might take a while though
* Package.json file has required depencies to be installed. So, user can type `npm install` to install all needed packages
* User can type `node server.js` to run the file from command line

## Technologies Used
- HTML : Basic skeleton of application and forms
- Bootstrap : For application styling
- Javascript : used to provide interactive effects
- Node : used to run javascript file outside the browser. Supports command line user input. Node is useful is different ways. As
far as this code is concerned, utilised inquirer to dynamically prompt question to user. Used mysql npm package to create schemas.

## Application Functioning
Type `node server.js` from command line. Funtioning of the application is shown below

![Site](gifs/FriendFinder.gif)

Application asks about 10 questions to the user, so that application has some knowledge on the user. Having learnt that, user is prompted with an closely associated character from Friends series. This application is quite enjoyable as it points out your twin from friends series.

## Code Snippet
*Server side javascript*

```Javascript
app.get("/survey", function(req, res){
  res.sendFile(path.join(__dirname, "../public/survey.html"));
})

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "../public/home.html"));
})
```
>Server side javascript to display html pages when loaded

*Client side javascript*

```Javascript
$.post("/api/friends", newFriend,
      function(data) {
          console.log(data);
          var x = document.forms["myForm"]["name"].value;
          var y = document.forms["myForm"]["email"].value;

          if ((x == "") && (y == "")) {
            alert("Please enter details to proceed further");
            return false;
          }
          else{
            calculateResult();
          }
          
        });
```
>Client side javascript that validates user input. Application functionality proceeds further only if form is filled by the user

## Learning Points
* Learned a lot about client side and server side javascripting. Learnt on how to modularize and organize code in such implementations

## Future enhancement
This application shows closely associated character irrespective of user's gender. In future application can be enhanced to prompt character based on user's gender. This can be implemented by explicitly asking gender from user or by scanning any available name api to guess user's gender

## Author Links
[LinkedIn](https://www.linkedin.com/in/mahisha-gunasekaran-0a780a88/)

[GitHub](https://github.com/Mahi-Mani)
