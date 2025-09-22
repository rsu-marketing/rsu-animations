import { gsap, ScrollTrigger, ScrollSmoother, SplitText } from "./gsap/all.js";
import yellowBallAnimation from "./yellowBallAnimation.js";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
function home() {

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


  // anim hero

  gsap.fromTo(".c-text-wrapper.cc-hero-one", {
    y: '5rem',
    opacity: 0,
  }, {
    y: '0rem',
    delay: 0,
    duration: 0.8,
    opacity: 1,
  });

  gsap.fromTo(".c-text-wrapper.cc-hero-two", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    delay: 0.6,
    duration: 0.8,
    opacity: 1,
  });

  gsap.fromTo(".c-button-wrapper.cc-hero", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    delay: 1,
    duration: 0.8,
    opacity: 1,
  });

  // split type 
  window.onload = function () {

    var container = document.querySelector('[split-container]');
    container.style.display = 'block';

    let typeSplit = new SplitType('[split]', {
      types: 'lines',
      tagName: 'span'
    })


    gsap.from('[split] .line', {
      y: '100%',
      opacity: 0,
      delay: 1.3,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power1.out',
    })
  };

  
  // anim img hero

  gsap.fromTo(".c-img-hero", {
    x: '8rem',
    opacity: 0
  }, {
    x: '0rem',
    delay: 0.6,
    duration: 1.2,
    opacity: 1,
  });

  gsap.to(".c-img-hero", {
    scrollTrigger: {
      trigger: ".c-img-hero",
      start: "middle",
      end: "bottom -10%",
      scrub: true,
    },
    y: '-10rem',
    ease: "quart.easeOut",
  });


  
  

  // timeline for the navigation color

  var tl = gsap.timeline()

  // tl.to('.c-navigation-wrapper', {
  //   backgroundColor: "#182463",
  //   scrollTrigger: {
  //     trigger: '.c-yellow-circle-bg',
  //     start: 'bottom 0%',
  //     toggleActions: "play none none reverse",
  //   }
  // })

  tl.to('.cc-nav', {
    color: "#0e1539",
    scrollTrigger: {
      trigger: '.c-yellow-circle-bg',
      start: 'bottom 0%',
      toggleActions: "play none none reverse",
    }
  })

  // tl.to('.c-navigation-wrapper', {
  //   backgroundColor: "#0e1539",
  //   scrollTrigger:{
  //     trigger:'.yellow-border-wrapper',
  //     start: 'bottom 0%',                    
  //     toggleActions: "play none none reverse",
  //     onEnterBack: function() {
  //       gsap.to('.c-navigation-wrapper', {
  //         backgroundColor: "#182463"
  //       }); 
  //     }
  //   }
  // })

  tl.to('.cc-nav', {
    color: "#ffffff",
    scrollTrigger: {
      trigger: '.yellow-border-wrapper',
      start: 'bottom 0%',
      toggleActions: "play none none reverse",
      onEnterBack: function () {
        gsap.to('.cc-nav', {
          color: "#0e1539"
        });
      }
    }
  })

  // Tag us text animation
  function textApparition(targetSelector) {
    gsap.fromTo(targetSelector, {
      y: '5rem',
      opacity: 0
    }, {
      y: '0rem',
      duration: 0.8,
      opacity: 1,
      scrollTrigger: {
        trigger: targetSelector,
        start: 'bot 95%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  // List target
  const targets = [
    '.c-text-wrapper.cc-tag',
    '.cc-tag-one',
    '.cc-tag-two',
    '.cc-tag-three',
    '.cc-tag-four',
    '.cc-tag-five',
    '.cc-tag-six',
    '.cc-tag-seven',
    '.cc-tag-eight',
    '.cc-tag-nine',
    '.cc-tag-ten',
    '.cc-tag-eleven',
    '.cc-tag-twelve',
    '.cc-tag-thirteen',
    '.cc-tag-fourteen',
  ];

  // Create the animation for each target
  targets.forEach(target => textApparition(target));

  // tag us line growing

  function lineApparition(lineSelector) {
    gsap.fromTo(lineSelector, {
      scaleX: 0,
      opacity: 0
    }, {
      scaleX: 1,
      duration: 0.8,
      opacity: 1,
      scrollTrigger: {
        trigger: lineSelector,
        start: 'bot 95%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  // Liste des sélecteurs cibles
  const lineGrowings = [
    '.c-tag-line.cc-one',
    '.c-tag-line.cc-two',
    '.c-tag-line.cc-three',
    '.c-tag-line.cc-four',
    '.c-tag-line.cc-five',
    '.c-tag-line.cc-six',
    '.c-tag-line.cc-seven',
    '.c-tag-line.cc-eight',
    '.c-tag-line.cc-nine',
    '.c-tag-line.cc-ten',
    '.c-tag-line.cc-eleven',
    '.c-tag-line.cc-twelve',
    '.c-tag-line.cc-thirteen',
    '.c-tag-line.cc-fourteen',

  ];

  // Create the animation for each target
  lineGrowings.forEach(lineGrowing => lineApparition(lineGrowing));


  // cta growing button

  gsap.fromTo(".c-tag-button-container", {
    scaleX: 0.5,
    opacity: 0,
  }, {
    scaleX: 1,
    opacity: 1,
    duration: 0.6,
    scrollTrigger: {
      trigger: '.c-tag-button-container',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });


  // growth animation

  gsap.fromTo(".c-text-wrapper.cc-growth", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-text-wrapper.cc-growth',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-growth-cards-container.cc-one", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    ease: "bounce.out",
    scrollTrigger: {
      trigger: '.c-growth-cards-container.cc-one',
      start: 'bot 85%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-growth-cards-container.cc-two", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    delay: 0.6,
    ease: "bounce.out",
    scrollTrigger: {
      trigger: '.c-growth-cards-container.cc-two',
      start: 'bot 85%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-growth-cards-container.cc-three", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    delay: 0.9,
    ease: "bounce.out",
    scrollTrigger: {
      trigger: '.c-growth-cards-container.cc-three',
      start: 'bot 85%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-growth-cards-container.cc-four", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    delay: 1.2,
    ease: "bounce.out",
    scrollTrigger: {
      trigger: '.c-growth-cards-container.cc-four',
      start: 'bot 85%',
      toggleActions: "play none none reverse",
    }
  });
  
  // FOOTER ARTICLE ANIMATION

  // footer cta


  gsap.fromTo(".c-title-l.cc-article", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-title-l.cc-article',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-text-xl.cc-article", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-text-xl.cc-article',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-home-article-container", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-home-article-container',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });



  // FOOTER CHART ANIM

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


  // Initialize yellow ball animation (global)
  yellowBallAnimation();

  
  // responsive

  ScrollTrigger.matchMedia({

    // large
    "(min-width: 992px)": function () {

      // hero
      gsap.fromTo(".cc-header", {
        y: '5rem',
        opacity: 0
      }, {
        y: '0rem',
        delay: 1,
        duration: 0.8,
        opacity: 1,
      });

      // Testimonial injection is now handled in sharedAnimations.js

      // MARQUEE ON SCROLL

      gsap.to(".c-scroll-marquee-wrapper", {
        scrollTrigger: {
          trigger: ".c-scroll-marquee-wrapper",
          start: "top 100%",
          scrub: true,
        },
        xPercent: -20,
        ease: "quart.easeOut",
      });

          },
    // medium
    "(min-width: 768px) and (max-width: 991px)": function () {

      // header 
      gsap.fromTo(".cc-header-mob", {
        y: '5rem',
        opacity: 0
      }, {
        y: '0rem',
        delay: 1,
        duration: 0.8,
        opacity: 1,
      });

      // Testimonial injection is now handled in sharedAnimations.js

      // MARQUEE ON SCROLL

      gsap.to(".c-scroll-marquee-wrapper", {
        scrollTrigger: {
          trigger: ".c-scroll-marquee-wrapper",
          start: "top 100%",
          scrub: true,
        },
        xPercent: -20,
        ease: "quart.easeOut",
      });

          },
    // small
    "(max-width: 480px)": function () {

      // header 
      gsap.fromTo(".cc-header-mob", {
        y: '5rem',
        opacity: 0
      }, {
        y: '0rem',
        delay: 1,
        duration: 0.8,
        opacity: 1,
      });

      // Testimonial injection is now handled in sharedAnimations.js

      // MARQUEE ON SCROLL

      gsap.to(".c-scroll-marquee-wrapper", {
        scrollTrigger: {
          trigger: ".c-scroll-marquee-wrapper",
          start: "top 100%",
          scrub: true,
        },
        xPercent: -80,
        ease: "quart.easeOut",
      });

      
    },
  })

}

export default home


