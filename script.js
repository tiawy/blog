document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        var target = document.querySelector(event.target.hash);
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  });
  