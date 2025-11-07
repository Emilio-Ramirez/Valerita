// Main JavaScript - Navigation, Animations, and Interactions

document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });

    // Close menu when clicking a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Fade-in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe cards and sections for fade-in animation
  const animatedElements = document.querySelectorAll('.card, .section > .container, .section > .container-narrow');
  animatedElements.forEach(el => {
    observer.observe(el);
  });

  // Scroll indicator click handler
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    });
  }

  // Navbar hide/show on scroll
  let lastScrollTop = 0;
  const nav = document.querySelector('.nav');
  const scrollThreshold = 100;

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Hide scroll indicator after scrolling
    if (scrollIndicator && scrollTop > 100) {
      scrollIndicator.style.opacity = '0';
      scrollIndicator.style.pointerEvents = 'none';
    } else if (scrollIndicator && scrollTop <= 100) {
      scrollIndicator.style.opacity = '1';
      scrollIndicator.style.pointerEvents = 'auto';
    }

    if (scrollTop > scrollThreshold) {
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        nav.style.transform = 'translateY(-100%)';
      } else {
        // Scrolling up
        nav.style.transform = 'translateY(0)';
      }
    } else {
      nav.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
  });

  // Add loading state to images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (!img.complete) {
      img.style.opacity = '0';
      img.addEventListener('load', function() {
        img.style.transition = 'opacity 0.3s ease';
        img.style.opacity = '1';
      });
    }
  });
});

// Parallax effect for hero background (optional enhancement)
window.addEventListener('scroll', function() {
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    heroBg.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
  }
});
