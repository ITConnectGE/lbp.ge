// ===== DARK MODE (runs before DOMContentLoaded to prevent flash) =====
(function () {
  var saved = localStorage.getItem("theme");
  if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  // Page load transition
  document.body.classList.add("page-loaded");

  // Theme toggle
  const themeToggles = document.querySelectorAll("#themeToggle");
  function updateToggleIcons() {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    themeToggles.forEach(function (btn) {
      btn.textContent = isDark ? "\u2600\uFE0F" : "\uD83C\uDF19";
      btn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    });
  }
  updateToggleIcons();

  themeToggles.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var isDark = document.documentElement.getAttribute("data-theme") === "dark";
      if (isDark) {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      }
      updateToggleIcons();
    });
  });

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

  // Testimonials Carousel
  var testimonialsTrack = document.querySelector(".testimonials-track");
  if (testimonialsTrack) {
    var slides = testimonialsTrack.querySelectorAll(".testimonial-card");
    var dots = document.querySelectorAll(".testimonials-dot");
    var prevBtn = document.querySelector(".testimonials-btn.prev");
    var nextBtn = document.querySelector(".testimonials-btn.next");
    var currentSlide = 0;
    var totalSlides = slides.length;
    var autoPlayInterval = null;
    var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function goToSlide(index) {
      currentSlide = ((index % totalSlides) + totalSlides) % totalSlides;
      testimonialsTrack.style.transform = "translateX(-" + (currentSlide * 100) + "%)";
      dots.forEach(function (d, i) {
        d.classList.toggle("active", i === currentSlide);
      });
    }

    function startAutoPlay() {
      if (prefersReducedMotion) return;
      stopAutoPlay();
      autoPlayInterval = setInterval(function () {
        goToSlide(currentSlide + 1);
      }, 6000);
    }

    function stopAutoPlay() {
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        goToSlide(currentSlide - 1);
        startAutoPlay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        goToSlide(currentSlide + 1);
        startAutoPlay();
      });
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        goToSlide(i);
        startAutoPlay();
      });
    });

    var testimonialsSection = document.querySelector(".testimonials");
    if (testimonialsSection) {
      testimonialsSection.addEventListener("mouseenter", stopAutoPlay);
      testimonialsSection.addEventListener("mouseleave", startAutoPlay);
    }

    startAutoPlay();
  }

  // Founder Tabs
  var founderTabs = document.querySelectorAll(".founder-tab");
  var founderPanels = document.querySelectorAll(".founder-panel");
  if (founderTabs.length > 0) {
    founderTabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var target = tab.dataset.tab;
        founderTabs.forEach(function (t) { t.classList.remove("active"); });
        founderPanels.forEach(function (p) { p.classList.remove("active"); });
        tab.classList.add("active");
        var panel = document.querySelector('.founder-panel[data-panel="' + target + '"]');
        if (panel) {
          panel.classList.add("active");
          // Animate timeline items on first reveal
          if (target === "timeline") {
            var items = panel.querySelectorAll(".timeline-item");
            items.forEach(function (item, i) {
              if (!item.classList.contains("revealed")) {
                setTimeout(function () {
                  item.classList.add("revealed");
                }, i * 150);
              }
            });
          }
        }
      });
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

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item");
  if (faqItems.length > 0) {
    faqItems.forEach(function (item) {
      var btn = item.querySelector(".faq-question");
      btn.addEventListener("click", function () {
        var isActive = item.classList.contains("active");

        // Close all items
        faqItems.forEach(function (other) {
          other.classList.remove("active");
          other.querySelector(".faq-question").setAttribute("aria-expanded", "false");
          other.querySelector(".faq-answer").style.maxHeight = null;
        });

        // Open clicked if it wasn't active
        if (!isActive) {
          item.classList.add("active");
          btn.setAttribute("aria-expanded", "true");
          var answer = item.querySelector(".faq-answer");
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
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
