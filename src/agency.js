//import gsap from "../dist/gsap.js";
import { ScrollTrigger } from "./gsap/all.js";
import { ScrollSmoother } from "./gsap/all.js";
import { SplitText } from "./gsap/all.js";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
function agency() {

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

  // Anchor 

  const menuHeight = $('.cc-header').height();
  const padding = menuHeight;

  // Check if window location hash isn't empty
  if (window.location.hash) {
    $('html, body').animate({
      scrollTop: $(window.location.hash).offset().top - padding
    });

    function openDropdown() {
      const hash = window.location.hash;
      const element = document.querySelector(`.c-dropdown-capabilities-container${hash}`);
      if (!element) return;
      element.click();
    }

    openDropdown();
  }

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

  // BULLET LIST ANIMATION

  // List apparition

  gsap.fromTo(".c-bullet-list-wrapper", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-bullet-list-wrapper',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });


  // Line growing

  gsap.fromTo(".line-bullet-list.cc-one", {
    scaleX: 0,
    opacity: 0
  }, {
    scaleX: 1,
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.line-bullet-list.cc-one',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".line-bullet-list.cc-two", {
    scaleX: 0,
    opacity: 0
  }, {
    scaleX: 1,
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.line-bullet-list.cc-two',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".line-bullet-list.cc-three", {
    scaleX: 0,
    opacity: 0
  }, {
    scaleX: 1,
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.line-bullet-list.cc-three',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".line-bullet-list.cc-four", {
    scaleX: 0,
    opacity: 0
  }, {
    scaleX: 1,
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.line-bullet-list.cc-four',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".line-bullet-list.cc-five", {
    scaleX: 0,
    opacity: 0
  }, {
    scaleX: 1,
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.line-bullet-list.cc-five',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  // Cta growing 

  gsap.fromTo(".c-list-button-container", {
    scaleX: 0.5,
    opacity: 0,
  }, {
    scaleX: 1,
    opacity: 1,
    duration: 0.6,
    scrollTrigger: {
      trigger: '.c-list-button-container',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  // FIND WRAPPER ANIMATION

  // find text animation

  gsap.fromTo(".c-title-l.cc-find", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-title-l.cc-find',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-text-l.cc-find", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-text-l.cc-find',
      start: 'bot 95%',
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

  // TESTIMONIAL ANIMATION
  window.addEventListener('load', function () {
    gsap.utils.toArray(".c-testimonial-container").forEach((element, index) => {
      gsap.from(element, {
        opacity: 0,
        y: "6.25rem",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
          stagger: 0.2 * index
        }
      });
    });
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

  //responsive
  ScrollTrigger.matchMedia({

    // large
    "(min-width: 992px)": function () {

      // Ball animation

      gsap.to(".c-help-img-container.cc-two", {
        scrollTrigger: {
          trigger: ".c-help-img-container.cc-two",
          start: "top 100%",
          end: "bottom -10%",
          scrub: true,
        },
        y: '18rem',
        ease: "quart.easeOut",
      });


      // growing img cta footer

      gsap.to(".c-img-cta-footer.cc-circle-alone", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
          end: "bottom 80%"
        },
        y: "-28rem",
        ease: "quart.easeOut",
      });


    },
    // medium
    "(min-width: 768px) and (max-width: 991px)": function () {

      // Ball animation

      gsap.to(".c-help-img-container.cc-two", {
        scrollTrigger: {
          trigger: ".c-help-img-container.cc-two",
          start: "top 100%",
          end: "bottom -10%",
          scrub: true,
        },
        y: '18rem',
        ease: "quart.easeOut",
      });


      // growing img cta footer

      gsap.to(".c-img-cta-footer.cc-circle-alone", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
          end: "bottom 80%"

        },
        y: "-39rem",
        ease: "quart.easeOut",
      });


    },
    // small
    "(max-width: 480px)": function () {

      // Ball animation

      gsap.to(".c-help-img-container.cc-two", {
        scrollTrigger: {
          trigger: ".c-help-img-container.cc-two",
          start: "top 100%",
          end: "bottom -10%",
          scrub: true,
        },
        y: '14rem',
        ease: "quart.easeOut",
      });


      // growing img cta footer

      gsap.to(".c-img-cta-footer.cc-circle-alone", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
          end: "bottom 80%"
        },
        y: "-35rem",
        ease: "quart.easeOut",
      });


    },
  })

}

export default agency