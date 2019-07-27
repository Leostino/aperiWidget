const mbtaAppKey = 'dee7e1e039704d419640b45a7c2cdf23';

let queryRoutesURL ="https://api-v3.mbta.com/routes/?fields%5Broute%5D=short_name,long_name"+mbtaAppKey;
    console.log("MBTA :"+queryRoutesURL);
$.ajax({
    url: queryRoutesURL,
    method:"GET"
}).done(function(response){
    for (var i = 0;i<10;i++){
        let lines = response.data[i].relationships.line.data.id;
        console.log("Routes"+response.data[i].relationships.line.data);
        $("#mbtaTest").append("<p>"+lines+"</p>");
      }
    

})
let queryAlertsUrl = "https://api-v3.mbta.com/alerts?filter[stop]=place-knncl";
$.ajax({
    url: queryAlertsUrl,
    method:"GET"
}).done(function(response){
    for (var i = 0;i<10;i++){
        let lines = response.data[i];
        console.log("Alerts :"+response.data[i]);
        $("#mbtaTest").append("<p>"+lines+"</p>");
      }
    

})

let queryPredictionUrl = "https://api-v3.mbta.com/predictions?filter[stop]=place-knncl";
$.ajax({
    url: queryPredictionUrl,
    method:"GET"
}).done(function(response){
    for (var i = 0;i<10;i++){
        let arrivalTime = response.data[i].attributes.arrival_time;
        let arrivalLocation = response.data[i].relationships.trip.data.id
        console.log(response.data[i].attributes);
        $("#mbtaTest").append("<p> Arrival Time: "+arrivalTime+" at "+arrivalLocation+"</p>");
      }
    

})