import { ScrollTrigger } from "./gsap/all.js";
import { SplitText } from "./gsap/all.js";

// Logo Grid Animation
export function logoGridAnimation() {
  const logoGrid = document.querySelector(".c-logo-grid");
  if (!logoGrid) return;

  // Initial animation
  gsap.fromTo(".c-logo-grid", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    delay: 1.5,
    duration: 0.8,
    opacity: 1,
  });

  // Scroll animations for each collection list wrapper
  const wrappers = ['.c-collection-list-wrapper.cc-one', '.c-collection-list-wrapper.cc-two', '.c-collection-list-wrapper.cc-three', '.c-collection-list-wrapper.cc-four', '.c-collection-list-wrapper.cc-five'];
  const animations = [
    { y: '-4rem' },
    { y: '2rem' },
    { y: '-2rem' },
    { y: '2rem' },
    { y: '-4rem' }
  ];

  wrappers.forEach((selector, index) => {
    const element = document.querySelector(selector);
    if (element) {
      gsap.to(element, {
        scrollTrigger: {
          trigger: ".c-logo-grid",
          start: "top 80%",
          end: "bottom -10%",
          scrub: true,
        },
        y: animations[index].y,
        ease: "quart.easeOut",
      });
    }
  });
}

// Testimonials Animation
export function testimonialsAnimation() {
  const testimonials = document.querySelectorAll(".c-testimonial-container");
  if (testimonials.length === 0) return;

  // Wrap in load event to ensure DOM is ready and handle dynamic content
  window.addEventListener('load', function () {
    testimonials.forEach((element, index) => {
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

    // Refresh ScrollTrigger after setting up animations
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  });
}

// CC-Split Text Animation
export function splitTextAnimation() {
  // Handle multiple cc-split variants found across different pages
  const splitSelectors = [
    '.cc-split',
    '.cc-split-one',
    '.cc-split-two'
  ];

  splitSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    function setupSplits() {
      elements.forEach(element => {
        // Reset if needed
        if (element.anim) {
          element.anim.progress(1).kill();
          element.split.revert();
        }

        element.split = new SplitText(element, {
          type: "lines,words,chars",
          linesClass: "split-line"
        });

        // Set up the animation with slight variation based on selector
        const isSimpleSplit = selector === '.cc-split';
        const animationConfig = isSimpleSplit ? {
          targets: element.split.words,
          duration: 0.5,
          opacity: 0,
          y: 5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: element,
            toggleActions: "play none none reverse",
            start: "top 80%",
          }
        } : {
          targets: element.split.words,
          opacity: 0.15,
          duration: 0.2,
          ease: 'none',
          stagger: 0.2,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom",
            scrub: true,
          }
        };

        element.anim = gsap.from(animationConfig.targets, {
          ...animationConfig
        });
      });
    }

    // Initialize and set up refresh listener
    setupSplits();
    ScrollTrigger.addEventListener("refresh", setupSplits);
  });
}

// Footer CTA Animation
export function footerCtaAnimation() {
  const ctaWrapper = document.querySelector(".c-cta-footer-wrapper");
  if (!ctaWrapper) return;

  ScrollTrigger.matchMedia({
    // large
    "(min-width: 992px)": function () {
      const elements = ['.c-img-cta-footer.cc-one', '.c-img-cta-footer.cc-two', '.c-img-cta-footer.cc-three'];
      const animations = [
        { scaleX: '300%', scaleY: '300%', x: "21rem", y: "0rem" },
        { scaleX: '900%', scaleY: '900%', x: "-20rem", y: "5rem" },
        { scaleX: '780%', scaleY: '780%', x: "-10rem", y: "5rem" }
      ];

      elements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
          gsap.to(element, {
            scrollTrigger: {
              trigger: ".c-cta-footer-wrapper",
              start: "top 100%",
              scrub: true,
            },
            scaleX: animations[index].scaleX,
            scaleY: animations[index].scaleY,
            x: animations[index].x,
            y: animations[index].y,
            ease: "quart.easeOut",
          });
        }
      });
    },
    // medium
    "(min-width: 768px) and (max-width: 991px)": function () {
      const elements = ['.c-img-cta-footer.cc-one', '.c-img-cta-footer.cc-two', '.c-img-cta-footer.cc-three'];
      const animations = [
        { scaleX: '400%', scaleY: '400%', x: "21rem", y: "0rem" },
        { scaleX: '600%', scaleY: '600%', x: "-10rem", y: "5rem" },
        { scaleX: '380%', scaleY: '380%', x: "-10rem", y: "5rem" }
      ];

      elements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
          gsap.to(element, {
            scrollTrigger: {
              trigger: ".c-cta-footer-wrapper",
              start: "top 100%",
              scrub: true,
            },
            scaleX: animations[index].scaleX,
            scaleY: animations[index].scaleY,
            x: animations[index].x,
            y: animations[index].y,
            ease: "quart.easeOut",
          });
        }
      });
    },
    // small
    "(max-width: 480px)": function () {
      const elements = ['.c-img-cta-footer.cc-one', '.c-img-cta-footer.cc-two', '.c-img-cta-footer.cc-three'];
      const animations = [
        { scaleX: '200%', scaleY: '200%', x: "10rem", y: "0rem" },
        { scaleX: '350%', scaleY: '350%', x: "-10rem", y: "5rem" },
        { scaleX: '280%', scaleY: '280%', x: "0rem", y: "5rem" }
      ];

      elements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
          gsap.to(element, {
            scrollTrigger: {
              trigger: ".c-cta-footer-wrapper",
              start: "top 100%",
              scrub: true,
            },
            scaleX: animations[index].scaleX,
            scaleY: animations[index].scaleY,
            x: animations[index].x,
            y: animations[index].y,
            ease: "quart.easeOut",
          });
        }
      });
    }
  });
}

// Initialize all shared animations
export function initSharedAnimations() {
  logoGridAnimation();
  testimonialsAnimation();
  footerCtaAnimation();
  splitTextAnimation();
}