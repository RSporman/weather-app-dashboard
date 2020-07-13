

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
//    $("#current").text(JSON.stringify(response));
   $(".city").html("<h1>" + response.name + " Weather Details</h1>");
   var tempF = (response.main.temp - 273.15) * 1.80 + 32;

        // add temp content to html
    //  $(".temp").text("Temperature (K) " + response.main.temp);
$(".tempF").text("Temperature (F) " + tempF.toFixed(2));
$(".wind").text("Wind Speed: " + response.wind.speed);
$(".humidity").text("Humidity: " + response.main.humidity);


});

var uvUrl = "http://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon;
var lat = $("#city-input").val();
var lon = $("#city-input").val();
  $.ajax({
    url: uvUrl,
    method: "GET"
}).then(function(response){
    console.log(response)

})
})

// var uvUrl = "http://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon;
// var uv = response.coord.lat.lon;
// $.ajax({
// url: uvUrl,
// method: "GET"
// }).then(function(response) {

// })

