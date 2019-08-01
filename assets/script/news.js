const newsKey = "1215781e102941fc9d6c5bb9d5b6d7a4"

let queryNewsKeyURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey="+newsKey;
console.log(queryNewsKeyURL)
$.ajax({
    url: queryNewsKeyURL,
    method:"GET"
}).done(function(response){
    for (var i = 0;i<10;i++){
        let newsevents = response.[i];
        console.log(response.articles[i]);
        $("#news").append(response.articles[i]);
    }    
    })