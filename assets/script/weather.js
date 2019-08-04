// print a string to the console to test the link to index.html

console.log("hello this is the weather script");

// get Boston's weather forcast

// Endpoint for Boston's weather assigned to a variable bostonURL

let bostonURL = "https://api.openweathermap.org/data/2.5/weather?q=boston&units=imperial&appid=75713bc434fc1e071e9c80823f391fa7"

// print Boston's weather api in console

console.log(bostonURL);

// ajax call to Boston's weather api

$.ajax({
   
  url: bostonURL,
 
  method:"GET",
 
  dataType: "json"

}).done(function(response){

   // Boston temperature (response) passed to Math.floor() to always return an integer

   let bostonTemp = Math.floor(response.main.temp);

   // Boston high temperature (response) passed to Math.floor() to always return an integer

    let bostonHigh = Math.floor(response.main.temp_max);

    // Boston high temperature (response) passed to Math.floor() to always return an integer

    let bostonLow = Math.floor(response.main.temp_min);

    // assign a varible iconUrl to the Boston's weather icon from response

    let iconUrl = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";

   // display Boston's city name, temperature, high temperature and low temperature as default

    $("#cityName").html(response.name);

    $("#currentTemp").html(bostonTemp);

   $("#high-temp").html("<h5>High: " + bostonHigh + "</h5");

    $("#low-temp").html("<h5>Low: " + bostonLow + "</h5");

    // change the source attribute of the image the the Boston's weather icon from response
   
    $("#icon").attr('src',iconUrl);

    // change height and width of the Boston's weather icon

    $("#icon").css({'height': '100px', 'width': '100px'});

})




// eventclick function

$("#search-btn").on('click', ajaxCall)

// enter key function incase the user decides to use the enter key instead of the search button

$("#search-txt").on('keypress', function (event) {
  if(event.keyCode === 13){
    event.preventDefault();
      ajaxCall();
  }
})


// create a function for the ajax call

function ajaxCall() {

   //assign user nsearch to a variable

   let searchBox = $("#search-txt").val();

   // assign app key

   const appKey = "75713bc434fc1e071e9c80823f391fa7";

   //assing Url + seach string

   let queryRoutesURL ="https://api.openweathermap.org/data/2.5/weather?q="+searchBox+"&units=imperial&appid="+appKey;
   
   console.log("weather :"+queryRoutesURL);
   
   //ajax call
   
   $.ajax({
   
       url: queryRoutesURL,
      
       method:"GET",
      
       dataType: "json"
   
      }).done(function(response){
   
        //assign current seach to icon url img
   
        let iconUrl = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
   
        //Display City Name
   
        $("#cityName").html(response.name);
   
        //Get and display current temp

       let currentTemp = Math.floor(response.main.temp);
       
       $("#currentTemp").html(currentTemp);

       // Get and display high temp

       let highTemp = Math.floor(response.main.temp_max);

       $("#high-temp").html("<h5>High: " + highTemp + "</h5");

       // Get and display low temp

       let lowTemp = Math.floor(response.main.temp_min);

       $("#low-temp").html("<h5>Low: " + lowTemp + "</h5");

       //display icon
   
        $("#icon").attr('src',iconUrl);

        // change height and width of the icon

        $("#icon").css({'height': '100px', 'width': '100px'});
   
       //display description
   
       $("#currentDescript").html(response.weather[0].description);
   
       console.log(response);

   })

//end of ajaxCall function

}

