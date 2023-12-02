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
    if (entry.isIntersecting) {
      const video = document.getElementById('aboutVideo');
      video.play();
      observer.unobserve(entry.target);
    }
  });
}

// Create an Intersection Observer instance
const observer = new IntersectionObserver(handleVideoAutoplay, { threshold: 0.5 });

// Target the about section for observation
const aboutSection = document.getElementById('about');
observer.observe(aboutSection);