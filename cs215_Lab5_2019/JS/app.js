function logIn() {

  var userN = prompt("What Is Your Name");
  var message = document.getElementsByTagName("h2")[0]
    .innerHTML = userN + ", BrightIdeas Will Change Your Life";

} //end function logIn()


// create (global!) variable called numImages to hold total number of images;
// create new array to hold preload images; call this array imageArray
var numImages = 2;
var imageArray = [];
//use for loop to populate imageArray
for (var i = 0; i < numImages; i++) {
  //set image src property to image path, preloading image in the process
  imageArray[i] = new Image();
  imageArray[i].src = "Images/brightIdea" + (i + 1) + ".png";
  console.log(imageArray[i].src.toString());
}


var i4_circleThru = 0; // global variable ( be careful) use for the function CicleThru()

function circleThru() {
  document.getElementById("blinking_image").src = imageArray[i4_circleThru % 2].src;
  i4_circleThru++;


  //if browser does not support the image object, exit.

  //  write images, from imageArray to HTML doc

  // call the setTimeout method on circleThru
  setTimeout("circleThru()", 700);

} //end circleThru()

circleThru();
// call circleThru()
