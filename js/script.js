const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btn.addEventListener('click', navToggle)

function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
}

// Function to handle video autoplay
function handleVideoAutoplay(entries, observer) {
  entries.forEach(entry => {
    const video = document.getElementById('aboutVideo');

    if (entry.isIntersecting) {
      // Video is in the viewport
      if (video.paused) {
        // If the video is paused, play it
        video.play();
      }
    } else {
      // Video is not in the viewport
      if (!video.paused) {
        // If the video is playing, pause it
        video.pause();
      }
    }
  });
}

// Create an Intersection Observer instance
const observer = new IntersectionObserver(handleVideoAutoplay, { threshold: 0.5 });

// Target the about section for observation
const aboutSection = document.getElementById('about');
observer.observe(aboutSection);


//FUNCTION TO CHANGE STYLE "AMENITIES SECTION"
document.addEventListener("DOMContentLoaded", function () {
  var button2 = document.querySelector(".blog-slider__button2");
  var button1 = document.querySelector(".blog-slider__button");
  var sliderBG = document.querySelector(".blog-slider");
  var code = document.querySelector(".blog-slider__code");
  var title = document.querySelector(".blog-slider__title");
  var text = document.querySelector(".blog-slider__text");
  var amenities = document.getElementById('amenities');
  var paginationBullets = document.querySelectorAll('.swiper-pagination-bullet');
  button2.addEventListener('click', function(){
    sliderBG.style.backgroundColor = '#FCEFE4';
    code.style.color = '#093454';
    title.style.color = '#093454';
    title.innerHTML = 'Overnight Amenities include:';
    text.style.color = '#093454';
    text.innerHTML = '3 Fully-Airconditioned Bedrooms, 2 55’, Smart TV, Fast Wifi, Refrigerator, Water Dispenser, Electric Kettle, Ice Box, Rice Cooker, Two Burner Gas Stove, BBQ Grill, Karaoke, Electric Fans, Mini Bar, Tables and Chairs';
    amenities.style.backgroundImage = 'url("../images/Amenities/bgOvernight.svg")';
    // Loop through each pagination bullet and change its background color
    paginationBullets.forEach(function (bullet) {
      bullet.style.background = '#093454';
    });
  });
  button1.addEventListener('click',function(){
    sliderBG.style.backgroundColor = '';
    code.style.color = '';
    title.style.color = '';
    title.innerHTML = 'Day Tour Amenities include:';
    text.style.color = '';
    text.innerHTML = '1 Fully-Airconditioned Bedroom, Fast Wifi, Ice Box, Two Burner Gas Stove, BBQ Grill, Karaoke,Electric Fans, Mini Bar, Table and Chairs,';
    amenities.style.backgroundImage = 'url("../images/Amenities/bgDaytour.svg")';
    paginationBullets.forEach(function (bullet) {
      bullet.style.background = '#FCEFE4';
    });
  })
});
