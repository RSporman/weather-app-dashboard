

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
      var uvUrl = "http://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + response.coord.lat + "&lon=" + response.coord.lon;
      var uvIndex = response.value
      $.ajax({
        url: uvUrl,
        method: "GET"
    }).then(function(response){
        // console.log(response)
    })
//    $("#current").text(JSON.stringify(response));
   $(".city").html("<h1>" + response.name + " Weather Details</h1>");
   var tempF = (response.main.temp - 273.15) * 1.80 + 32;

        // add temp content to html
    //  $(".temp").text("Temperature (K) " + response.main.temp);
$(".tempF").text("Temperature (F) " + tempF.toFixed(2));
$(".wind").text("Wind Speed: " + response.wind.speed);
$(".humidity").text("Humidity: " + response.main.humidity);
$(".uv").text("UV Index: " + uvIndex);
});

var fiveDay = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey;

$.ajax({
    url: fiveDay,
    Method: "GET"
}).then(function(response){
    console.log(response);
    console.log(response.list[1].dt_txt);
    console.log(moment(response.list[1].dt_txt).format('dddd'));
    $("#5day").text(JSON.stringify(response));
    
    $(".card-title-1").text(moment(response.list[1].dt_txt).format('dddd'));
    $(".card-temp").text("Temperature: (F) " + response.list[1].main.temp);
    $(".card-hum").text("Humidity: " + response.list[1].main.humidity);

    $(".card-title-2").text(moment(response.list[8].dt_txt).format('dddd'));
    $(".card-temp-2").text("Temperature: (F) " + response.list[8].main.temp);
    $(".card-hum-2").text("Humidity: " + response.list[8].main.humidity);

    $(".card-title-3").text(moment(response.list[16].dt_txt).format('dddd'));
    $(".card-temp-3").text("Temperature: (F) " + response.list[16].main.temp);
    $(".card-hum-3").text("Humidity: " + response.list[16].main.humidity);
    // ${moment(day.dt_txt).format('dddd')}
})

})




