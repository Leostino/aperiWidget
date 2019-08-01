console.log("hello this is the weather script");

// eventclick function

$("#search-btn").on('click',function(){

   //assign val from inputBox to searchBox

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

//end of click event

})