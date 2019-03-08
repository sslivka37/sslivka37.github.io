var modal = document.getElementById("bioModal");
var button = document.getElementById("bioButton");
var span = document.getElementsByClassName("close")[0];

button.onclick = function() {
modal.style.display = "block";
};

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var collapsible = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < collapsible.length; i++) {
  collapsible[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
     if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function toggleNav() {
  var nav = document.getElementById("toggleNav");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}