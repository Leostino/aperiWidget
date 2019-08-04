//code done by Diana W Lam

$(document).ready(function() {
//api from newsapi.org
  let newsUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=750e76d88d5b4f5080959f48214d60d4" +"&limit=3";
  
  $.ajax({
     url: newsUrl,
     method: "GET",
     dataType: "JSON",
     success: function(news){
        let output = "";
        let latestNews= news.articles;
  //find the array with for loop 
        for(var i in latestNews){
           output +=`
           <div class="col 13 m6 s12">
           <div class="card small hoverable">
           <div class="card-image">
              <img src="${latestNews[i].urlToImage}" class="responsive.img"
           </div>
           <div class="card-content">
              <h6>${latestNews[i].title}</h6>
              <div class="card-reveal">
                 <p>${latestNews[i].description}</p>
              </div>
              <div class="card-action">
              <a href="${latestNews[i].url}" target="_blank"> Read More </a>
  
              </div>
                 </div>        
              </div>   
           </div>
           `;
         //  console.log(latestNews);
        }
  //if the news will no generate
        if(output !== ""){
           $("#newsResults").html(output);
        }
     },
  //print msg on screen if an error does occur
     error:(function(){
        $("#newsResults").html("Some error has occured on the page, please try refreshing once more");
     }
     )
  })
  });