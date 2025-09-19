import { gsap, ScrollTrigger, ScrollSmoother } from "./gsap/all.js";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function careers() {

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

  // CURSOR

  const cursor = document.querySelector('.cursor');

  gsap.set(cursor, {
    xPercent: -50,
    yPercent: -50,
    display: "none",
    opacity: 0,
  });

  // Hover cursor
  const swiperArticles = document.querySelectorAll('.c-swiper-article-wrapper');

  swiperArticles.forEach((swiperArticle) => {
    swiperArticle.addEventListener('mouseenter', () => {
      gsap.to(cursor, {
        duration: 0.2,
        opacity: 1,
        display: "flex",
      });
    });

    swiperArticle.addEventListener('mouseleave', () => {
      gsap.to(cursor, {
        duration: 0.2,
        opacity: 0,
        display: "none",
      });
    });
  });

  document.addEventListener('pointermove', movecursor);

  function movecursor(e) {
    gsap.to(cursor, {
      duration: 0.3,
      x: e.clientX,
      y: e.clientY,
    });
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


  // Anim author wrapper

  gsap.fromTo(".c-author-wrapper.cc-one", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-author-wrapper.cc-one',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  // ANIM TEAM VALUE

  // Anim title

  gsap.fromTo(".c-title-l.cc-make", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-title-l.cc-make',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-text-l.cc-make", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-text-l.cc-make',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  // Anim line

  gsap.fromTo(".c-line-value.cc-one", {
    scaleX: 0,
    opacity: 0
  }, {
    scaleX: 1,
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-line-value.cc-one',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-line-value.cc-two", {
    scaleX: 0,
    opacity: 0
  }, {
    scaleX: 1,
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-line-value.cc-two',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-line-value.cc-three", {
    scaleX: 0,
    opacity: 0
  }, {
    scaleX: 1,
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-line-value.cc-three',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-line-value.cc-four", {
    scaleX: 0,
    opacity: 0
  }, {
    scaleX: 1,
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-line-value.cc-four',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-line-value.cc-five", {
    scaleX: 0,
    opacity: 0
  }, {
    scaleX: 1,
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-line-value.cc-five',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  // Anim value content

  gsap.fromTo(".cc-excellence", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.cc-excellence',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".cc-people", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.cc-people',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".cc-honesty", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.cc-honesty',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".cc-tenacity", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.cc-tenacity',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".cc-curiosity", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.cc-curiosity',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  // PHOTO TEAM ANIMATION

  window.addEventListener('load', function () {
    gsap.utils.toArray(".c-team-photo-container").forEach((element, index) => {
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

  // ANIM COMMENT ONE

  // Anim author wrapper

  gsap.fromTo(".c-author-wrapper.cc-two", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-author-wrapper.cc-two',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });


  // footer animation

  // footer cta 

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
    // small
    "(max-width: 480px)": function () {


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

export default careers