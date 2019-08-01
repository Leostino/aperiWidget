const iexToken = 'pk_5ac05ab4c58a4a39a2ebf4910d6a17ab';
let symbol;


let queryStocksURL;
let queryLogoURL;
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
}).then(function(response){
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
    console.log(response);
    $("#logo").attr("src", response.url)

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


