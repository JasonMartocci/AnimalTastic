function buttonFeature(value){
    request.open('GET', 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q='+value, true);
    request.send('GET', 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q='+value, true);
};


document.addEventListener('DOMContentLoaded', function () {
$(document).ready(function() {

    $('.myButton').click(function(e) {
    var searchFeature = ($('#formValueId').val());
    request = new XMLHttpRequest;
    request.open('GET', 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q='+searchFeature, true);

    
    var next = 1;

    var searchFeature = ($('#formValueId').val());

    //console.log(searchFeature);

      e.preventDefault();
      var addto = "#field" + next;
      next = next + 1;
      var newIn = '<button id="newButton" value='+searchFeature+' onclick="buttonFeature(this.value)">'+searchFeature+'</button>';
      var newInput = $(newIn);
      $(addto).after(newInput);


    request.onload = function() {
      for (var i = 0; i <= 10; i++) {
        data = JSON.parse(request.responseText).data[i].images.fixed_height.url;
        console.log(data);
        $("#searchResults").append('<img src = "'+data+'"  title="GIF via Giphy">');
      }
    };
    request.onerror = function() {
      console.log('connection error');
    };
    request.send();
    });
  });
});