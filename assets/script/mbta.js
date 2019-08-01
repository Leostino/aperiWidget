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
            arriveTime = arriveTime.substr(arriveTime.length - 5);
            //display time of arrival 
            console.log(arriveTime);
            $("#arrivingDisplay").html(arriveTime);

            
           
        })

    })
})