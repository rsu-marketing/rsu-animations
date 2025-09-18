//import gsap from "../dist/gsap.js";
import { ScrollTrigger } from "./gsap/all.js";
import { ScrollSmoother } from "./gsap/all.js";
import { SplitText } from "./gsap/all.js";
import { ScrollToPlugin } from "./gsap/all.js";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, ScrollToPlugin);
function startups() {

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

  // function scrollToAnchor(anchorId) {
  //     const target = document.querySelector(`#${anchorId}`);
  //     if (target) {
  //         const menuHeight = document.querySelector('.cc-header') ? document.querySelector('.cc-header').offsetHeight : 0;

  //         gsap.to(window, {
  //             scrollTo: { y: target, offsetY: menuHeight },
  //             duration: 1
  //         });
  //     } else {
  //         console.log("Ancre cible non trouvée pour:", anchorId);
  //     }
  // }

  // window.onload = function() {
  //     // Gérer le défilement pour l'ancre dans l'URL au chargement
  //     if (window.location.hash) {
  //         const anchorId = window.location.hash.substring(1); // Retirer le '#' du hash
  //         scrollToAnchor(anchorId);
  //     }

  //     // Attacher les écouteurs d'événements aux liens
  //     const anchors = document.querySelectorAll('a');
  //     anchors.forEach(anchor => {
  //         anchor.addEventListener('click', function(e) {
  //             const href = this.getAttribute('href');
  //             if (href.startsWith('#') || href.includes('#')) {
  //                 e.preventDefault();
  //                 const anchorId = href.includes('#') ? href.split('#')[1] : href;
  //                 scrollToAnchor(anchorId);
  //                 history.pushState(null, null, `#${anchorId}`);
  //             }
  //         });
  //     });
  // };

  document.addEventListener('DOMContentLoaded', function () {
    // handle scrolling for the anchor in the URL on page load
    if (window.location.hash) {
      const anchorId = window.location.hash.substring(1); // Retirer le '#' du hash
      scrollToAnchor(anchorId);
    }

    // Attach event listeners to the links
    const anchors = document.querySelectorAll('a');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#') || href.includes('#')) {
          e.preventDefault();
          const anchorId = href.includes('#') ? href.split('#')[1] : href;

          // add a class to hide menu mob
          const menuMobWrapper = document.querySelector('.c-menu-mob-wrapper');
          const imgMenu = document.querySelector('.cc-menu');
          const imgAbso = document.querySelector('.cc-menu-absolute');
          if (menuMobWrapper) {
            menuMobWrapper.style.display = 'none';
            imgMenu.style.display = "block";
            imgAbso.style.display = "none";
          }

          // Check if the current page already has an anchor
          const currentPageAnchor = window.location.hash.substring(1);
          if (currentPageAnchor !== anchorId) {
            scrollToAnchor(anchorId);
            history.pushState(null, null, `#${anchorId}`);
          }
        }
      });
    });
  });

  function scrollToAnchor(anchorId) {
    const target = document.getElementById(anchorId);
    if (target) {
      const menuHeight = document.querySelector('.cc-header') ? document.querySelector('.cc-header').offsetHeight : 0;

      gsap.to(window, {
        scrollTo: { y: target.offsetTop - menuHeight },
        duration: 1
      });
    } else {
      // If the anchor is not found, you can choose to redirect the user to the page with the anchor
      window.location.href = `/growth-marketing-services#${anchorId}`;
    }
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

  // Anim text grid one

  gsap.fromTo(".c-title-l.cc-helping", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-title-l.cc-helping',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-text-l.cc-helping", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-text-l.cc-helping',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-text-container.cc-helping-one", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-text-container.cc-helping-one',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-text-container.cc-helping-two", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-text-container.cc-helping-two',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-startups-line.cc-helping-one", {
    scaleX: 0,
    opacity: 0
  }, {
    scaleX: 1,
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-startups-line.cc-helping-one',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-startups-line.cc-helping-two", {
    scaleX: 0,
    opacity: 0
  }, {
    scaleX: 1,
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-startups-line.cc-helping-two',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });


  // logo grid one

  gsap.to(".c-collection-list-wrapper.cc-helping-one", {
    scrollTrigger: {
      trigger: ".c-logo-grid.cc-helping",
      start: "top 80%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '-4rem',
    ease: "quart.easeOut",
  });

  gsap.to(".c-collection-list-wrapper.cc-helping-two", {
    scrollTrigger: {
      trigger: ".c-logo-grid.cc-helping",
      start: "top 80%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '2rem',
    ease: "quart.easeOut",
  });

  gsap.to(".c-collection-list-wrapper.cc-helping-three", {
    scrollTrigger: {
      trigger: ".c-logo-grid.cc-helping",
      start: "top 80%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '-2rem',
    ease: "quart.easeOut",
  });

  gsap.to(".c-collection-list-wrapper.cc-helping-four", {
    scrollTrigger: {
      trigger: ".c-logo-grid.cc-helping",
      start: "top 80%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '2rem',
    ease: "quart.easeOut",
  });

  gsap.to(".c-collection-list-wrapper.cc-helping-five", {
    scrollTrigger: {
      trigger: ".c-logo-grid.cc-helping",
      start: "top 80%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '-4rem',
    ease: "quart.easeOut",
  });

  // Anim text grid two

  gsap.fromTo(".c-title-l.cc-taking", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-title-l.cc-taking',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-text-l.cc-taking", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-text-l.cc-taking',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-text-container.cc-taking-one", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-text-container.cc-taking-one',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-text-container.cc-taking-two", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-text-container.cc-taking-two',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-startups-line.cc-taking-one", {
    scaleX: 0,
    opacity: 0
  }, {
    scaleX: 1,
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-startups-line.cc-taking-one',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-startups-line.cc-taking-two", {
    scaleX: 0,
    opacity: 0
  }, {
    scaleX: 1,
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-startups-line.cc-taking-two',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  // logo grid two

  gsap.to(".c-collection-list-wrapper.cc-taking-one", {
    scrollTrigger: {
      trigger: ".c-logo-grid.cc-taking",
      start: "top 80%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '-4rem',
    ease: "quart.easeOut",
  });

  gsap.to(".c-collection-list-wrapper.cc-taking-two", {
    scrollTrigger: {
      trigger: ".c-logo-grid.cc-taking",
      start: "top 80%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '2rem',
    ease: "quart.easeOut",
  });

  gsap.to(".c-collection-list-wrapper.cc-taking-three", {
    scrollTrigger: {
      trigger: ".c-logo-grid.cc-taking",
      start: "top 80%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '-2rem',
    ease: "quart.easeOut",
  });

  gsap.to(".c-collection-list-wrapper.cc-taking-four", {
    scrollTrigger: {
      trigger: ".c-logo-grid.cc-taking",
      start: "top 80%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '2rem',
    ease: "quart.easeOut",
  });

  gsap.to(".c-collection-list-wrapper.cc-taking-five", {
    scrollTrigger: {
      trigger: ".c-logo-grid.cc-taking",
      start: "top 80%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '-4rem',
    ease: "quart.easeOut",
  });

  // Anim text grid three

  gsap.fromTo(".c-title-l.cc-growing", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-title-l.cc-growing',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-text-l.cc-growing", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-text-l.cc-growing',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-text-container.cc-growing-one", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-text-container.cc-growing-one',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-text-container.cc-growing-two", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-text-container.cc-growing-two',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-startups-line.cc-growing-one", {
    scaleX: 0,
    opacity: 0
  }, {
    scaleX: 1,
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-startups-line.cc-growing-one',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-startups-line.cc-growing-two", {
    scaleX: 0,
    opacity: 0
  }, {
    scaleX: 1,
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-startups-line.cc-growing-two',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });


  // logo grid three

  gsap.to(".c-collection-list-wrapper.cc-growing-one", {
    scrollTrigger: {
      trigger: ".c-logo-grid.cc-growing",
      start: "top 80%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '-4rem',
    ease: "quart.easeOut",
  });

  gsap.to(".c-collection-list-wrapper.cc-growing-two", {
    scrollTrigger: {
      trigger: ".c-logo-grid.cc-growing",
      start: "top 80%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '2rem',
    ease: "quart.easeOut",
  });

  gsap.to(".c-collection-list-wrapper.cc-growing-three", {
    scrollTrigger: {
      trigger: ".c-logo-grid.cc-growing",
      start: "top 80%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '-2rem',
    ease: "quart.easeOut",
  });

  gsap.to(".c-collection-list-wrapper.cc-growing-four", {
    scrollTrigger: {
      trigger: ".c-logo-grid.cc-growing",
      start: "top 80%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '2rem',
    ease: "quart.easeOut",
  });

  gsap.to(".c-collection-list-wrapper.cc-growing-five", {
    scrollTrigger: {
      trigger: ".c-logo-grid.cc-growing",
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
    "(min-width: 480px) and (max-width: 991px)": function () {

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



export default startups