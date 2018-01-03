var file = document.getElementById("file");

//Blinking image
var blink = window.setInterval(function blinking() {
  if (file.style.visibility == 'hidden') {
    file.style.visibility = 'visible';
  } else {
    file.style.visibility = 'hidden';
  }
}, 500);


var rotate;
var img = document.getElementById("matrix");

function rotateAnimation() {
  var degrees = 0;
  var pause = 1;

  rotate = setInterval(function () {
    img.style.transform = "rotate(" + degrees + "deg)";
    degrees = degrees + 1;
    if (degrees > 359) {
      degrees = 1;
    }
  }, pause);


}

var zoom;
var initWidth = img.clientWidth;
var initHeight = img.clientHeight;
var bool = true;
function zooming() {
  zoom = setInterval(function () {
    var initWidth = img.clientWidth;
    var initHeight = img.clientHeight;
    img.style.width = (initWidth + 10) + "px";
    img.style.height = (initHeight + 10) + "px";

  }, 25);

}


function move() {
  var elem = document.getElementById("myBar");
  var barLength = 0;
  var bar = setInterval(frame, 50);
  var width = img.clientWidth;
  var height = img.clientHeight;

  rotateAnimation();
  zooming();
  img.style.visibility = 'visible'
  function frame() {
    if (barLength == 100) { //when the bar is done "loading"
      clearInterval(bar);
      clearInterval(zoom);
      clearInterval(rotate);
      img.style.visibility = 'hidden';
      overlay();
      //reset the javascript
      setTimeout(function () {
        window.location = window.location.href;
      }, 7000);

      // or use : document.location.reload(true);

    } else {
      barLength++;
      elem.style.width = barLength + '%';

    }
  }
}

//overlay matrix view with text for a few seconds
function on() {
  document.getElementById("overlay").style.display = "block";
  $(document.getElementById("p1")).delay(1000).fadeIn();
  $(document.getElementById("p2")).delay(2000).fadeIn();
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

function overlay() {
  on();
  setTimeout(function () {
    off();
  }, 10000);
}

