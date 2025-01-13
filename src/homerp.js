//import gsap from "../dist/gsap.js";
import { ScrollTrigger } from "./gsap/all.js";
import { ScrollSmoother } from "./gsap/all.js";
import { SplitText } from "./gsap/all.js";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
function homerp() {

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

  gsap.fromTo(".c-logo-grid", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    delay: 1.5,
    duration: 0.8,
    opacity: 1,
  });

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


  // anim grid logo

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

  // anim Fast txt

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
      quote.anim = gsap.from(quote.split.words, {
        scrollTrigger: {
          trigger: quote,
          toggleActions: "play none none reverse",
          start: "top 80%",
        },
        duration: 0.5,
        opacity: 0,
        y: 5,
        stagger: 0.1,
      });
    });
  }

  ScrollTrigger.addEventListener("refresh", setupSplits);
  setupSplits();


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
  // TESTIMONIAL 

  // Testimonial animation
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


      // Anim fast yellow circle
      // // SplitText 
      // const splitText = new SplitText('.cc-split-chars', { type: 'words,chars' });

      // // SplitText timeline
      // const splitTextTl = gsap.timeline({paused: true});

      // splitText.chars.forEach((char, index) => {
      //   splitTextTl.from(char, {
      //     opacity: 0,
      //     y: 20,
      //     duration: 0.015,
      //     stagger: 0.01, 
      //   });
      // });

      // splitTextTl.set('.cc-split-chars', { opacity: 0 });

      const ball = document.querySelector('[yellow-ball]');
      let scaleVal = document.documentElement.clientWidth / ball.getBoundingClientRect().width;
      window.addEventListener('resize', () => document.documentElement.clientWidth / ball.getBoundingClientRect().width);

      // timeline main (ballTl)
      const ballTl = gsap.timeline({
        scrollTrigger: {
          trigger: '[yellow-ball-section]',
          pin: true,
          start: "top 10%",
          end: '+=3000',
          scrub: 0,
        },
        // onUpdate: () => {
        //   // Start splitTextTl at the end of ballTl
        //   splitTextTl.restart()
        //   splitTextTl.set('.cc-split-chars', { opacity: 1 });
        // },
      });

      // add animations to the main timeline (ballTl)
      ballTl.to(ball, {
        left: '100vw',
        rotate: '360deg',
        duration: 40,
      });

      ballTl.to(ball, {
        scale: scaleVal * 2.5,
        top: '50rem',
        rotate: '270deg',
        duration: 60,
      }, '>');

      ballTl.to('.c-fast-txt-wrapper.cc-one', {
        opacity: 0,
        duration: 30,
      }, '<');

      ballTl.to('.c-yellow-circle-bg', {
        opacity: 0,
        duration: 30,
      }, '<');

      ballTl.to('.c-bg-wrapper', {
        backgroundColor: '#FFE985'
      });

      ballTl.to(ball, {
        opacity: 0,
      });

      ballTl.to(".c-fast-cards-wrapper", {
        opacity: 1,
      });

      ballTl.fromTo(".cc-split-chars", {
        scale: 0,
        opacity: 0
      }, {
        scale: 1,
        duration: 6,
        opacity: 1,
      });

      ballTl.fromTo(".swiper", {
        scale: 0,
        opacity: 0
      }, {
        scale: 1,
        duration: 6,
        opacity: 1,
      });

      const swiper = new Swiper(".swiper", {
        effect: "cards",
        grabCursor: true,
        keyboard: true,
      });

      // Create a GSAP timeline for the swiper
      var timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "[yellow-ball-section]",
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 1,
          onUpdate: function (self) {
            // Calculate the progression
            const progressPerSlide = 1 / (swiper.slides.length - 1);
            const index = Math.floor(self.progress / progressPerSlide);

            // Change slide based on the progress
            if (index !== swiper.activeIndex) {
              swiper.slideTo(index);
            }
          },
        },
      });


      // Inject data testimonnial

      document.addEventListener("DOMContentLoaded", function () {
        const appendOne = document.querySelector("[appendOne]");
        const testimonialOne = document.querySelector("[testimonialOne]");

        // Vérifiez s'il existe au moins trois éléments dans testimonialOne
        if (testimonialOne.children.length >= 2) {
          // Insérez l'élément avec l'attribut [appendOne] après le deuxième élément
          testimonialOne.insertBefore(appendOne, testimonialOne.children[2]);
        }
      });

      document.addEventListener("DOMContentLoaded", function () {
        const appendTwo = document.querySelector("[appendTwo]");
        const testimonialTwo = document.querySelector("[testimonialTwo]");

        // Vérifiez s'il existe au moins trois éléments dans testimonialOne
        if (testimonialTwo.children.length >= 1) {
          // Insérez l'élément avec l'attribut [appendOne] après le deuxième élément
          testimonialTwo.insertBefore(appendTwo, testimonialTwo.children[1]);
        }
      });


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

      // hero 


      // Anim fast yellow circle
      // SplitText 
      // const splitText = new SplitText('.cc-split-chars', { type: 'words,chars' });

      // SplitText timeline
      // const splitTextTl = gsap.timeline({paused: true});

      // splitText.chars.forEach((char, index) => {
      //   splitTextTl.from(char, {
      //     opacity: 0,
      //     y: 20,
      //     duration: 0.015,
      //     stagger: 0.01, 
      //   });
      // });

      // splitTextTl.set('.cc-split-chars', { opacity: 0 });

      const ball = document.querySelector('[yellow-ball]');
      let scaleVal = document.documentElement.clientWidth / ball.getBoundingClientRect().width;
      window.addEventListener('resize', () => document.documentElement.clientWidth / ball.getBoundingClientRect().width);

      // timeline main (ballTl)
      const ballTl = gsap.timeline({
        scrollTrigger: {
          trigger: '[yellow-ball-section]',
          pin: true,
          start: "top 10%",
          end: '+=3000',
          scrub: 0,
        },
        // onUpdate: () => {
        //   // Start splitTextTl at the end of ballTl
        //   splitTextTl.restart()
        //   splitTextTl.set('.cc-split-chars', { opacity: 1 });
        // },
      });

      // add animations to the main timeline (ballTl)
      ballTl.to(ball, {
        left: '100vw',
        rotate: '360deg',
        duration: 40,
      });

      ballTl.to(ball, {
        scale: scaleVal * 2.5,
        top: '50rem',
        rotate: '270deg',
        duration: 60,
      }, '>');

      ballTl.to('.c-fast-txt-wrapper.cc-one', {
        opacity: 0,
        duration: 30,
      }, '<');

      ballTl.to('.c-yellow-circle-bg', {
        opacity: 0,
        duration: 30,
      }, '<');

      ballTl.to('.c-bg-wrapper', {
        backgroundColor: '#FFE985'
      });

      ballTl.to(ball, {
        opacity: 0,
      });

      ballTl.to(".c-fast-cards-wrapper", {
        opacity: 1,
      });

      ballTl.fromTo(".cc-split-chars", {
        scale: 0,
        opacity: 0
      }, {
        scale: 1,
        duration: 6,
        opacity: 1,
      });

      ballTl.fromTo(".swiper", {
        scale: 0,
        opacity: 0
      }, {
        scale: 1,
        duration: 6,
        opacity: 1,
      });

      const swiper = new Swiper(".swiper", {
        effect: "cards",
        grabCursor: true,
        keyboard: true,
      });

      // Create a GSAP timeline for the swiper
      var timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "[yellow-ball-section]",
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 1,
          onUpdate: function (self) {
            // Calculate the progression
            const progressPerSlide = 1 / (swiper.slides.length - 1);
            const index = Math.floor(self.progress / progressPerSlide);

            // Change slide based on the progress
            if (index !== swiper.activeIndex) {
              swiper.slideTo(index);
            }
          },
        },
      });

      // Inject data testimonial

      document.addEventListener("DOMContentLoaded", function () {
        const appendOne = document.querySelector("[appendOne]");
        const testimonialOne = document.querySelector("[testimonialOne]");

        // Vérifiez s'il existe au moins trois éléments dans testimonialOne
        if (testimonialOne.children.length >= 2) {
          // Insérez l'élément avec l'attribut [appendOne] après le deuxième élément
          testimonialOne.insertBefore(appendOne, testimonialOne.children[2]);
        }
      });

      document.addEventListener("DOMContentLoaded", function () {
        const appendTwo = document.querySelector("[appendTwo]");
        const testimonialTwo = document.querySelector("[testimonialTwo]");

        // Vérifiez s'il existe au moins trois éléments dans testimonialOne
        if (testimonialTwo.children.length >= 1) {
          // Insérez l'élément avec l'attribut [appendOne] après le deuxième élément
          testimonialTwo.insertBefore(appendTwo, testimonialTwo.children[1]);
        }
      });

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

      // hero 


      // Anim fast yellow circle
      // // SplitText 
      // const splitText = new SplitText('.cc-split-chars', { type: 'words,chars' });

      // // SplitText timeline
      // const splitTextTl = gsap.timeline({paused: true});

      // splitText.chars.forEach((char, index) => {
      //   splitTextTl.from(char, {
      //     opacity: 0,
      //     y: 20,
      //     duration: 0.015,
      //     stagger: 0.01, 
      //   });
      // });

      // splitTextTl.set('.cc-split-chars', { opacity: 0 });

      const ball = document.querySelector('[yellow-ball]');
      let scaleVal = document.documentElement.clientWidth / ball.getBoundingClientRect().width;
      window.addEventListener('resize', () => document.documentElement.clientWidth / ball.getBoundingClientRect().width);

      // timeline main (ballTl)
      const ballTl = gsap.timeline({
        scrollTrigger: {
          trigger: '[yellow-ball-section]',
          pin: true,
          start: "top 10%",
          end: '+=1000',
          scrub: 0,
        },
        // onComplete: () => {
        //   // Start splitTextTl at the end of ballTl
        //   splitTextTl.play()
        //   splitTextTl.set('.cc-split-chars', { opacity: 1 });
        // },
      });

      // add animations to the main timeline (ballTl)
      ballTl.to(ball, {
        left: '100vw',
        rotate: '360deg',
        duration: 40,
      });

      ballTl.to(ball, {
        scale: scaleVal * 4.5,
        top: '50rem',
        rotate: '270deg',
        duration: 60,
      }, '>');

      ballTl.to('.c-fast-txt-wrapper.cc-one', {
        opacity: 0,
        duration: 30,
      }, '<');

      ballTl.to('.c-yellow-circle-bg', {
        opacity: 0,
        duration: 30,
      }, '<');

      ballTl.to('.c-bg-wrapper', {
        backgroundColor: '#A1DDC9'
      });

      ballTl.to(ball, {
        opacity: 0,
      });

      ballTl.to(".c-fast-cards-wrapper", {
        opacity: 1,
      });

      ballTl.fromTo(".cc-split-chars", {
        scale: 0,
        opacity: 0
      }, {
        scale: 1,
        duration: 6,
        opacity: 1,
      });

      ballTl.fromTo(".swiper", {
        scale: 0,
        opacity: 0
      }, {
        scale: 1,
        duration: 40,
        opacity: 1,
      });

      const swiper = new Swiper(".swiper", {
        effect: "cards",
        grabCursor: true,
        keyboard: true,
      });

      // Create a GSAP timeline for the swiper
      var timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "[yellow-ball-section]",
          start: "top top",
          end: "+=300",
          pin: true,
          scrub: 1,
          onUpdate: function (self) {
            // Calculate the progression
            const progressPerSlide = 1 / (swiper.slides.length - 1);
            const index = Math.floor(self.progress / progressPerSlide);

            // Change slide based on the progress
            if (index !== swiper.activeIndex) {
              swiper.slideTo(index);
            }
          },
        },
      });

      // Inject data testimonial

      document.addEventListener("DOMContentLoaded", function () {
        const appendOne = document.querySelector("[appendOne]");
        const testimonialOne = document.querySelector("[testimonialOne]");

        // Vérifiez s'il existe au moins trois éléments dans testimonialOne
        if (testimonialOne.children.length >= 2) {
          // Insérez l'élément avec l'attribut [appendOne] après le deuxième élément
          testimonialOne.insertBefore(appendOne, testimonialOne.children[2]);
        }
      });

      document.addEventListener("DOMContentLoaded", function () {
        const appendTwo = document.querySelector("[appendTwo]");
        const testimonialTwo = document.querySelector("[testimonialOne]");

        // Vérifiez s'il existe au moins trois éléments dans testimonialOne
        if (testimonialTwo.children.length >= 3) {
          // Insérez l'élément avec l'attribut [appendOne] après le deuxième élément
          testimonialTwo.insertBefore(appendTwo, testimonialTwo.children[1]);
        }
      });

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

export default homerp
