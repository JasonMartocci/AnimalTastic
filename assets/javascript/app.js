document.addEventListener('DOMContentLoaded', function () {
$(document).ready(function() {

    $('#myButton').click(function(e) {
    var searchFeature = ($('#formValueId').val());
    request = new XMLHttpRequest;
    request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+searchFeature, true);

    var next = 1;

    var searchFeature = ($('#formValueId').val());

    debugger;
    console.log(searchFeature);

        e.preventDefault();
        var addto = "#field" + next;
        next = next + 1;
        var newIn = '<button id="field' + next + '" name="field' + next + '">'+searchFeature+'</button>';
        var newInput = $(newIn);
        $(addto).after(newInput);
        $("#field" + next).attr('data-source',$(addto).attr('data-source'));
        $("#count").val(next);  

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
