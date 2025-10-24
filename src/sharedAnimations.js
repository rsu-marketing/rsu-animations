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
  const currentPage = window.location.pathname;

  console.log(`%c[TESTIMONIALS-DEBUG] 🟢 Shared testimonials animation initialized on page: ${currentPage}`, 'color: #4CAF50; font-weight: bold');
  console.log(`%c[TESTIMONIALS-DEBUG] 🔍 Found ${testimonials.length} testimonial containers in DOM`, 'color: #2196F3; font-weight: bold');

  if (testimonials.length === 0) {
    console.log(`%c[TESTIMONIALS-DEBUG] ⚠️  No testimonial containers found - skipping animation`, 'color: #FF9800; font-weight: bold');
    return;
  }

  // Log each testimonial element for debugging
  testimonials.forEach((element, index) => {
    console.log(`%c[TESTIMONIALS-DEBUG] 📍 Testimonial ${index + 1}:`, 'color: #607D8B', element);
  });

  // Check for potential page-specific animations that might conflict
  const hasPageSpecificAnimations = window.testimonialsPageAnimationInitialized || false;
  if (hasPageSpecificAnimations) {
    console.log(`%c[TESTIMONIALS-DEBUG] ⚠️  CONFLICT DETECTED: Page-specific animations also running!`, 'color: #F44336; font-weight: bold; background: #ffebee; padding: 2px;');
  }

  // Setup testimonials animation with responsive breakpoints
  console.log(`%c[TESTIMONIALS-DEBUG] 📱 Setting up ScrollTrigger.matchMedia for responsive breakpoints`, 'color: #9C27B0; font-weight: bold');

  const startTime = performance.now();

  ScrollTrigger.matchMedia({
    // large
    '(min-width: 992px)': function () {
      console.log(`%c[TESTIMONIALS-DEBUG] 📱 Media query match: LARGE (min-width: 992px)`, 'color: #4CAF50; font-weight: bold');
      console.log(`%c[TESTIMONIALS-DEBUG] 🎬 Animation config: opacity: 0→1, y: 6.25rem→0, duration: 0.8s, ease: power3.out`, 'color: #2196F3; font-weight: bold');

      testimonials.forEach((element, index) => {
        const animationConfig = {
          opacity: 0,
          y: '6.25rem',
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'restart none none reverse',
            onEnter: () => console.log(`%c[TESTIMONIALS-DEBUG] ▶️  Large breakpoint - Testimonial ${index + 1} animation started`, 'color: #4CAF50; font-weight: bold'),
            onLeave: () => console.log(`%c[TESTIMONIALS-DEBUG] ⏸️  Large breakpoint - Testimonial ${index + 1} animation reversed`, 'color: #FF9800; font-weight: bold'),
            onEnterBack: () => console.log(`%c[TESTIMONIALS-DEBUG] ⏮️  Large breakpoint - Testimonial ${index + 1} animation restarted`, 'color: #2196F3; font-weight: bold'),
            onLeaveBack: () => console.log(`%c[TESTIMONIALS-DEBUG] ⏭️  Large breakpoint - Testimonial ${index + 1} animation left backward`, 'color: #9C27B0; font-weight: bold'),
          },
        };

        console.log(`%c[TESTIMONIALS-DEBUG] 🎯 Large breakpoint - Creating animation for testimonial ${index + 1}`, 'color: #607D8B; font-weight: bold');

        gsap.from(element, animationConfig);
      });
    },
    // medium
    '(min-width: 768px) and (max-width: 991px)': function () {
      console.log(`%c[TESTIMONIALS-DEBUG] 📱 Media query match: MEDIUM (768px - 991px)`, 'color: #2196F3; font-weight: bold');
      console.log(`%c[TESTIMONIALS-DEBUG] 🎬 Animation config: opacity: 0→1, y: 5rem→0, duration: 0.7s, ease: power3.out`, 'color: #2196F3; font-weight: bold');

      testimonials.forEach((element, index) => {
        const animationConfig = {
          opacity: 0,
          y: '5rem',
          duration: 0.7,
          delay: index * 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'restart none none reverse',
            onEnter: () => console.log(`%c[TESTIMONIALS-DEBUG] ▶️  Medium breakpoint - Testimonial ${index + 1} animation started`, 'color: #4CAF50; font-weight: bold'),
            onLeave: () => console.log(`%c[TESTIMONIALS-DEBUG] ⏸️  Medium breakpoint - Testimonial ${index + 1} animation reversed`, 'color: #FF9800; font-weight: bold'),
            onEnterBack: () => console.log(`%c[TESTIMONIALS-DEBUG] ⏮️  Medium breakpoint - Testimonial ${index + 1} animation restarted`, 'color: #2196F3; font-weight: bold'),
            onLeaveBack: () => console.log(`%c[TESTIMONIALS-DEBUG] ⏭️  Medium breakpoint - Testimonial ${index + 1} animation left backward`, 'color: #9C27B0; font-weight: bold'),
          },
        };

        console.log(`%c[TESTIMONIALS-DEBUG] 🎯 Medium breakpoint - Creating animation for testimonial ${index + 1}`, 'color: #607D8B; font-weight: bold');

        gsap.from(element, animationConfig);
      });
    },
    // small
    '(max-width: 480px)': function () {
      console.log(`%c[TESTIMONIALS-DEBUG] 📱 Media query match: SMALL (max-width: 480px)`, 'color: #FF9800; font-weight: bold');
      console.log(`%c[TESTIMONIALS-DEBUG] 🎬 Animation config: opacity: 0→1, y: 4rem→0, duration: 0.6s, ease: power2.out`, 'color: #2196F3; font-weight: bold');

      testimonials.forEach((element, index) => {
        const animationConfig = {
          opacity: 0,
          y: '4rem',
          duration: 0.6,
          delay: index * 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 90%',
            toggleActions: 'restart none none reverse',
            onEnter: () => console.log(`%c[TESTIMONIALS-DEBUG] ▶️  Small breakpoint - Testimonial ${index + 1} animation started`, 'color: #4CAF50; font-weight: bold'),
            onLeave: () => console.log(`%c[TESTIMONIALS-DEBUG] ⏸️  Small breakpoint - Testimonial ${index + 1} animation reversed`, 'color: #FF9800; font-weight: bold'),
            onEnterBack: () => console.log(`%c[TESTIMONIALS-DEBUG] ⏮️  Small breakpoint - Testimonial ${index + 1} animation restarted`, 'color: #2196F3; font-weight: bold'),
            onLeaveBack: () => console.log(`%c[TESTIMONIALS-DEBUG] ⏭️  Small breakpoint - Testimonial ${index + 1} animation left backward`, 'color: #9C27B0; font-weight: bold'),
          },
        };

        console.log(`%c[TESTIMONIALS-DEBUG] 🎯 Small breakpoint - Creating animation for testimonial ${index + 1}`, 'color: #607D8B; font-weight: bold');

        gsap.from(element, animationConfig);
      });
    },
  });

  // Log completion and performance metrics
  const endTime = performance.now();
  const setupTime = endTime - startTime;

  console.log(`%c[TESTIMONIALS-DEBUG] ✅ Shared testimonials animation setup completed in ${setupTime.toFixed(2)}ms`, 'color: #4CAF50; font-weight: bold; background: #e8f5e8; padding: 2px;');
  console.log(`%c[TESTIMONIALS-DEBUG] 📊 Performance metrics - Setup: ${setupTime.toFixed(2)}ms, Elements processed: ${testimonials.length}`, 'color: #607D8B; font-weight: bold');
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

// Initialize all shared animations
export function initSharedAnimations() {
  logoGridAnimation();
  testimonialsAnimation();
  footerCtaAnimation();
  splitTextAnimation();
  stickyLeftWrapperAnimation();
  swiperAnimation();
}
