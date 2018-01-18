$(document).ready(function(){
  $("form#palinForm").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#sentence").val();
    var arraySplit = userInput.split("");
    var arrayReverse = arraySplit.reverse();
    var arrayJoin = arrayReverse.join("");

    if (userInput === arrayJoin) {
      alert("yes!");
    } else (userInput != arrayJoin) 
      alert("No way, Jose.");

  });

});
