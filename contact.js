const animatedSections = document.querySelectorAll('.slide-in-blurred-right,.slide-in-blurred-left,.slide-in-blurred-bottom,#incon1,.roll-in-bottom');

animatedSections.forEach((section) => {
  let animationTriggered = false;

  window.addEventListener('scroll', () => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= sectionTop - windowHeight && scrollPosition <= sectionTop + sectionHeight &&!animationTriggered) {
      section.classList.add('in-view');
      animationTriggered = true;
      console.log(`Animation triggered for ${section.className}`);
    }
  });
});

