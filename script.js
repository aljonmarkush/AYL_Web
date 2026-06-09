/* ============================================================
   AYL — Alliance of Young Leaders
   script.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Scroll Progress Bar ─────────────────────────────── */
  const progressBar = document.getElementById('scroll-progress');
  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  }

  /* ── Navbar ──────────────────────────────────────────── */
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const navLinkItems = document.querySelectorAll('.nav-link');

  function updateNavbar() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile menu on link click
  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
    }
  });

  /* ── Active Nav Highlighting ─────────────────────────── */
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNav() {
    const scrollPos = window.scrollY + 100;
    sections.forEach(section => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (link) {
        if (scrollPos >= top && scrollPos < bottom) {
          navLinkItems.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  }

  /* ── Back To Top ─────────────────────────────────────── */
  const backToTop = document.getElementById('back-to-top');

  function updateBackToTop() {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ── Scroll Reveal (Intersection Observer) ───────────── */
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
  });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ── Counter Animations ──────────────────────────────── */
  const counters = document.querySelectorAll('.stat-number[data-target]');

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const start = performance.now();

    function update(timestamp) {
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target;
    }

    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));

  /* ── Gallery Lightbox ────────────────────────────────── */
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const lightboxCaption = document.getElementById('lightbox-caption');

  let currentIndex = 0;

  // Collect captions
  const galleryCaptions = Array.from(galleryItems).map(item => {
    const el = item.querySelector('.gallery-placeholder span');
    return el ? el.textContent : 'Photo';
  });

  function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function updateLightbox() {
    lightboxCaption.textContent = galleryCaptions[currentIndex] || 'Photo';
  }

  function prevPhoto() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    updateLightbox();
  }

  function nextPhoto() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    updateLightbox();
  }

  galleryItems.forEach((item, i) => {
    item.addEventListener('click', () => openLightbox(i));
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', prevPhoto);
  lightboxNext.addEventListener('click', nextPhoto);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevPhoto();
    if (e.key === 'ArrowRight') nextPhoto();
  });

  /* ── PDF Viewer Fallback ─────────────────────────────── */
  const pdfIframe = document.getElementById('pdf-iframe');
  const pdfFallback = document.getElementById('pdf-fallback');

  if (pdfIframe) {
    pdfIframe.addEventListener('error', () => {
      pdfIframe.style.display = 'none';
      if (pdfFallback) {
        pdfFallback.style.display = 'flex';
      }
    });
  }

  /* ── Smooth Scrolling ────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ── Staggered Officer Cards ─────────────────────────── */
  const officerCards = document.querySelectorAll('.officer-card:not(.officer-featured)');
  officerCards.forEach((card, i) => {
    card.style.transitionDelay = `${(i % 3) * 0.1}s`;
  });

  /* ── Staggered Committee Cards ───────────────────────── */
  const committeeCards = document.querySelectorAll('.committee-card');
  committeeCards.forEach((card, i) => {
    card.style.transitionDelay = `${(i % 3) * 0.1}s`;
  });

  /* ── Parallax Hero Shapes ────────────────────────────── */
  const shapes = document.querySelectorAll('.shape');

  function updateParallax() {
    const scrollY = window.scrollY;
    shapes.forEach((shape, i) => {
      const speed = (i + 1) * 0.04;
      shape.style.transform = `translateY(${scrollY * speed}px)`;
    });
  }

  /* ── Section Divider Animation ───────────────────────── */
  // Sections get a subtle entrance by adding 'in-view' class
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('.section').forEach(s => sectionObserver.observe(s));

  /* ── Logo Text on Scroll ─────────────────────────────── */
  function updateLogoText() {
    const logoText = document.querySelector('.logo-text');
    if (logoText) {
      logoText.style.display = window.scrollY > 60 ? 'block' : 'none';
    }
  }

  /* ── Throttled Scroll Handler ────────────────────────── */
  let scrollTicking = false;

  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        updateProgress();
        updateNavbar();
        updateActiveNav();
        updateBackToTop();
        updateParallax();
        updateLogoText();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  // Initial calls
  updateProgress();
  updateNavbar();
  updateActiveNav();
  updateBackToTop();

  /* ── Feature Card Icon Rotate on Hover ───────────────── */
  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      const icon = card.querySelector('.feature-icon');
      if (icon) icon.style.transform = 'rotate(-5deg) scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
      const icon = card.querySelector('.feature-icon');
      if (icon) icon.style.transform = '';
    });
  });

  /* ── Value Card Hover Effect ─────────────────────────── */
  document.querySelectorAll('.value-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-4px) scale(1.03)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /* ── Contact Card Link Indicator ─────────────────────── */
  document.querySelectorAll('.contact-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      const icon = card.querySelector('.contact-icon');
      if (icon) icon.style.transform = 'scale(1.1) rotate(-5deg)';
    });
    card.addEventListener('mouseleave', () => {
      const icon = card.querySelector('.contact-icon');
      if (icon) icon.style.transform = '';
    });
  });

  console.log('🌟 AYL Website loaded successfully!');
});
