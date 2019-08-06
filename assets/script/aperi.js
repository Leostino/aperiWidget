
// ***This aperi.js loads the first page of aperiWidget and prompts for user's name***
// ***coded by Rodrigo and commented by Leonard***

console.log("hello this is the aperi script");

// creating name variable to hold the user's name

 let name;

 // when page loads, hide all contents except the prompt for the user's name

 $(document).ready(function() {

    // hide header

    $("header").hide();

    // hide section

    $("section").hide();

    // hide aside

    $("aside").hide();

    // footer hide

    //$("footer").hide();

    // end of function

});



// Start button click function that opens all contents once the user's name is collected
// when user clicks the start button

    $("#buttonStart").on("click", function() {

        // check if there's a name
        // hold the user's name in a variable "name"

        name=$("#yourName").val();

        // if statement to make sure the input field is not empty
        // if input field empty

        if (name.length === 0) {

            // ask the user to enter their name

            $("#emptyName").text("Please enter your name");
        }

        // if input field not empty, collect user's name

        else{
            
            // show header slowly

            $("header").show('slow');

            // show section slowly

            $("section").show('slow');

             // show header slowly

            $("header").show('slow');

            // show aside slowly

            $("aside").show('slow');

            // show footer slowly

            $("footer").show('slow');

            // hide prompt for user's name slowly

            $("#helloMessage").hide('slow');

            // display the hello greeting with the user's name

            $("#userNameHeader").html("Hello, "+ name);
        }

        // end of function
    
    });



    // enter key function incase the user decides to use the enter key instead of the start button
    // id #yourName is the input field for user's name
    
    // after name is entered in input fied and a key pressed

    $("#yourName").on('keypress', function (event) {

        // check if the keycode for the pressed key is 13 (keycode for "enter" key)

        if(event.keyCode === 13){

            // hold the user's name in a variable "name"

            name=$("#yourName").val();

            // cancel the default action of the keypress eg. navigating to a new page

            event.preventDefault();

            // if statement to ensure the input field is not left empty
            // if input field is empty
           
          if (name.length === 0){

            // tell the user to put their name

            $("#emptyName").text("Please enter your name");
        }
           // if input field not empty, collect user's name

        else{

            // show header slowly

            $("header").show('slow');

            // show section slowly

            $("section").show('slow');

            // show header slowly

            $("header").show('slow');

            // show aside slowly

            $("aside").show('slow');

            // hide prompt for user's name slowly

            $("#helloMessage").hide('slow');

            // display the hello greeting with the user's name

            $("#userNameHeader").html("Hello, "+ name);
        }
    } 

    // end of enter key function

});

 
