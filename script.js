// CodeWithBenji.AI - Modern JavaScript Interactions

document.addEventListener('DOMContentLoaded', function() {
  // Smooth page fade-in
  document.body.style.opacity = 0;
  document.body.style.transition = 'opacity 0.5s ease-out';
  requestAnimationFrame(() => {
    document.body.style.opacity = 1;
  });

  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  const body = document.body;

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      menuToggle.classList.toggle('active');
      body.classList.toggle('menu-open');
    });

    // Close menu when clicking a nav link
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
        body.classList.remove('menu-open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
        body.classList.remove('menu-open');
      }
    });
  }

  // Session Filter Functionality
  const filterTags = document.querySelectorAll('.filter-tag');
  const sessionCards = document.querySelectorAll('.session-card');

  if (filterTags.length > 0 && sessionCards.length > 0) {
    filterTags.forEach(tag => {
      tag.addEventListener('click', function() {
        // Update active state
        filterTags.forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        const filter = this.dataset.filter;

        // Filter cards with animation
        sessionCards.forEach(card => {
          const categories = card.dataset.category?.split(' ') || [];

          if (filter === 'all' || categories.includes(filter)) {
            card.style.display = 'flex';
            card.style.animation = 'fadeInUp 0.4s ease forwards';
          } else {
            card.style.display = 'none';
          }
        });
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

  // Add scroll effect to header
  const header = document.querySelector('header');
  if (header) {
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    });
  }

  // Animate elements on scroll
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe feature cards, session cards, and about cards
  const animateElements = document.querySelectorAll('.feature-card, .session-card, .about-card, .stat-item');
  animateElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.animationDelay = `${index * 0.1}s`;
    observer.observe(el);
  });

  // Add hover effect sounds (optional - requires user interaction first)
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
    });
    btn.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Keyboard navigation support
  document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape
    if (e.key === 'Escape' && nav?.classList.contains('active')) {
      nav.classList.remove('active');
      menuToggle?.classList.remove('active');
      body.classList.remove('menu-open');
    }
  });

  // Add loading state for external links
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function() {
      // Add visual feedback for external link clicks
      this.style.opacity = '0.7';
      setTimeout(() => {
        this.style.opacity = '1';
      }, 200);
    });
  });
});

// Add CSS class for scroll animations
const style = document.createElement('style');
style.textContent = `
  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease forwards !important;
    opacity: 1 !important;
  }

  header.scrolled {
    background: rgba(15, 23, 42, 0.98) !important;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  body.menu-open {
    overflow: hidden;
  }
`;
document.head.appendChild(style);
