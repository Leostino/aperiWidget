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
           for(var i = 0;i<4;i++){
              //create card
              //card img
              //card cody
              //card title
              //card text
              output +=`
              
              <div class="card clearfix" style="width: 18rem; display:float;">
                 <img src="${latestNews[i].urlToImage}" class="card-img-top">
              
               <div class="card-body">
                 <title class="card-title">${latestNews[i].title}</title>
                 
                    <p class="card-text">${latestNews[i].description}</p>
                 
                 
                 <a href="${latestNews[i].url}" target="_blank"> Read More </a>     
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