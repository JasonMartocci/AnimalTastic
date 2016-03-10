function buttonFeature(value){
    request.open('GET', 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q='+value, true);
    request.send('GET', 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q='+value, true);
};

//document.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function() {

    $('#search').on('click', function(e) {
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


      // Function to display array of images from search or button press
      request.onload = function() {
        $("#searchResults").empty();
        for (var i = 0; i <= 10; i++) {
          var slug = JSON.parse(request.responseText).data[i].slug;
          var animated = JSON.parse(request.responseText).data[i].images.fixed_height.url;
          var still = JSON.parse(request.responseText).data[i].images.fixed_height_still.url;
          var rating = JSON.parse(request.responseText).data[i].rating;
          var uID = JSON.parse(request.responseText).data[i].id;

          var image = $('<img src = "'+animated+'"  alt="'+slug+'" class="pause" status="movingImage" id="'+uID+'">').attr('data-still', still);

          image.attr('data-animated', animated);

          var ratingHtml = "Rating: " + rating;

          $("#searchResults").append(image);
          $("#searchResults").append(ratingHtml);
        };

        // Function to swap movingImage with stillImage
        $(document).on('click', ".pause", function() {

          var status = $(this).attr('status');
          var imageUrl = $(this).attr('src');
          var imageId = $(this).attr('id');

          var animatedImage = animated;
          var stillImage = still;

          if (status=='stillImage') {

            alert("Still Image");
            $(this).attr('status', 'movingImage');
            $(this).attr('src', $(this).attr('data-animated'));
            console.log(this);

          } else if (status=='movingImage') {

            alert("Moving Image");
            $(this).attr('status', 'stillImage');
            $(this).attr('src', $(this).attr('data-still'));
            console.log(this);

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
//});