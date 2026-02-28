document.addEventListener("DOMContentLoaded", () => {
  // Page load transition
  document.body.classList.add("page-loaded");

  const header = document.querySelector(".header");
  const nav = document.querySelector(".nav");
  const burger = document.querySelector(".burger");
  const links = document.querySelectorAll(".nav a");

  // Header compact on scroll
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  }

  // Toggle mobile menu
  function toggleMenu() {
    nav.classList.toggle("open");
    burger.classList.toggle("open");
  }

  function closeMenu() {
    nav.classList.remove("open");
    burger.classList.remove("open");
  }

  if (burger) {
    burger.addEventListener("click", toggleMenu);
  }

  links.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (
      nav && burger &&
      !nav.contains(event.target) &&
      !burger.contains(event.target)
    ) {
      closeMenu();
    }
  });

  // Back-to-top button
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    }, { passive: true });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Scroll-reveal with IntersectionObserver
  const revealElements = document.querySelectorAll(".reveal");
  if (revealElements.length > 0 && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");

            // Stagger children if present
            const children = entry.target.querySelectorAll(".reveal-child");
            children.forEach((child, i) => {
              child.style.transitionDelay = `${i * 0.1}s`;
              child.classList.add("revealed");
            });

            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback: show everything
    revealElements.forEach((el) => {
      el.classList.add("revealed");
      el.querySelectorAll(".reveal-child").forEach((c) => c.classList.add("revealed"));
    });
  }

  // Animated stat counters
  const statNumbers = document.querySelectorAll(".stat-number[data-target]");
  if (statNumbers.length > 0 && "IntersectionObserver" in window) {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    statNumbers.forEach((el) => statsObserver.observe(el));
  }

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || "";
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = current + suffix;
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }
});

// Expose toggleMenu globally for onclick handlers
function toggleMenu() {
  const nav = document.querySelector(".nav");
  const burger = document.querySelector(".burger");
  if (nav) nav.classList.toggle("open");
  if (burger) burger.classList.toggle("open");
}
