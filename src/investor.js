//import gsap from "../dist/gsap.js";
import { ScrollTrigger } from "./gsap/all.js";
import { ScrollSmoother } from "./gsap/all.js";
import { SplitText } from "./gsap/all.js";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
function investor() {

  // smooth scroll
  document.addEventListener('DOMContentLoaded', () => {
    let smoother = ScrollSmoother.create({
      wrapper: '.smooth-wrapper',
      content: '.smooth-content',
      smooth: 1,
      smoothTouch: 0.1,
      effects: true
    });

    ScrollTrigger.refresh();

  });

  // refresh scrolltrigger
  let links = document.querySelectorAll(".cc-refresh")
  links.forEach(link => {
    link.addEventListener('click', () => {
      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 300)
    })
  })

  // BG nav dropdown open

  document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".c-dropdown");
    const navBg = document.querySelector(".c-nav-bg-open");
    let lastOpenedDropdown = null;

    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("click", (event) => {
        event.stopPropagation();

        if (lastOpenedDropdown === dropdown) {
          // Close dropdown if click on same dropdown
          lastOpenedDropdown = null;
          navBg.style.display = "none";
        } else {
          // If another dropdown is clicked, close the others and open the new one.
          dropdowns.forEach((otherDropdown) => {
            otherDropdown.classList.remove("open");
          });
          dropdown.classList.add("open");
          navBg.style.display = "block";
          lastOpenedDropdown = dropdown;
        }
      });
    });

    document.addEventListener("click", (event) => {
      if (!event.target.classList.contains("c-dropdown")) {
        // If you click outside of all the dropdowns, close them all
        dropdowns.forEach((dropdown) => {
          dropdown.classList.remove("open");
        });
        navBg.style.display = "none";
        lastOpenedDropdown = null; // Reinitialise the last open dropdown
      }
    });

    navBg.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent click propagation to the outside
      navBg.style.display = "none";
      lastOpenedDropdown = null; // Reinitialise the last open dropdown
    });
  });


  // anim txt hero
  gsap.fromTo(".c-text-container.cc-relative", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    delay: 0.3,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-text-container.cc-relative',
      start: 'bot 85%',
      toggleActions: "play none none reverse",
    }
  });


  // logo grid 

  gsap.to(".c-collection-list-wrapper.cc-one", {
    scrollTrigger: {
      trigger: ".c-logo-grid",
      start: "top 80%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '-4rem',
    ease: "quart.easeOut",
  });

  gsap.to(".c-collection-list-wrapper.cc-two", {
    scrollTrigger: {
      trigger: ".c-logo-grid",
      start: "top 80%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '2rem',
    ease: "quart.easeOut",
  });

  gsap.to(".c-collection-list-wrapper.cc-three", {
    scrollTrigger: {
      trigger: ".c-logo-grid",
      start: "top 80%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '-2rem',
    ease: "quart.easeOut",
  });

  gsap.to(".c-collection-list-wrapper.cc-four", {
    scrollTrigger: {
      trigger: ".c-logo-grid",
      start: "top 80%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '2rem',
    ease: "quart.easeOut",
  });

  gsap.to(".c-collection-list-wrapper.cc-five", {
    scrollTrigger: {
      trigger: ".c-logo-grid",
      start: "top 80%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '-4rem',
    ease: "quart.easeOut",
  });


  // FOOTER ANIM

  // footer cta 

  const quotes = document.querySelectorAll(".cc-split");

  function setupSplits() {
    quotes.forEach(quote => {
      // Reset if needed
      if (quote.anim) {
        quote.anim.progress(1).kill();
        quote.split.revert();
      }

      quote.split = new SplitText(quote, {
        type: "lines,words,chars",
        linesClass: "split-line"
      });

      // Set up the anim
      quote.anim = gsap.from(quote.split.chars, {
        scrollTrigger: {
          trigger: quote,
          toggleActions: "play none none reverse",
          start: "top 80%",
        },
        duration: 0.5,
        opacity: 0,
        y: 5,
        stagger: 0.05,
      });
    });
  }

  ScrollTrigger.addEventListener("refresh", setupSplits);
  setupSplits();

  // footer chart anim

  gsap.to(".c-img-chart-footer.cc-one", {
    scrollTrigger: {
      trigger: ".c-chart-footer-wrapper",
      start: "top 100%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '-11rem',
    ease: "quart.easeOut",
  });

  gsap.to(".c-img-chart-footer.cc-two", {
    scrollTrigger: {
      trigger: ".c-chart-footer-wrapper",
      start: "top 100%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '-20rem',
    ease: "quart.easeOut",
  });

  gsap.to(".c-img-chart-footer.cc-three", {
    scrollTrigger: {
      trigger: ".c-chart-footer-wrapper",
      start: "top 100%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '-7rem',
    ease: "quart.easeOut",
  });

  gsap.to(".c-img-chart-footer.cc-four", {
    scrollTrigger: {
      trigger: ".c-chart-footer-wrapper",
      start: "top 100%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '-2rem',
    ease: "quart.easeOut",
  });

  gsap.to(".c-img-chart-footer.cc-five", {
    scrollTrigger: {
      trigger: ".c-chart-footer-wrapper",
      start: "top 100%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '-6rem',
    ease: "quart.easeOut",
  });

  gsap.to(".c-img-chart-footer.cc-six", {
    scrollTrigger: {
      trigger: ".c-chart-footer-wrapper",
      start: "top 100%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '-11rem',
    ease: "quart.easeOut",
  });

  // responsive

  ScrollTrigger.matchMedia({

    // large
    "(min-width: 992px)": function () {

      // sticky section

      let st = ScrollTrigger.create({
        trigger: ".c-sticky-wrapper",
        pin: ".c-sticky-left-wrapper",
        start: "top center",
        end: "end",
      });


      // GROWING IMG CTA FOOTER

      gsap.to(".c-img-cta-footer.cc-one", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
        },
        scaleX: '300%',
        scaleY: '300%',
        x: "21rem",
        ease: "quart.easeOut",
      });

      gsap.to(".c-img-cta-footer.cc-two", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
        },
        scaleX: '900%',
        scaleY: '900%',
        x: "-20rem",
        y: "5rem",
        ease: "quart.easeOut",
      });

      gsap.to(".c-img-cta-footer.cc-three", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
        },
        scaleX: '780%',
        scaleY: '780%',
        x: "-10rem",
        y: "5rem",
        ease: "quart.easeOut",
      });
    },
    // medium
    "(min-width: 767px) and (max-width: 991px)": function () {

      // sticky section

      let st = ScrollTrigger.create({
        trigger: ".c-sticky-wrapper",
        pin: ".c-sticky-left-wrapper",
        start: "top center",
        end: "end",
      });


      // GROWING IMG CTA FOOTER

      gsap.to(".c-img-cta-footer.cc-one", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
        },
        scaleX: '400%',
        scaleY: '400%',
        x: "21rem",
        ease: "quart.easeOut",
      });

      gsap.to(".c-img-cta-footer.cc-two", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
        },
        scaleX: '600%',
        scaleY: '600%',
        x: "-10rem",
        y: "5rem",
        ease: "quart.easeOut",
      });

      gsap.to(".c-img-cta-footer.cc-three", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
        },
        scaleX: '380%',
        scaleY: '380%',
        x: "-10rem",
        y: "5rem",
        ease: "quart.easeOut",
      });
    },
    // small
    "(max-width: 480px)": function () {


      // GROWING IMG CTA FOOTER

      gsap.to(".c-img-cta-footer.cc-one", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
        },
        scaleX: '200%',
        scaleY: '200%',
        x: "10rem",
        ease: "quart.easeOut",
      });

      gsap.to(".c-img-cta-footer.cc-two", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
        },
        scaleX: '350%',
        scaleY: '350%',
        x: "-10rem",
        y: "5rem",
        ease: "quart.easeOut",
      });

      gsap.to(".c-img-cta-footer.cc-three", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
        },
        scaleX: '280%',
        scaleY: '280%',
        x: "0rem",
        y: "5rem",
        ease: "quart.easeOut",
      });

    },
  })


}

export default investor