import { ScrollTrigger } from "./gsap/all.js";

gsap.registerPlugin(ScrollTrigger);

function yellowBallAnimation() {
  ScrollTrigger.matchMedia({
    // large
    "(min-width: 992px)": function () {
      // Anim fast yellow circle
      const ball = document.querySelector('[yellow-ball]');
      
      // Only proceed if ball element exists
      if (ball) {
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

        // Check if swiper elements exist before animating them
        const swiperElement = document.querySelector(".swiper");
        const fastCardsWrapper = document.querySelector(".c-fast-cards-wrapper");
        const splitChars = document.querySelector(".cc-split-chars");

        if (fastCardsWrapper) {
          ballTl.to(".c-fast-cards-wrapper", {
            opacity: 1,
          });
        }

        if (splitChars) {
          ballTl.fromTo(".cc-split-chars", {
            scale: 0,
            opacity: 0
          }, {
            scale: 1,
            duration: 6,
            opacity: 1,
          });
        }

        if (swiperElement) {
          ballTl.fromTo(".swiper", {
            scale: 0,
            opacity: 0
          }, {
            scale: 1,
            duration: 6,
            opacity: 1,
          });

          // Initialize swiper only if element exists
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
        }
      }
    },
    
    // medium
    "(min-width: 768px) and (max-width: 991px)": function () {
      // Anim fast yellow circle
      const ball = document.querySelector('[yellow-ball]');
      
      // Only proceed if ball element exists
      if (ball) {
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

        // Check if swiper elements exist before animating them
        const swiperElement = document.querySelector(".swiper");
        const fastCardsWrapper = document.querySelector(".c-fast-cards-wrapper");
        const splitChars = document.querySelector(".cc-split-chars");

        if (fastCardsWrapper) {
          ballTl.to(".c-fast-cards-wrapper", {
            opacity: 1,
          });
        }

        if (splitChars) {
          ballTl.fromTo(".cc-split-chars", {
            scale: 0,
            opacity: 0
          }, {
            scale: 1,
            duration: 6,
            opacity: 1,
          });
        }

        if (swiperElement) {
          ballTl.fromTo(".swiper", {
            scale: 0,
            opacity: 0
          }, {
            scale: 1,
            duration: 6,
            opacity: 1,
          });

          // Initialize swiper only if element exists
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
        }
      }
    },
    
    // small
    "(max-width: 480px)": function () {
      // Anim fast yellow circle
      const ball = document.querySelector('[yellow-ball]');
      
      // Only proceed if ball element exists
      if (ball) {
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
          backgroundColor: '#FFE985'
        });

        ballTl.to(ball, {
          opacity: 0,
        });

        // Check if swiper elements exist before animating them
        const swiperElement = document.querySelector(".swiper");
        const fastCardsWrapper = document.querySelector(".c-fast-cards-wrapper");
        const splitChars = document.querySelector(".cc-split-chars");

        if (fastCardsWrapper) {
          ballTl.to(".c-fast-cards-wrapper", {
            opacity: 1,
          });
        }

        if (splitChars) {
          ballTl.fromTo(".cc-split-chars", {
            scale: 0,
            opacity: 0
          }, {
            scale: 1,
            duration: 6,
            opacity: 1,
          });
        }

        if (swiperElement) {
          ballTl.fromTo(".swiper", {
            scale: 0,
            opacity: 0
          }, {
            scale: 1,
            duration: 40,
            opacity: 1,
          });

          // Initialize swiper only if element exists
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
        }
      }
    },
  });
}

export default yellowBallAnimation; 