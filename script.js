function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}












const body = document.body;

toggle.addEventListener('click', () => {
  const isDarkMode = body.classList.toggle('dark-mode');

  if (isDarkMode) {
    toggleText.textContent = 'LIGHT MODE';
  } else {
    toggleText.textContent = 'DARK MODE';
  }

  // Fix for specific elements
  document.querySelectorAll('.custom-text').forEach(el => {
    el.style.color = isDarkMode ? 'white' : 'black';
  });
});




//Gradiant Button

if (!CSS.supports('animation-timeline: scroll()') && matchMedia('(prefers-reduced-animation: no-preference)')) {
  const like = document.querySelector('.like')
  const options = {
    threshold: 1.0,
  };
  const onObserve = (entries) => {
    like.classList[entries[0].isIntersecting ? 'add' : 'remove']('shimmer')
  }
  const observer = new IntersectionObserver(onObserve, options);
  observer.observe(like)
}