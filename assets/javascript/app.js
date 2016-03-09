function buttonFeature(value){
    request.open('GET', 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q='+value, true);
    request.send('GET', 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q='+value, true);
};

document.addEventListener('DOMContentLoaded', function () {
$(document).ready(function() {

    $('.myButton').on('click', function(e) {
      var searchFeature = ($('#formValueId').val());
      request = new XMLHttpRequest;
      request.open('GET', 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q='+searchFeature, true);

      
      var next = 1;

      var searchFeature = ($('#formValueId').val());

        e.preventDefault();
        var addto = "#field" + next;
        next = next + 1;
        var newIn = '<button id="newButton" value='+searchFeature+' onclick="buttonFeature(this.value)">'+searchFeature+'</button>';

        var newInput = $(newIn);
        $(addto).after(newInput);


      request.onload = function() {
        $("#searchResults").empty();
        for (var i = 0; i <= 10; i++) {
          var slug = JSON.parse(request.responseText).data[i].slug;
          var animated = JSON.parse(request.responseText).data[i].images.fixed_height.url;
          var still = JSON.parse(request.responseText).data[i].images.fixed_height_still.url;
          var rating = JSON.parse(request.responseText).data[i].rating;

          $("#searchResults").append('<img src = "'+animated+'"  alt="'+slug+'" class="pause" status="moving"> Rating: '+rating+'');
        };

        $(document.body).on('click', '.pause', function() {

          var status = $(this).attr('status');
          var imageUrl = $(this).attr('src');

          console.log(imageUrl);
         
          if (status=='still'){

            alert("Still Image");

            $(this).attr('status', 'moving');

            $("#searchResults").append('<img src = "'+animated+'"  alt="'+slug+'" class="pause" status="moving"> Rating: '+rating+'');

          }else if (status=='moving'){

            alert("Moving Image");

            $(this).attr('status', 'still');

            $("#searchResults").append('<img src = "'+still+'"  alt="'+slug+'" class="pause" status="still"> Rating: '+rating+'');

          }
          return false;
        });
      };

      request.onerror = function() {
        console.log('connection error');
      };

      request.send();
    });
  });
});