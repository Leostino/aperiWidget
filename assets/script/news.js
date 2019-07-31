const newsKey = "1215781e102941fc9d6c5bb9d5b6d7a4"

let queryNewsKeyURL = "https://newsapi.org/v2/everything?q=bitcoin&from=2019-06-30&sortBy=publishedAt&apiKey=1215781e102941fc9d6c5bb9d5b6d7a4" + newsKey;

$.ajax({
    url: queryNewsKeyURL,
    method:"GET"
}).done(function(response){
    for (var i = 0;i<10;i++){
        let newsevents = response.data[i].relationships.newsevents.data.id;
        console.log("Routes"+response.data[i].relationships.newsevents.data);
        $("#mbtaTest").append("<p>"+newsevents+"</p>");
        }
      })

    