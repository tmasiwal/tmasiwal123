var typed = new Typed(".text", {
    strings: ["Full Stack Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
  
// Get the "Skills" link element
const skillsLink = document.querySelector('.skills-link');

// Get the "Skills" section element
const skillsSection = document.querySelector('.skills-top');

// Add a click event listener to the "Skills" link
skillsLink.addEventListener('click', (event) => {
  // Prevent the default link behavior (prevents page from jumping to "#")
  event.preventDefault();

  // Calculate the scroll position of the "Skills" section
  const scrollPosition = skillsSection.offsetTop;

  // Scroll to the "Skills" section
  window.scrollTo({
    top: scrollPosition,
    behavior: 'smooth', // Optional: Add smooth scrolling effect
  });
});

