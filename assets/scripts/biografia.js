document.addEventListener("DOMContentLoaded", function() {
 
    anime({
      targets: 'header',
      translateY: [-50, 0],
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 1000
    });
 
    anime({
      targets: 'section',
      translateY: [-20, 0],
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 800,
      delay: anime.stagger(200, { start: 300 })
    });
  });