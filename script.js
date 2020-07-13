

$("#search"). on("click", function(event){
event.preventDefault();
var city = $("#city-input").val();

var apiKey = 'f2d38d738c494af392e115cdde527abd';

var queryUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

$.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function(response) {
      console.log(response);
   $("#current").text(JSON.stringify(response));
  });

})

