import { ScrollTrigger } from './gsap/all.js';
import { SplitText } from './gsap/all.js';

// Logo Grid Animation
export function logoGridAnimation() {
  const logoGrid = document.querySelector('.c-logo-grid');
  if (!logoGrid) return;

  // Initial animation
  gsap.fromTo(
    '.c-logo-grid',
    {
      y: '5rem',
      opacity: 0,
    },
    {
      y: '0rem',
      delay: 1.5,
      duration: 0.8,
      opacity: 1,
    }
  );

  // Scroll animations for each collection list wrapper
  const wrappers = [
    '.c-collection-list-wrapper.cc-one',
    '.c-collection-list-wrapper.cc-two',
    '.c-collection-list-wrapper.cc-three',
    '.c-collection-list-wrapper.cc-four',
    '.c-collection-list-wrapper.cc-five',
  ];
  const animations = [{ y: '-4rem' }, { y: '2rem' }, { y: '-2rem' }, { y: '2rem' }, { y: '-4rem' }];

  wrappers.forEach((selector, index) => {
    const element = document.querySelector(selector);
    if (element) {
      gsap.to(element, {
        scrollTrigger: {
          trigger: '.c-logo-grid',
          start: 'top 80%',
          end: 'bottom -10%',
          scrub: true,
        },
        y: animations[index].y,
        ease: 'quart.easeOut',
      });
    }
  });
}

// Testimonials Animation
export function testimonialsAnimation() {
  const testimonials = document.querySelectorAll('.c-testimonial-container');

  if (testimonials.length === 0) return;

  ScrollTrigger.matchMedia({
    // large
    '(min-width: 992px)': function () {
      testimonials.forEach((element, index) => {
        gsap.from(element, {
          opacity: 0,
          y: '6.25rem',
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'restart none none reverse',
          },
        });
      });
    },
    // medium
    '(min-width: 768px) and (max-width: 991px)': function () {
      testimonials.forEach((element, index) => {
        gsap.from(element, {
          opacity: 0,
          y: '5rem',
          duration: 0.7,
          delay: index * 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'restart none none reverse',
          },
        });
      });
    },
    // small
    '(max-width: 480px)': function () {
      testimonials.forEach((element, index) => {
        gsap.from(element, {
          opacity: 0,
          y: '4rem',
          duration: 0.6,
          delay: index * 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 90%',
            toggleActions: 'restart none none reverse',
          },
        });
      });
    },
  });
}

// CC-Split Text Animation
export function splitTextAnimation() {
  // Handle multiple cc-split variants found across different pages
  const splitSelectors = ['.cc-split', '.cc-split-one', '.cc-split-two'];

  splitSelectors.forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    function setupSplits() {
      elements.forEach((element) => {
        // Reset if needed
        if (element.anim) {
          element.anim.progress(1).kill();
          element.split.revert();
        }

        element.split = new SplitText(element, {
          type: 'lines,words,chars',
          linesClass: 'split-line',
        });

        // Set up the animation with slight variation based on selector
        const isSimpleSplit = selector === '.cc-split';
        const animationConfig = isSimpleSplit
          ? {
              targets: element.split.words,
              duration: 0.5,
              opacity: 0,
              y: 5,
              stagger: 0.1,
              scrollTrigger: {
                trigger: element,
                toggleActions: 'restart none none reverse',
                start: 'top 80%',
              },
            }
          : {
              targets: element.split.words,
              opacity: 0.15,
              duration: 0.2,
              ease: 'none',
              stagger: 0.2,
              scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'bottom',
                scrub: true,
              },
            };

        element.anim = gsap.from(animationConfig.targets, {
          ...animationConfig,
        });
      });
    }

    // Initialize and set up refresh listener
    setupSplits();
    ScrollTrigger.addEventListener('refresh', setupSplits);
  });
}

// Footer CTA Animation
export function footerCtaAnimation() {
  const ctaWrapper = document.querySelector('.c-cta-footer-wrapper');
  if (!ctaWrapper) return;

  ScrollTrigger.matchMedia({
    // large
    '(min-width: 992px)': function () {
      const elements = ['.c-img-cta-footer.cc-one', '.c-img-cta-footer.cc-two', '.c-img-cta-footer.cc-three'];
      const animations = [
        { scaleX: '300%', scaleY: '300%', x: '21rem', y: '0rem' },
        { scaleX: '900%', scaleY: '900%', x: '-20rem', y: '5rem' },
        { scaleX: '780%', scaleY: '780%', x: '-10rem', y: '5rem' },
      ];

      elements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
          gsap.to(element, {
            scrollTrigger: {
              trigger: '.c-cta-footer-wrapper',
              start: 'top 100%',
              scrub: true,
            },
            scaleX: animations[index].scaleX,
            scaleY: animations[index].scaleY,
            x: animations[index].x,
            y: animations[index].y,
            ease: 'quart.easeOut',
          });
        }
      });
    },
    // medium
    '(min-width: 768px) and (max-width: 991px)': function () {
      const elements = ['.c-img-cta-footer.cc-one', '.c-img-cta-footer.cc-two', '.c-img-cta-footer.cc-three'];
      const animations = [
        { scaleX: '400%', scaleY: '400%', x: '21rem', y: '0rem' },
        { scaleX: '600%', scaleY: '600%', x: '-10rem', y: '5rem' },
        { scaleX: '380%', scaleY: '380%', x: '-10rem', y: '5rem' },
      ];

      elements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
          gsap.to(element, {
            scrollTrigger: {
              trigger: '.c-cta-footer-wrapper',
              start: 'top 100%',
              scrub: true,
            },
            scaleX: animations[index].scaleX,
            scaleY: animations[index].scaleY,
            x: animations[index].x,
            y: animations[index].y,
            ease: 'quart.easeOut',
          });
        }
      });
    },
    // small
    '(max-width: 480px)': function () {
      const elements = ['.c-img-cta-footer.cc-one', '.c-img-cta-footer.cc-two', '.c-img-cta-footer.cc-three'];
      const animations = [
        { scaleX: '200%', scaleY: '200%', x: '10rem', y: '0rem' },
        { scaleX: '350%', scaleY: '350%', x: '-10rem', y: '5rem' },
        { scaleX: '280%', scaleY: '280%', x: '0rem', y: '5rem' },
      ];

      elements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
          gsap.to(element, {
            scrollTrigger: {
              trigger: '.c-cta-footer-wrapper',
              start: 'top 100%',
              scrub: true,
            },
            scaleX: animations[index].scaleX,
            scaleY: animations[index].scaleY,
            x: animations[index].x,
            y: animations[index].y,
            ease: 'quart.easeOut',
          });
        }
      });
    },
  });
}

// Sticky Left Wrapper Animation
export function stickyLeftWrapperAnimation() {
  const stickyWrapper = document.querySelector('.c-sticky-wrapper');
  const stickyLeftWrapper = document.querySelector('.c-sticky-left-wrapper');

  if (!stickyWrapper || !stickyLeftWrapper) return;

  ScrollTrigger.matchMedia({
    // large
    '(min-width: 992px)': function () {
      ScrollTrigger.create({
        trigger: '.c-sticky-wrapper',
        pin: '.c-sticky-left-wrapper',
        start: 'top center',
        end: 'bottom 80%',
      });
    },
    // medium
    '(min-width: 768px) and (max-width: 991px)': function () {
      ScrollTrigger.create({
        trigger: '.c-sticky-wrapper',
        pin: '.c-sticky-left-wrapper',
        start: 'top center',
        end: 'bottom 80%',
      });
    },
    // small - no sticky animation on mobile
    '(max-width: 480px)': function () {
      // No sticky animation on mobile screens
    },
  });
}

// Swiper Animation
export function swiperAnimation() {
  // Support multiple swiper variants found across different pages
  const swiperConfigs = [
    {
      swiperSelector: '.swiper.cc-talent',
      wrapperSelector: '.c-swiper-free-wrapper.cc-talent',
    },
    {
      swiperSelector: '.swiper',
      wrapperSelector: '.c-swiper-free-wrapper',
    },
    {
      swiperSelector: '.swiper.cc-mob',
      wrapperSelector: '.c-swiper-free-wrapper.cc-mob',
    },
  ];

  swiperConfigs.forEach((config) => {
    const swiperElement = document.querySelector(config.swiperSelector);
    const wrapperElement = document.querySelector(config.wrapperSelector);

    if (!swiperElement || !wrapperElement) return;

    // Check if Swiper library is available
    if (typeof Swiper === 'undefined') {
      console.warn('Swiper library not loaded. Skipping swiper animation for:', config.swiperSelector);
      return;
    }

    // Initialize Swiper
    const swiper = new Swiper(config.swiperSelector, {
      effect: 'cards',
      grabCursor: true,
      keyboard: true,
    });

    // Determine start position based on swiper type
    const isMobileSwiper = config.swiperSelector === '.swiper.cc-mob';
    const startPosition = isMobileSwiper ? 'top 10%' : 'top top';

    // Create GSAP timeline for scroll-controlled swiper
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: config.wrapperSelector,
        start: startPosition,
        end: '+=100%',
        pin: true,
        scrub: 1,
        onUpdate: function (self) {
          // Safety check for swiper and slides
          if (!swiper || !swiper.slides || swiper.slides.length === 0) return;

          // Calculate the progression safely
          const progressPerSlide = 1 / Math.max(swiper.slides.length - 1, 1);
          const index = Math.min(Math.floor(self.progress / progressPerSlide), swiper.slides.length - 1);

          // Change slide based on the progress
          if (index !== swiper.activeIndex) {
            swiper.slideTo(index);
          }
        },
      },
    });
  });
}

// Talents List Swiper Animation
export function talentsListSwiper() {
  const talentsListElement = document.querySelector('.c-talents-slider');
  if (!talentsListElement) return;

  // Check if Swiper library is available
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper library not loaded. Skipping talents list swiper animation.');
    return;
  }

  // Add swiper-slide class to each talent item
  const talentItems = talentsListElement.querySelectorAll('.c-talent-item');
  talentItems.forEach((item) => {
    item.classList.add('swiper-slide');
  });

  // Initialize Swiper with responsive configuration
  const swiper = new Swiper('.c-talents-slider', {
    // Core configuration
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,

    autoHeight: false, // Disable auto-height
    roundLengths: true, // Prevent fractional pixel issues

    // Navigation
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // User interaction
    grabCursor: true,
    keyboard: true,

    // Autoplay (optional - can be disabled)
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },

    // Responsive breakpoints
    breakpoints: {
      // Mobile: 1 slide centered with partial preview
      0: {
        slidesPerView: 1.1,
        spaceBetween: 25,
        centeredSlides: true,
      },
      // Tablet: 2 slides with partial preview
      768: {
        slidesPerView: 2,
        spaceBetween: 25,
        centeredSlides: true,
      },
      // Desktop: 3 slides with partial preview
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
      },
    },

    // Effect and transitions
    effect: 'slide',
    speed: 600,

    // Accessibility
    a11y: {
      enabled: true,
      prevSlideMessage: 'Previous talent',
      nextSlideMessage: 'Next talent',
    },
  });

  console.log('Talents list swiper initialized successfully');
}

// Initialize all shared animations
export function initSharedAnimations() {
  logoGridAnimation();
  testimonialsAnimation();
  footerCtaAnimation();
  splitTextAnimation();
  stickyLeftWrapperAnimation();
  swiperAnimation();
  talentsListSwiper();
}
