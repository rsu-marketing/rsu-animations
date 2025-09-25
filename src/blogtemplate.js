//import gsap from "../dist/gsap.js";
import { ScrollTrigger } from './gsap/all.js';
import { ScrollSmoother } from './gsap/all.js';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function blogtemplate() {
  // smooth scroll
  document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth >= 768) {
      let smoother = ScrollSmoother.create({
        wrapper: '.smooth-wrapper',
        content: '.smooth-content',
        smooth: 1,
        smoothTouch: 0.1,
        effects: true,
      });
    }

    // Sticky TOC sidebar
    const tocSidebar = document.querySelector('.c-tos-sidebar');
    if (window.innerWidth >= 768) {
      if (tocSidebar) {
        ScrollTrigger.create({
          trigger: tocSidebar,
          start: 'top 20px',
          endTrigger: tocSidebar.parentElement,
          end: () => `bottom ${tocSidebar.offsetHeight + 150}px`,
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });
      }
    }
    // Function to get all current TOC links dynamically
    function getTocLinks() {
      return document.querySelectorAll('.c-toc-link');
    }

    // Smooth scroll on click
    function attachClickHandlers() {
      getTocLinks().forEach((link) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href').replace('#', '');
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            smoother.scrollTo(targetEl, {
              duration: 1,
              offsetY: 20,
              onComplete: () => ScrollTrigger.refresh(true),
            });

            // Remove active from all and add to clicked
            getTocLinks().forEach((l) => l.classList.remove('is-active'));
            link.classList.add('is-active');
          }
        });
      });
    }

    attachClickHandlers();

    // Scroll-based highlighting
    const headings = document.querySelectorAll('h2[id], h3[id]');
    headings.forEach((heading) => {
      ScrollTrigger.create({
        trigger: heading,
        scroller: smoother?.content || window, // important for ScrollSmoother
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveLink(heading.id),
        onEnterBack: () => setActiveLink(heading.id),
      });
    });

    function setActiveLink(id) {
      getTocLinks().forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
      });
    }

    ScrollTrigger.refresh();
  });

  // refresh scrolltrigger
  let links = document.querySelectorAll('.cc-refresh');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);
    });
  });

  // BG nav dropdown open

  document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.c-dropdown');
    const navBg = document.querySelector('.c-nav-bg-open');
    let lastOpenedDropdown = null;

    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener('click', (event) => {
        event.stopPropagation();

        if (lastOpenedDropdown === dropdown) {
          // Close dropdown if click on same dropdown
          lastOpenedDropdown = null;
          navBg.style.display = 'none';
        } else {
          // If another dropdown is clicked, close the others and open the new one.
          dropdowns.forEach((otherDropdown) => {
            otherDropdown.classList.remove('open');
          });
          dropdown.classList.add('open');
          navBg.style.display = 'block';
          lastOpenedDropdown = dropdown;
        }
      });
    });

    document.addEventListener('click', (event) => {
      if (!event.target.classList.contains('c-dropdown')) {
        // If you click outside of all the dropdowns, close them all
        dropdowns.forEach((dropdown) => {
          dropdown.classList.remove('open');
        });
        navBg.style.display = 'none';
        lastOpenedDropdown = null; // Reinitialise the last open dropdown
      }
    });

    navBg.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent click propagation to the outside
      navBg.style.display = 'none';
      lastOpenedDropdown = null; // Reinitialise the last open dropdown
    });
  });

  // anim txt hero

  gsap.fromTo(
    '.c-template-blog-wrapper',
    {
      y: '5rem',
      opacity: 0,
    },
    {
      y: '0rem',
      duration: 0.8,
      delay: 0.3,
      opacity: 1,
      scrollTrigger: {
        trigger: '.c-template-blog-wrapper',
        start: 'bot 85%',
        toggleActions: 'play none none reverse',
      },
    }
  );

  // MARQUEE ON SCROLL

  gsap.to('.c-scroll-marquee-wrapper', {
    scrollTrigger: {
      trigger: '.c-scroll-marquee-wrapper',
      start: 'top 100%',
      scrub: true,
    },
    xPercent: -20,
    ease: 'quart.easeOut',
  });

  // FOOTER CHART ANIM

  gsap.to('.c-img-chart-footer.cc-one', {
    scrollTrigger: {
      trigger: '.c-chart-footer-wrapper',
      start: 'top 100%',
      end: 'bottom -10%',
      scrub: true,
    },
    y: '-11rem',
    ease: 'quart.easeOut',
  });

  gsap.to('.c-img-chart-footer.cc-two', {
    scrollTrigger: {
      trigger: '.c-chart-footer-wrapper',
      start: 'top 100%',
      end: 'bottom -10%',
      scrub: true,
    },
    y: '-20rem',
    ease: 'quart.easeOut',
  });

  gsap.to('.c-img-chart-footer.cc-three', {
    scrollTrigger: {
      trigger: '.c-chart-footer-wrapper',
      start: 'top 100%',
      end: 'bottom -10%',
      scrub: true,
    },
    y: '-7rem',
    ease: 'quart.easeOut',
  });

  gsap.to('.c-img-chart-footer.cc-four', {
    scrollTrigger: {
      trigger: '.c-chart-footer-wrapper',
      start: 'top 100%',
      end: 'bottom -10%',
      scrub: true,
    },
    y: '-2rem',
    ease: 'quart.easeOut',
  });

  gsap.to('.c-img-chart-footer.cc-five', {
    scrollTrigger: {
      trigger: '.c-chart-footer-wrapper',
      start: 'top 100%',
      end: 'bottom -10%',
      scrub: true,
    },
    y: '-6rem',
    ease: 'quart.easeOut',
  });

  gsap.to('.c-img-chart-footer.cc-six', {
    scrollTrigger: {
      trigger: '.c-chart-footer-wrapper',
      start: 'top 100%',
      end: 'bottom -10%',
      scrub: true,
    },
    y: '-11rem',
    ease: 'quart.easeOut',
  });

  ScrollTrigger.matchMedia({
    // large
    '(min-width: 992px)': function () {
      // Marquee on scroll

      gsap.to('.c-scroll-marquee-wrapper', {
        scrollTrigger: {
          trigger: '.c-scroll-marquee-wrapper',
          start: 'top 100%',
          scrub: true,
        },
        xPercent: -20,
        ease: 'quart.easeOut',
      });
    },
    // medium
    '(min-width: 767px) and (max-width: 991px)': function () {
      // Marquee on scroll

      gsap.to('.c-scroll-marquee-wrapper', {
        scrollTrigger: {
          trigger: '.c-scroll-marquee-wrapper',
          start: 'top 100%',
          scrub: true,
        },
        xPercent: -20,
        ease: 'quart.easeOut',
      });
    },
    // small
    '(max-width: 480px)': function () {
      // Marquee on scroll

      gsap.to('.c-scroll-marquee-wrapper', {
        scrollTrigger: {
          trigger: '.c-scroll-marquee-wrapper',
          start: 'top 100%',
          scrub: true,
        },
        xPercent: -80,
        ease: 'quart.easeOut',
      });
    },
  });
}

export default blogtemplate;
