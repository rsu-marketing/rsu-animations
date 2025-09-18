//import gsap from "../dist/gsap.js";
import { ScrollTrigger } from "./gsap/all.js";
import { ScrollSmoother } from "./gsap/all.js";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function rp() {

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

  // LOGO GRID

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


  // FOOTER ARTICLE ANIMATION

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

  // footer animation

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

      // sticky section

      let st = ScrollTrigger.create({
        trigger: ".c-sticky-wrapper",
        pin: ".c-sticky-left-wrapper",
        start: "top center",
        end: "bottom 90%",
      });

      // Marquee on scroll

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

      // sticky section

      let st = ScrollTrigger.create({
        trigger: ".c-sticky-wrapper",
        pin: ".c-sticky-left-wrapper",
        start: "top center",
        end: "bottom 90%",
      });

      // Marquee on scroll

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

      // Marquee on scroll

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

export default rp