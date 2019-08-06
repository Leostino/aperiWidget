//variables for stocks API IEX Cloud
const iexToken = 'pk_5ac05ab4c58a4a39a2ebf4910d6a17ab'; 
let symbol;

//variables to get the labels and series of data for the charts
let getLabels=[];
let getSeries=[];

//variables for the main stock url, the logo url, and the historic data for charts
let queryStocksURL;
let queryLogoURL;
let queryChartURL;
getSymbol();

//functions starts by clicking "stocks" button
 function getSymbol(){
    $("#buttonStocks").on("click", function() {
        symbol=$("#searchSymbol").val(); // symbol gets value entered from user
        callStock(); // do the ajax call
    });
        
}
//Ajax call for main values: stock value, P/E, and marketCap
function callStock(){
    queryStocksURL ="https://cloud.iexapis.com/v1/stock/"+symbol+"/quote?token="+iexToken;
$.ajax({
    url: queryStocksURL,
    method:"GET"
}).done(function(response){

    //show in html Company Name, stock price, p/E ratio and market cap
    $("#companyName").html(response.companyName);
    $("#livePrice").html(response.latestPrice);
    $("#peRatio").html("P/E Ratio: "+response.peRatio);
    //call function to format the market cap number so it doesn't show a 9-12 digit number
    formatNumber(response.marketCap);

});
//Ajax call for the company logo.
queryLogoURL ="https://cloud.iexapis.com/v1/stock/"+symbol+"/logo?token="+iexToken;   
$.ajax({
    url: queryLogoURL,
    method:"GET"
}).done(function(response){
    //show in html the image logo for the symbol written by user
    $("#logo").attr("src", response.url)

});
//Ajax call for the 1 month historic data of stock value
queryChartURL ="https://cloud.iexapis.com/v1/stock/"+symbol+"/chart/1m?token="+iexToken;   
$.ajax({
    url: queryChartURL,
    method:"GET"
}).done(function(response){

    //initialize labels and series as empty arrays
    getLabels=[];
    getSeries=[];
    //getting labels and close values for each day the API has stored (1 month historic data)
    for (var i=0; i<response.length; i++){
        getLabels.push(response[i].label);
        getSeries.push(response[i].close);
    }

    //function to print chart sending labels and series just taken from the API 
   plotChart(getLabels,getSeries);

});
}
//function to format the market cap value
function formatNumber(value) {

    //function can handle thousands, millions and billions in case they are needed
    var thousand = 1000;
    var million = 1000000;
    var billion = 1000000000;
    var trillion = 1000000000000;
    // if market cap is minor to 1000 print Mkt Cap value complete
    if (value < thousand) {
   $("#mktCap").html("Mkt Cap: "+ value);
}
    // if market cap is between one thousand and one million print Mkt Cap value divided by 1000 and rounded by 1 decimal points
    if (value >= thousand && value <= 1000000) {
         $("#mktCap").html("Mkt Cap: "+ Math.round((value/thousand)*10)/10 + 'k');  
    }
    // if market cap is between one million and one billion print Mkt Cap value divided by 1M and rounded by 1 decimal points
    if (value >= million && value <= billion) {
        $("#mktCap").html("Mkt Cap: "+ Math.round((value/million)*10)/10 + 'M');   
    }
    // if market cap is between one billion and one trillion print Mkt Cap value divided by 1B and rounded by 1 decimal points
    if (value >= billion && value <= trillion) {
        $("#mktCap").html("Mkt Cap: "+ Math.round((value/billion)*10)/10 + 'B');     
    }
    
}


// function to plot the chart, it expects two values, labels and series of data to plot
function plotChart(lab, ser){
//data object containing labels and series
var data = {
    // A labels array that can contain dates taken from API historic data
    labels: lab,
    // Our series array that contains series data arrays for stock value
    series:[ser]
  };
  
  // As options we currently set a static size of 500x300 px. 
  var options = {
    width: 500,
    height: 300
  };
  
  // Create a new line chart object where as first parameter we pass in a selector
  // that is resolving to our chart container element. The Second parameter
  // is the actual data object. As a third parameter we pass in our custom options.
  new Chartist.Line('.ct-chart', data, options);
}
