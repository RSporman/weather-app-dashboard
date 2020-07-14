
// The below starts a search function with an on click event
$("#search"). on("click", function(event){
event.preventDefault();
// The below takes in the user input of what city to search for along with my special api key and url
var city = $("#city-input").val();
var apiKey = 'f2d38d738c494af392e115cdde527abd';
var queryUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

// The below calls an ajax method that gets the current weather data and pastes it on the webpage
$.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function(response) {
      console.log(response);
      var uvUrl = "http://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + response.coord.lat + "&lon=" + response.coord.lon;
      var uvIndex = uvUrl.value
      
      $.ajax({
        url: uvUrl,
        method: "GET"
    }).then(function(response){
    })
    console.log(uvIndex)
//    $("#current").text(JSON.stringify(response));
   $(".city").html("<h1>" + response.name + " Weather Details</h1>");
   var tempF = (response.main.temp - 273.15) * 1.80 + 32;

  // add temp content to html
    
$(".tempF").text("Temperature (F) " + tempF.toFixed(2));
$(".wind").text("Wind Speed: " + response.wind.speed);
$(".humidity").text("Humidity: " + response.main.humidity);
$(".uv").text("UV Index: " + uvIndex);
});

// The below calls the 5 day forecast for the city that was searched and pastes the data on the page
var fiveDay = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey;

$.ajax({
    url: fiveDay,
    Method: "GET"
}).then(function(response){
    console.log(response);
    $("#5day").text(JSON.stringify(response));
    
    var temp1 = (response.list[1].main.temp - 273.15) * 1.80 + 32;
    $(".card-title-1").text(moment(response.list[1].dt_txt).format('l'));
    $(".card-temp").text("Temperature: (F) " + temp1.toFixed(2));
    $(".card-hum").text("Humidity: " + response.list[1].main.humidity);

    var temp2 = (response.list[8].main.temp - 273.15) * 1.80 + 32;
    $(".card-title-2").text(moment(response.list[8].dt_txt).format('l'));
    $(".card-temp-2").text("Temperature: (F) " + temp2.toFixed(2));
    $(".card-hum-2").text("Humidity: " + response.list[8].main.humidity);

    var temp3 = (response.list[16].main.temp - 273.15) * 1.80 + 32;
    $(".card-title-3").text(moment(response.list[16].dt_txt).format('l'));
    $(".card-temp-3").text("Temperature: (F) " + temp3.toFixed(2));
    $(".card-hum-3").text("Humidity: " + response.list[16].main.humidity);

    var temp4 = (response.list[24].main.temp - 273.15) * 1.80 + 32;
    $(".card-title-4").text(moment(response.list[24].dt_txt).format('l'));
    $(".card-temp-4").text("Temperature: (F) " + temp4.toFixed(2));
    $(".card-hum-4").text("Humidity: " + response.list[24].main.humidity);

    var temp5 = (response.list[32].main.temp - 273.15) * 1.80 + 32;
    $(".card-title-5").text(moment(response.list[32].dt_txt).format('l'));
    $(".card-temp-5").text("Temperature: (F) " + temp5.toFixed(2));
    $(".card-hum-5").text("Humidity: " + response.list[32].main.humidity);
    // ${moment(day.dt_txt).format('dddd')}
})

})




