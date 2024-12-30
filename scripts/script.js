const primaryNav = document.querySelector(".primaryNav")
const toggleBtn = document.querySelector(".navToggle")

toggleBtn.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')
    
    if(visibility === "false"){
        primaryNav.setAttribute("data-visible", true);
        toggleBtn.setAttribute("aria-expanded",true);
    } else if(visibility === "true"){
        primaryNav.setAttribute("data-visible", false);
        toggleBtn.setAttribute("aria-expanded",false)
    } 
})

//* Slider
var autoplayInterval = 9000;
var autoplayTimer = null;
var autoplay = true;
var newIndex = 1;

if (autoplay) {
     autoplayTimer = setInterval(function() {
     newIndex++;
     navigateSlider();
   }, autoplayInterval);
}

function resetSlider() { 
  clearInterval(autoplayTimer);
}

function navigateSlider() { 
  const slide1 = document.getElementById('slide1');
  const slide2 = document.getElementById('slide2');
  const slide3 = document.getElementById('slide3');
  const slide4 = document.getElementById('slide4');
  if (newIndex == 1) {
    slide1.checked = true;
  } else if (newIndex == 2) {
    slide2.checked = true;
  } else if (newIndex == 3) {
    slide3.checked = true;
  } 
}


/* expandable content */

var coll = document.getElementsByClassName("expandableHeader");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


