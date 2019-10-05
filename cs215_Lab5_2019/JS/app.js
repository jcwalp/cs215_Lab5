$(document).ready(function() {

    var imageArray = new Array(); //create new array to preload images
    var numImages = 2;
    var imageCounter = 0;


    for (var i = 0; i < numImages; i++) {
        imageArray[i] = new Image(); //set image src property to image path,preloading image in the process
        imageArray[i].src = "Images/brightIdea" + (i + 1) + ".png";
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
        var userName = prompt("Enter Your Name Here:");
        if (userName != ""){
          var $temp = document.getElementsByTagName("h2")[0]
          .innerHTML = userName + ", BrightIdeas Will Change Your Life";
        }

        /* your code here  to get and display user name */
        /* no other variables permitted here */
        /* google why $ in front of jQuery variable temp */

    }); //end click(function()
}); //end $(document).ready



/****************************************************************************/

$(document).ready(function() {
    $("._submit").click(function() {

       //variable holding regular expression
        var notInName = ^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$;
        if ($())


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
