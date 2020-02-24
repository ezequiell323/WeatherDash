var resCopy;
var lat;
var lon;
var uvRes;
//find me location
function showPosition(position) {
  // Grab coordinates from the given object
  var key="4885a852e61e265d64c7bdc240b7beb5";
   lat = position.coords.latitude;
   lon = position.coords.longitude;
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&units=imperial&appid="+key;
  console.log("Your coordinates are Latitude: " + lat + " Longitude " + lon);
  console.log(queryURL);
  //Call the API and pass in the coordinates

$.ajax({
  type: "GET",
  url: queryURL,
  async: true,
  dataType: "json",
  success: function (response) {
  console.log(response);
  resCopy=response;
  uvresult()
  fillPage()
}
  })
}

function getLocation() {
  // Make sure browser supports this feature
  if (navigator.geolocation) {
    // Provide our showPosition() function to getCurrentPosition
    navigator.geolocation.getCurrentPosition(showPosition);
  } 
  else {
    alert("Geolocation is not supported by this browser.");
  }
}

// SearchBAr 
function searchBar(){
  var city=$("#searchBar").val();
  
  var key="4885a852e61e265d64c7bdc240b7beb5";
  var queryURL ="https://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=imperial&appid="+key



  $.ajax({
  type: "GET",
  url: queryURL,
  async: true,
  dataType: "json",
  success: function (response) {
  console.log(response);
  resCopy=response;
  uvresult()
  fillPage()
  }
  })
}

/// uv results
function uvresult(){

var key="4885a852e61e265d64c7bdc240b7beb5";
var queryURL ="http://api.openweathermap.org/data/2.5/uvi/forecast?appid="+key+"&lat="+lat+"&lon="+lon+"&cnt=5"

$.ajax({
  type: "GET",
  url: queryURL,
  async: true,
  dataType: "json",
  success: function (response) {
  console.log(response[0].value);
  uvRes=response;
  console.log(uvRes);
  $("#uvIndex").text(response[0].value)
}
})




}





//function call back info
function fillPage(){
  $("#cityName").text(resCopy.city.name)
  $("#icon").text(resCopy.list[0].sys.dt_txt)
  $("#temp").text(resCopy.list[0].main.temp)
  $("#humi").text(resCopy.list[0].main.humidity)
  $("#wind").text(resCopy.list[0].wind.speed)

//day1
  
   $("#temp2").text(resCopy.list[1].main.temp)
   $("#humi2").text(resCopy.list[1].main.humidity)
//day2
  $("#temp3").text(resCopy.list[8].main.temp)
  $("#humi3").text(resCopy.list[8].main.humidity)
//day3
$("#temp4").text(resCopy.list[16].main.temp)
$("#humi4").text(resCopy.list[16].main.humidity)

//day4
$("#temp5").text(resCopy.list[24].main.temp)
$("#humi5").text(resCopy.list[24].main.humidity)

//day5
$("#temp6").text(resCopy.list[32].main.temp)
$("#humi6").text(resCopy.list[32].main.humidity)

//day6
$("#temp7").text(resCopy.list[39].main.temp)
$("#humi7").text(resCopy.list[39].main.humidity)

}



