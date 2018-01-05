//Make the panel disapear (and reappear) - jQuery
function main() {
  $('.btn').on('click', 
  function() {
    $('.myPanel').hide();
    $('.myPanel').fadeIn(10000);

  });
}

$(document).ready(main);

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

//Todo list
var checklist = document.getElementById("checklist");

var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", editItem);
  inputs[i].addEventListener("blur", updateItem);
  inputs[i].addEventListener("keypress", itemKeypress);
}

function editItem() {
  this.className = "edit";
  var input = this.querySelector("input");
  input.focus();
  input.setSelectionRange(0, input.value.length);
}

function updateItem() {
  this.previousElementSibling.innerHTML = this.value;
  this.parentNode.className = "";
}

function itemKeypress(event) {
  if (event.which === 13) {
    updateItem.call(this);
  }
}

