
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

    $("#yourName").on('keypress', function (e) {
        if(e.keyCode === 13){
            name=$("#yourName").val();
            e.preventDefault();
           //Disable textbox to prevent multiple submit
          // $(this).attr("disabled", "disabled");
           
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

        }
  });

 
