$(".find-btn").on("click", function(){
  $(".next-pages").css("display","block");
});

$(".back").on("click", function(){
  $(".next-pages").css("display","none");
});

$(".find-btn").on("click", function(){



  $.ajax({
    type: 'GET',
    crossDomain: true,
    dataType: 'jsonp',
    headers: {
      "Set-Cookie", "HttpOnly;Secure;SameSite=Strict"
    }
    url: "https://apis.solarialabs.com/shine/v1/parking-rules/meters/?apikey=QKMqJPOYFn7OPMVOTQceDwbg3pNA51LK",
    success: function(response) {
      var lat1 = response.Results[0].Latitude;
      var lon1 = response.Results[0].Longitude;

      console.log(lat1 , lon1);

 $.ajax({
url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat1
   + ',' + lon1 + "&key=AIzaSyAoKgGM890KLGTGSoDHYfkD5rrIDXDq3to",
   success: function(data){
     console.log(data);
     console.log('We got here!');
     $("ul").append("<li>"+data.results[0].formatted_address+"</li>");
   }
 });






//  response.Results.forEach(function(el){

  //console.log(response.Results)

    //console.log(el)
//     });


},
  error: function(response){
    console.log("Didn't work" + response)
  },
});




});

//lat one plus long 1 and place it into the api
