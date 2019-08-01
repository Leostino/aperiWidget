
 let name = $("#yourName").val();



$(document).ready(function() {
    $("header").hide();
    $("article").hide();

    });


    $("#buttonStart").on("click", function() {
        name=$("#yourName").val();
        if (name.length===0){
            $("#emptyName").text("Please enter your name");
        }
        else{
            $("header").show();
            $("article").show();
            $("#helloMessage").hide();
            $("#userNameHeader").html("Hello, "+ name);
        }
        
    
    });