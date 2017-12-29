//adding numbers
var n1 = document.getElementById("num-one");
var n2 = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

n1.addEventListener("input", add);
n2.addEventListener("input", add);

function add() {
  var one = parseFloat(n1.value) || 0;
  var two = parseFloat(n2.value) || 0;
  
  addSum.innerHTML = "Your sum is: "+(one+two);
}

//clicking to display/hide pictures
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");

one.addEventListener("click", picLink);
two.addEventListener("click", picLink);
three.addEventListener("click", picLink);

function picLink() {
  var allImages = document.querySelectorAll("img");
  var picId = this.attributes["data-img"].value;
  var pic = document.getElementById(picId);
  
  for (var i = 0; i < allImages.length; i++) {
    if (allImages[i] !== pic) {
      allImages[i].className = "hide";
    }
  }
    
  if (pic.className === "hide") {
    pic.className = "";
  } else {
    pic.className = "hide";
  }
}