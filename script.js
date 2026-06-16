const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// Scroll reveal
const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.14,
  rootMargin: "0px 0px -40px 0px"
});

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index % 6, 5) * 60}ms`;
  revealObserver.observe(item);
});

// Gentle parallax for the hero image stack
const parallaxElement = document.querySelector("[data-parallax]");
let latestScrollY = window.scrollY;
let ticking = false;

function updateParallax() {
  if (parallaxElement) {
    const offset = Math.min(latestScrollY * 0.05, 22);
    parallaxElement.style.transform = `translateY(${offset}px)`;
  }
  ticking = false;
}

window.addEventListener("scroll", () => {
  latestScrollY = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(updateParallax);
    ticking = true;
  }
});
