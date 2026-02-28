document.addEventListener("DOMContentLoaded", () => {
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
});

// Expose toggleMenu globally for onclick handlers
function toggleMenu() {
  const nav = document.querySelector(".nav");
  const burger = document.querySelector(".burger");
  if (nav) nav.classList.toggle("open");
  if (burger) burger.classList.toggle("open");
}
