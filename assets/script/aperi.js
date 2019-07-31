var name=$("#yourName").val();


$(document).ready(function() {
    $("header").hide();
    $("article").hide();

    });


    $("#buttonStart").on("click", function() {
        $("header").show();
        $("article").show();
        $("#helloMessage").hide();
        $("#userNameHeader").html("Hello, "+ name);
    });