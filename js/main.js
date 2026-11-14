(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');
  const navLinks = document.querySelectorAll('.site-nav a, .footer-nav a');
  const yearEl = document.getElementById('year');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navToggle.setAttribute('aria-label', expanded ? 'Open menu' : 'Close menu');
      siteNav.classList.toggle('open');
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open menu');
        siteNav.classList.remove('open');
      });
    });
  }

  function animateCount(el) {
    const target = Number(el.getAttribute('data-count'));
    if (!Number.isFinite(target)) return;

    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1100;
    const start = performance.now();

    function frame(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = Math.round(target * eased);
      el.textContent = value.toLocaleString('en-CA') + suffix;
      if (t < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  }

  const revealElements = document.querySelectorAll('.reveal');

  function onReveal(el) {
    el.classList.add('visible');
    if (prefersReducedMotion) return;
    el.querySelectorAll('[data-count]').forEach(animateCount);
  }

  if ('IntersectionObserver' in window && revealElements.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            onReveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach(function (el, index) {
      el.style.transitionDelay = prefersReducedMotion ? '0ms' : Math.min(index * 40, 280) + 'ms';
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      onReveal(el);
    });
  }

  if (prefersReducedMotion) {
    document.querySelectorAll('[data-count]').forEach(function (el) {
      const target = Number(el.getAttribute('data-count'));
      const suffix = el.getAttribute('data-suffix') || '';
      if (Number.isFinite(target)) {
        el.textContent = target.toLocaleString('en-CA') + suffix;
      }
    });
  }

  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener(
      'scroll',
      function () {
        header.style.boxShadow = window.scrollY > 8 ? '0 2px 16px rgba(32, 63, 74, 0.06)' : 'none';
      },
      { passive: true }
    );
  }
})();
