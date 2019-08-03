
 let name = $("#yourName").val();



$(document).ready(function() {
    $("header").hide();
    $("section").hide();
    $("aside").hide();
    });


    $("#buttonStart").on("click", function() {
        name=$("#yourName").val();
        if (name.length===0){
            $("#emptyName").text("Please enter your name");
        }
        else{
            $("header").show('slow');
            $("section").show('slow');
            $("header").show('slow');
            $("aside").show('slow');
            $("#helloMessage").hide('slow');
            $("#userNameHeader").html("Hello, "+ name);
        }
        
    
    });