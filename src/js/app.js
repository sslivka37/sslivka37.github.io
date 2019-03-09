

  //show or hide navigation at top
function showOrHide() {
  var menu = document.getElementById("navMenu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

//modal button for bio information
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

//collapsible project descriptions
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

(function() {

  setUpPage();

  function setUpPage() {
 addSliderEventListeners();
  }

//the slider stuff
function addSliderEventListeners() {

    const sliderPrev = document.getElementById('slider-prev');
    const sliderNext = document.getElementById('slider-next');
    const sliderFrame = document.getElementById('slider-frame');
    const sliderCaption = document.getElementById('slider-caption');

    const slides =
      Array.from(sliderFrame.querySelectorAll('div[data-src]'))
        .map(div => {
          return {
            imageUrl: div.getAttribute('data-src'),
            caption: div.textContent.trim(),
          };
        });

    let sliderIndex = 0;
    displaySliderImage();

    function displaySliderImage() {
      let { imageUrl, caption } = slides[sliderIndex];
      sliderFrame.style.backgroundImage = `url('${imageUrl}')`;
      let count = `(${sliderIndex+1}/${slides.length}) `;
      sliderCaption.innerHTML = count + caption;
      sliderCaption.classList.add('flash');
      setTimeout(() => {
        sliderCaption.classList.remove('flash');
      }, 0);
    }

    function displayPrevSliderImage() {
      sliderIndex--;
      if (sliderIndex < 0) {
        sliderIndex = slides.length - 1;
      }
      displaySliderImage();
    }

    function displayNextSliderImage() {
      sliderIndex++;
      if (sliderIndex === slides.length) {
        sliderIndex = 0;
      }
      displaySliderImage();
    }

    sliderPrev.addEventListener('click', displayPrevSliderImage);
    sliderNext.addEventListener('click', displayNextSliderImage);

    setInterval(function() {
      displayNextSliderImage();
    }, 4000);
  }




})();
