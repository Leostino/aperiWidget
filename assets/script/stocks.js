const iexToken = 'pk_5ac05ab4c58a4a39a2ebf4910d6a17ab';
let symbol;
let getLabels=[];
let getSeries=[];


let queryStocksURL;
let queryLogoURL;
let queryChartURL;
getSymbol();

function getSymbol(){
    $("#buttonStocks").on("click", function() {
        symbol=$("#searchSymbol").val();
        callStock();
    });
        
}

function callStock(){
    queryStocksURL ="https://cloud.iexapis.com/v1/stock/"+symbol+"/quote?token="+iexToken;
$.ajax({
    url: queryStocksURL,
    method:"GET"
}).done(function(response){
    $("#companyName").html(response.companyName);
    $("#livePrice").html(response.latestPrice);
    $("#peRatio").html("P/E Ratio: "+response.peRatio);
    //$("#mktCap").html("Mkt Cap: "+response.marketCap);
    formatNumber(response.marketCap);

});

queryLogoURL ="https://cloud.iexapis.com/v1/stock/"+symbol+"/logo?token="+iexToken;   
$.ajax({
    url: queryLogoURL,
    method:"GET"
}).done(function(response){
    $("#logo").attr("src", response.url)

});

queryChartURL ="https://cloud.iexapis.com/v1/stock/"+symbol+"/chart/dynamic?token="+iexToken;   
$.ajax({
    url: queryChartURL,
    method:"GET"
}).done(function(response){
    getLabels=[];
    getSeries=[];

    for (var i=0; i<response.data.length; i++){
        getLabels.push(response.data[i].label);
        getSeries.push(response.data[i].close);
    }
   plotChart(getLabels,getSeries);

});
}

function formatNumber(value) {
    var thousand = 1000;
    var million = 1000000;
    var billion = 1000000000;
    var trillion = 1000000000000;
    if (value < thousand) {
   $("#mktCap").html("Mkt Cap: "+ value);
}
    
    if (value >= thousand && value <= 1000000) {
         $("#mktCap").html("Mkt Cap: "+ Math.round((value/thousand)*10)/10 + 'k');  
    }
    
    if (value >= million && value <= billion) {
        $("#mktCap").html("Mkt Cap: "+ Math.round((value/million)*10)/10 + 'M');   
    }
    
    if (value >= billion && value <= trillion) {
        $("#mktCap").html("Mkt Cap: "+ Math.round((value/billion)*10)/10 + 'B');     
    }
    
}



function plotChart(lab, ser){
var data = {
    // A labels array that can contain any sort of values
    labels: lab,
    // Our series array that contains series objects or in this case series data arrays
    series:[ser]
  };
  
  // As options we currently only set a static size of 300x200 px. We can also omit this and use aspect ratio containers
  // as you saw in the previous example
 
  
  // Create a new line chart object where as first parameter we pass in a selector
  // that is resolving to our chart container element. The Second parameter
  // is the actual data object. As a third parameter we pass in our custom options.
  new Chartist.Line('.ct-chart', data);
}
