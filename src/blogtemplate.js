//import gsap from "../dist/gsap.js";
import { ScrollTrigger } from './gsap/all.js';
import { ScrollSmoother } from './gsap/all.js';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function blogtemplate() {
  // // smooth scroll
  // document.addEventListener('DOMContentLoaded', () => {
  //   let smoother = ScrollSmoother.create({
  //     wrapper: '.smooth-wrapper',
  //     content: '.smooth-content',
  //     smooth: 1,
  //     smoothTouch: 0.1,
  //     effects: true,
  //     normalizeScroll: true,
  //   });

  //   ScrollTrigger.refresh();
  // });

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

  // TOC Sidebar Functionality
  document.addEventListener('DOMContentLoaded', () => {
    const tocContent = document.querySelector('.c-toc-link-content');
    const referenceLinkWrapper = document.querySelector('.c-toc-link-wrapper');

    if (!tocContent || !referenceLinkWrapper) {
      console.error('TOC: Required elements not found');
      return;
    }

    // Get the blog rich text content (assuming it has a specific class)
    let blogContent = document.querySelector('.rich-text.cc-blog');

    if (!blogContent) {
      // Try fallback selectors
      const fallbackSelectors = ['.w-richtext', '.blog-rich-text', '.c-template-blog-wrapper .rich-text', '.rich-text'];

      for (const selector of fallbackSelectors) {
        blogContent = document.querySelector(selector);
        if (blogContent) break;
      }

      if (!blogContent) {
        console.error('TOC: No blog content found');
        return;
      }
    }

    // Function to create slug from text
    function createSlug(text) {
      return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with dashes
        .replace(/-+/g, '-') // Replace multiple dashes with single dash
        .trim();
    }

    // Get all H2 headings, filtering out those in .tldr or .text-box containers
    const allHeadings = blogContent.querySelectorAll('h2');
    const headings = Array.from(allHeadings).filter((heading) => {
      // Check if any parent has .tldr or .text-box class
      let parent = heading.parentElement;
      while (parent && parent !== blogContent) {
        if (parent.classList.contains('tldr') || parent.classList.contains('text-box')) {
          return false; // Skip this heading
        }
        parent = parent.parentElement;
      }
      return true; // Include this heading
    });

    if (headings.length === 0) {
      console.error('TOC: No valid H2 headings found');
      return;
    }

    // Store original reference wrapper for cloning
    const originalWrapper = referenceLinkWrapper.cloneNode(true);

    // Clear existing TOC content
    tocContent.innerHTML = '';

    // Create TOC links for each heading
    headings.forEach((heading) => {
      const headingText = heading.textContent.trim();
      const slug = createSlug(headingText);

      // Add ID to heading for scroll target
      heading.id = slug;

      // Clone the reference wrapper
      const newWrapper = originalWrapper.cloneNode(true);
      const link = newWrapper.querySelector('.c-toc-link');

      if (link) {
        link.textContent = headingText;
        // Remove href to prevent URL hash changes
        link.removeAttribute('href');
        link.style.cursor = 'pointer';
        // Store slug for active state management
        link.setAttribute('data-slug', slug);

        // Add click handler for smooth scrolling
        link.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();

          // Use ScrollSmoother if available
          const smoother = ScrollSmoother.get();
          if (smoother) {
            // Scroll directly to the element without hash
            smoother.scrollTo(heading, true, 'top 10%');
          } else {
            // Fallback to native smooth scrolling
            heading.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }

          // Update active state
          updateActiveTocLink(slug);
        });
      }

      tocContent.appendChild(newWrapper);
    });

    // Function to update active TOC link based on scroll position
    function updateActiveTocLink(activeSlug) {
      const allLinks = tocContent.querySelectorAll('.c-toc-link');
      allLinks.forEach((link) => {
        const linkSlug = link.getAttribute('data-slug');
        if (linkSlug === activeSlug) {
          link.classList.add('is-active');
        } else {
          link.classList.remove('is-active');
        }
      });
    }

    // Set up scroll-triggered active state updates
    const tocLinks = tocContent.querySelectorAll('.c-toc-link');
    tocLinks.forEach((link, index) => {
      const targetSlug = link.getAttribute('data-slug');
      const targetHeading = document.getElementById(targetSlug);

      if (targetHeading) {
        ScrollTrigger.create({
          trigger: targetHeading,
          start: 'top 20%',
          end:
            index < headings.length - 1
              ? () => {
                  const nextHeading = headings[index + 1];
                  return nextHeading ? `top 20%` : 'bottom 20%';
                }
              : 'bottom 20%',
          onToggle: (self) => {
            if (self.isActive) {
              updateActiveTocLink(targetSlug);
            }
          },
        });
      }
    });

    // Refresh ScrollTrigger after TOC is created
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
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
