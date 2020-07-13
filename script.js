// var cityName = '';
// var apiKey = 'f2d38d738c494af392e115cdde527abd';
// var queryUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
// $.ajax({
//     url: queryUrl,
//     method: "GET",
// }).then(function(response){
//     console.log(response);
// })



var userChoice = 'new york';
var currentWeather = ``;


function getWeather() {
    //view current weather conditions for that city
    var apiKey = 'f2d38d738c494af392e115cdde527abd';
    userChoice = $("#city-input")
    currentWeather = `http://api.openweathermap.org/data/2.5/weather?q=${userChoice}&appid=${apiKey}`;
    $.ajax({
        url: currentWeather,
        method: "GET",
    }).then(function(response){
      console.log(response);}
    )}

    getWeather()
    