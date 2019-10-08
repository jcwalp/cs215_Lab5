$(document).ready(function() {

    var imageArray = new Array(); //create new array to preload images
    var numImages = 2;
    var imageCounter = 0;


    for (var i = 0; i < numImages; i++) {
        imageArray[i] = new Image(); //set image src property to image path,preloading image in the process
        imageArray[i].src = "images/brightIdea" + (i + 1) + ".png";
    }


    //if browser does not support the image object, exit.
    if (!document.images)
        return;

    setInterval(function() {

        $("#blinking_image").attr('src', imageArray[imageCounter++].src);

        if (imageCounter == numImages)
            imageCounter = 0;

    }, 700); //end setInterval



}); //end $(document).ready




/******************************************************************************/


$(document).ready(function() {
    $("#login").click(function() {
        var userName;
        var $temp;

        /* your code here  to get and display user name */
        /* no other variables permitted here */
        /* google why $ in front of jQuery variable temp */

    }); //end click(function()
}); //end $(document).ready



/****************************************************************************/

$(document).ready(function() {
    $("._submit").click(function() {

       //variable holding regular expression
        var notInName = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;

        var lastname = $('#last_name').val();
        var email = $('#email').val();
        console.log(lastname);
        console.log(email);

        if (lastname.length < 1){
          console.log("Less than 1");
          return false;
        }
        var validLastName = notInName.test(lastname);
        if (!validLastName){
          console.log("Invalid Chars");
          return false;
        }
        else {
          console.log("Good");
          return true;
        }
        /* test if  class reqd is blank or has incorrect chars in it;
        return false if this is the case */


        var $emailValidator = $("form").validate({


		/* state email rules here */

        }); //end validate


        var $isEmailValid;


        /*  test  boolean var  isEmailValid here
        if false return false, else submit form, reset and return to index.hrml */



    }); //end click
}); //end ready

/***********************************************************************************/

$(document).ready(function() {
    $("._reset").click(function() {

        /* your code to reset the form */

    });
});

/************************************************************************************/
