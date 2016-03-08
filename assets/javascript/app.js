document.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function() {
  $('#myButton').click(function() {
  var searchQuery = ($('#formValueId').val());
  debugger;

  request = new XMLHttpRequest;
  request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+searchQuery, true);
  
  request.onload = function() {
    if (request.status >= 200 && request.status < 400){
      data = JSON.parse(request.responseText).data.image_url;
      console.log(data);
      document.getElementById("animals").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
    } else {
      console.log('reached giphy, but API returned an error');
     }
  };

  request.onerror = function() {
    console.log('connection error');
  };

  request.send();

    });
});
});


















//Score Variables
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;
  var value = "";

window.onload = function(){
  $('#stop').click(stopwatch.stop);
  $('#reset').click(stopwatch.reset);
  $('#start').click(stopwatch.start);
};

// Timer function
var stopwatch = {
  time:30,
  reset: function(){
    stopwatch.time = 30;
    $('#display').html('00:30');
  },
  start: function(){
    counter = setInterval(stopwatch.count, 1000);
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    questionOne();
    $(this).parent().hide();
  },
  stop: function(){
    clearInterval(counter);
  },
  count: function(){
    stopwatch.time--;
    var converted = stopwatch.timeConverter(stopwatch.time);
    $('#display').html(converted);
    if (stopwatch.time === 0){
        timeUp();
    }
  },
  timeConverter: function(t){
    var minutes = Math.floor(t/60);
    var seconds = t - (minutes * 60);
    if (seconds < 10){
      seconds = "0" + seconds;
    } 
    if (minutes === 0){
      minutes = "00";
    } else if (minutes < 10){
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }
};

// Time is up function that i never got to work properly. The issue I am having is displaying the next question. 
function timeUp(){
  unanswered++;
  // $("#result").append("<button class='incorrectAns'>TIME IS UP!</button><br>");
  //   setTimeout(threeSeconds, 3000);
  //   function threeSeconds() {
  //     questionTwo();
  //     stopwatch.reset();
  //   };
}

// Function to display if the answer was right or wrong.
var rightWrong = function(){
  $("button").click(function(){
      var ans = $(this);
      if(ans.val() === "correct"){
        correct++;
        $("#result").append("<button class='correctAns'>CORRECT</button><br>");
      }else if(ans.val() === "incorrect"){
        incorrect++;
        $("#result").append("<button class='incorrectAns'>INCORRECT</button><br>");
      }else{
        unanswered++;
      }
  }); 
}

// Trivia questions start
function questionOne(){
  $("#question").empty().append("<h3>There are many blocks in 'Minecraft', but only two are affected by gravity. Which two are affected?</h3>");
  $("#answerOne").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>Sand and Bedrock</button><br>");
  $("#answerTwo").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>Bedrock and Gravel</button><br>");
  $("#answerThree").empty().append("<button onclick='rightWrong()' class='submit' value='correct'>Gravel and Sand</button><br>");
  $("#answerFour").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>Gravel and Dirt</button><br>");

    $(".submit").click(function(){
      setTimeout(threeSeconds, 3000);
      function threeSeconds() {
            $("#result").empty().append("");
            questionTwo();
            stopwatch.reset();
        }
    });
}

function questionTwo(){
  $("#result").empty().append("");
  $("#question").empty().append("<h3>What is the number of items that add up to a stack?</h3>");
  $("#answerOne").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>999</button><br>");
  $("#answerTwo").empty().append("<button onclick='rightWrong()' class='submit' value='correct'>64</button><br>");
  $("#answerThree").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>23</button><br>");
  $("#answerFour").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>44</button><br>"); 

    $(".submit").click(function(){
      setTimeout(threeSeconds, 3000);
      function threeSeconds() {
            $("#result").empty().append("");
            questionThree();
            stopwatch.reset();
        }
    });
}

function questionThree(){
  $("#question").empty().append("<h3>What is the name of a block that might make up most of your built 'Minecraft' world?</h3>");
  $("#answerOne").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>Earthstone</button><br>");
  $("#answerTwo").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>Lavastone</button><br>");
  $("#answerThree").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>Redstone</button><br>");
  $("#answerFour").empty().append("<button onclick='rightWrong()' class='submit' value='correct'>Cobblestone</button><br>");

    $(".submit").click(function(){
      setTimeout(threeSeconds, 3000);
      function threeSeconds() {
            $("#result").empty().append("");
            questionFour();
            stopwatch.reset();
        }
    });
}

function questionFour(){
  $("#question").empty().append("<h3>What does a zombie drop when killed in 'Minecraft' 1.4.5?</h3>");
  $("#answerOne").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>Cobblestone</button><br>");
  $("#answerTwo").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>Gold ingot</button><br>");
  $("#answerThree").empty().append("<button onclick='rightWrong()' class='submit' value='correct'>Rotten flesh</button><br>");
  $("#answerFour").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>Meat</button><br>");

    $(".submit").click(function(){
      setTimeout(threeSeconds, 3000);
      function threeSeconds() {
            $("#result").empty().append("");
            questionFive();
            stopwatch.reset();
        }
    });
}

function questionFive(){
  $("#question").empty().append("<h3>What do you use to take wool from a sheep?</h3>");
  $("#answerOne").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>Sword</button><br>");
  $("#answerTwo").empty().append("<button onclick='rightWrong()' class='submit' value='correct'>Shears</button><br>");
  $("#answerThree").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>Lava</button><br>");
  $("#answerFour").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>Water</button><br>");

    $(".submit").click(function(){
      setTimeout(threeSeconds, 3000);
      function threeSeconds() {
            $("#result").empty().append("");
            questionSix();
            stopwatch.reset();
        }
    });
}

function questionSix(){
  $("#question").empty().append("<h3>Who is the 'feared player' in 'Minecraft'?</h3>");
  $("#answerOne").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>Jeb</button><br>");
  $("#answerTwo").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>Skydoesminecraft</button><br>");
  $("#answerThree").empty().append("<button onclick='rightWrong()' class='submit' value='correct'>Herobrine</button><br>");
  $("#answerFour").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>Notch</button><br>");

    $(".submit").click(function(){
      setTimeout(threeSeconds, 3000);
      function threeSeconds() {
            $("#result").empty().append("");
            questionSeven();
            stopwatch.reset();
        }
    });
}

function questionSeven(){
  $("#question").empty().append("<h3>How do you sneak (by default) in the PC version of 'Minecraft'?</h3>");
  $("#answerOne").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>By Pressing H</button><br>");
  $("#answerTwo").empty().append("<button onclick='rightWrong()' class='submit' value='correct'>By Pressing Shift</button><br>");
  $("#answerThree").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>By Pressing S</button><br>");
  $("#answerFour").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>By Pressing 3</button><br>");

    $(".submit").click(function(){
      setTimeout(threeSeconds, 3000);
      function threeSeconds() {
            $("#result").empty().append("");
            questionEight();
            stopwatch.reset();
        }
    });
}

function questionEight(){
  $("#question").empty().append("<h3>What is the name of the 'Minecraft' Hell?</h3>");
  $("#answerOne").empty().append("<button onclick='rightWrong()' class='submit' value='correct'>The Nether</button><br>");
  $("#answerTwo").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>The Hether</button><br>");
  $("#answerThree").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>The Aether</button><br>");
  $("#answerFour").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>The Cether</button><br>");

    $(".submit").click(function(){
      setTimeout(threeSeconds, 3000);
      function threeSeconds() {
            $("#result").empty().append("");
            questionNine();
            stopwatch.reset();
        }
    });
}

function questionNine(){
  $("#question").empty().append("<h3>Which is NOT a Nether mob?</h3>");
  $("#answerOne").empty().append("<button onclick='rightWrong()' class='submit' value='correct'>The Devil</button><br>");
  $("#answerTwo").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>The Blaze</button><br>");
  $("#answerThree").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>The Ghast</button><br>");
  $("#answerFour").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>The Zombie Pigmen</button><br>");

    $(".submit").click(function(){
      setTimeout(threeSeconds, 3000);
      function threeSeconds() {
            $("#result").empty().append("");
            questionTen();
            stopwatch.reset();
        }
    });
}

function questionTen(){
  $("#question").empty().append("<h3>How many colors of wool are there in 'Minecraft'?</h3>");
  $("#answerOne").empty().append("<button onclick='rightWrong()' class='submit' value='correct'>Sixteen</button><br>");
  $("#answerTwo").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>Eighteen</button><br>");
  $("#answerThree").empty().append("<button onclick='rightWrong()' onclick='rightWrong()' class='submit' value='incorrect'>Ten</button><br>");
  $("#answerFour").empty().append("<button onclick='rightWrong()' class='submit' value='incorrect'>Seventeen</button><br>");

    $(".submit").click(function(){
      setTimeout(threeSeconds, 3000);
      function threeSeconds() {
            $("#result").empty().append("");
            results();
            stopwatch.stop();
        }
    });
}
// Trivia questions end

// Results page
function results(){
    $("#question").empty().append("<h1>All done, here is how you did!</h1><br><br><h3>Correct Answers: " + correct + "</h3><br><br>" + "<h3>Incorrect Answers: " + incorrect + "</h3><br><br>" + "<h3>Unanswered: " + unanswered + "</h3>");
    $("#answerOne").empty().append("<button id='start' onclick='stopwatch.start()'>Start New Game</button>");
    $("#answerTwo").empty().append("");
    $("#answerThree").empty().append("");
    $("#answerFour").empty().append("");
  }


// Only one question will be shown at a time.
// The time limit will apply to each question, and when the time runs out, the game will show a screen with the correct answer, and then move on to the next question without user input.
// If the user chooses the correct answer, the game will show a screen letting them know the answer was correct, and then move on to the next question without user input.
// If the user chooses the incorrect answer, the game will show a screen with the correct answer, and then move on to the next question without user input.
// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).