// On click of submit button
$("#submit-btn").on("click", function(event){
    // To prevent page from loading
    event.preventDefault();

    var name = $("#enterName").val().trim();
    var email = $("#enterEmail").val().trim();
    var answerArr = [];

    for(var i=1; i<=50; i++){
    if($("input[id=optionsRadios"+i+"]:checked").val()){
        answerArr.push($("input[id=optionsRadios"+i+"]:checked").val());
    }
    
}
var newFriend = {
        name: name,
        email: email,
        score: answerArr
      }

      $.post("/api/friends", newFriend)
        .then(function(data) {
          console.log(data);
          alert("Finding your match..");
        });

    

})