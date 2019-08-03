const mbtaAppKey = 'dee7e1e039704d419640b45a7c2cdf23';
let seachroute = "";

var searchDirection = 1;

//RoutesURL ="https://api-v3.mbta.com/trips/?filter%5Broute%5D=CR-Providence&include=shape&fields%5Btrip%5D=name&fields%5Bshape%5D=name"//?filter[stop]=place-knncl";
//ScheduleUrl = "https://api-v3.mbta.com/schedules?filter[route]="+seachroute+"&filter[stop]="+searchStation+"&direction_id="+searchDirection;
//PredictionUrl = "https://api-v3.mbta.com/predictions?filter[route]="+seachroute+"&filter[stop]="+searchStation+"&direction_id="+searchDirection;

//onclick events
$("#orangeBtn").on('click',function(){
    seachroute = "";
    
    $("#stationSelector").html("");
    $("#stationSelector").append("<option id='selectorOpt' value='choose'>Choose</option>");
    $("#stationSelector").append("<option id='selectorOpt' value='place-ogmnl'>Oak Grove</option>");
    $("#stationSelector").append("<option id='selectorOpt' value='place-mlmnl'>Malden Center</option>");
    $("#stationSelector").append("<option id='selectorOpt' value='place-welln'>Wellington</option>");
    var searchStation ='';
    //assign selec chosen value to searchStation
    $("select#stationSelector").change(function(){
        console.log("changed");
       return searchStation = $(this).children("option:selected").val();
        
    });
    //assign selec chosen value to searchStation
    $("select#directionSelector").change(function(){
        console.log("changed");
       return searchDirection = $(this).children("option:selected").val();
        
    });
    //click event
    $("#mbtaBtn").on('click',function(){
        console.log("clicked");
         
        let queryScheduleUrl = "https://api-v3.mbta.com/predictions?filter[route]="+seachroute+"&filter[stop]="+searchStation+"&direction_id="+searchDirection;
        $.ajax({
            url: queryScheduleUrl,
            method:"GET"
        }).done(function(response){
            console.log(response.data[0]);
            
            //let arriveTime = response.data[0].attributes.arrival_time;
            var arriveTime = response.data[0].attributes.arrival_time;
            //if null is be outbound
            if (!arriveTime){
                arriveTime = response.data[0].attributes.departure_time;

            }

            // addZero() to add zero to time when its less than 10 eg. 9 sec will

            function addZero(i) {
                if (i < 10) {
                  i = "0" + i;
                }
                return i;
              }

              time();
              
              // function to convert time from milliseconds to local time
              
              function time() {

                // passing the arrival time from api into the new date obj
                let d = new Date(arriveTime);

                // passed arrival time obj into the addZero() to add zero if the time is less than 10 eg. 9 will be 09

                let h = addZero(d.getHours());
                let m = addZero(d.getMinutes());
                let s = addZero(d.getSeconds());

                // getting the current time in minutes and seconds **hours not needed because we want to display mins & secs

                let timeNowMin =  addZero(new Date().getMinutes());
                let timeNowSec =  addZero(new Date().getSeconds());

                // print the current minutes and seconds to console

                console.log(timeNowMin);
                console.log(timeNowSec);

                // subtraction => api's train arrival time - time now = time remaining to next train in mins & secs

                let ArrivalMin = m - timeNowMin;
                let ArrivalSec = s - timeNowSec;

                // if statement to add "0" to secs when less than 10 eg. 09, also makes sure time returns positive integer
            
                 if((ArrivalSec >= 0) && (ArrivalSec < 10)) {
                    ArrivalSec = "0"+ ArrivalSec;
                }else if(ArrivalSec < 0) {
                    ArrivalSec *= -1;
                }

                // print mins & secs to next train in console

                    console.log(ArrivalMin);
                    console.log(ArrivalSec);             

                // display arrival time (mins & secs)

                    $("#arrivingDisplay").html(ArrivalMin + ":" + ArrivalSec);                
                
              }     

        })

    })
})