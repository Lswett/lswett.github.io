// lswett.github.io — nav toggle, scroll state, reveal-on-scroll, active link
(function () {
  "use strict";

  // Current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Nav background on scroll
  var nav = document.querySelector(".nav");
  var onScroll = function () {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  var toggle = document.getElementById("nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", function (e) {
      if (e.target instanceof HTMLAnchorElement) {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Active section highlighting
  var sections = document.querySelectorAll("main section[id]");
  var navAnchors = document.querySelectorAll(".nav-links a");
  if ("IntersectionObserver" in window && sections.length && navAnchors.length) {
    var byId = {};
    navAnchors.forEach(function (a) {
      var href = a.getAttribute("href") || "";
      if (href.charAt(0) === "#") byId[href.slice(1)] = a;
    });
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var anchor = byId[entry.target.id];
          if (!anchor) return;
          if (entry.isIntersecting) {
            navAnchors.forEach(function (a) { a.classList.remove("active"); });
            anchor.classList.add("active");
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(function (s) { sectionObserver.observe(s); });
  }

  // Reveal on scroll with stagger within each batch
  var reveals = document.querySelectorAll(".reveal");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("visible"); });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries, obs) {
        var batchIndex = 0;
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          el.style.setProperty("--d", Math.min(batchIndex * 60, 240) + "ms");
          el.classList.add("visible");
          obs.unobserve(el);
          batchIndex++;
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) { revealObserver.observe(el); });
  }
})();
