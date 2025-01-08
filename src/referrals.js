//import gsap from "../dist/gsap.js";
import { ScrollTrigger, ScrollSmoother, SplitText } from "./gsap/all.js";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

function referrals() {
  // Smooth scroll
  document.addEventListener("DOMContentLoaded", () => {
    let smoother = ScrollSmoother.create({
      wrapper: ".smooth-wrapper",
      content: ".smooth-content",
      smooth: 1,
      smoothTouch: 0.1,
      effects: true,
    });

    ScrollTrigger.refresh();
  });

  // Refresh ScrollTrigger on .cc-refresh link clicks
  let links = document.querySelectorAll(".cc-refresh");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      setTimeout(() => {
        ggi
        ScrollTrigger.refresh();
      }, 300);
    });
  });

  // BG nav dropdown open
  document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".c-dropdown");
    const navBg = document.querySelector(".c-nav-bg-open");
    let lastOpenedDropdown = null;

    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("click", (event) => {
        event.stopPropagation();

        if (lastOpenedDropdown === dropdown) {
          // Close dropdown if clicking the same dropdown
          lastOpenedDropdown = null;
          navBg.style.display = "none";
        } else {
          // If another dropdown is clicked, close the others
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
        // Clicking outside all dropdowns closes them
        dropdowns.forEach((dropdown) => {
          dropdown.classList.remove("open");
        });
        navBg.style.display = "none";
        lastOpenedDropdown = null;
      }
    });

    navBg.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent click propagation to the outside
      navBg.style.display = "none";
      lastOpenedDropdown = null;
    });
  });

  // Animate hero text
  gsap.fromTo(
    ".c-text-container.cc-relative",
    { y: "5rem", opacity: 0 },
    {
      y: "0rem",
      duration: 0.8,
      delay: 0.3,
      opacity: 1,
      scrollTrigger: {
        trigger: ".c-text-container.cc-relative",
        start: "bot 85%",
        toggleActions: "play none none reverse",
      },
    }
  );

  gsap.fromTo(".c-button-wrapper.cc-hero", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    delay: 0.4,
    duration: 0.8,
    opacity: 1,
  });


//Animate Hero Image

gsap.fromTo(".referrals-hero-img", {
    y: '-5rem',
    opacity: 0
  }, {
    y: '0rem',
    delay: 0.6,
    duration: 1.2,
    opacity: 1,
  });
  
  

  //Animate How it works

gsap.fromTo(".c-referral-process__step", 
  {
    y: '5rem',
    opacity: 0
  }, 
  {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    stagger: 0.3,
  }
);

 

  // Footer CTA
  // Footer chart animation
  gsap.to(".c-img-chart-footer.cc-one", {
    scrollTrigger: {
      trigger: ".c-chart-footer-wrapper",
      start: "top 100%",
      end: "bottom -10%",
      scrub: true,
    },
    y: "-11rem",
    ease: "quart.easeOut",
  });

  gsap.to(".c-img-chart-footer.cc-two", {
    scrollTrigger: {
      trigger: ".c-chart-footer-wrapper",
      start: "top 100%",
      end: "bottom -10%",
      scrub: true,
    },
    y: "-20rem",
    ease: "quart.easeOut",
  });

  gsap.to(".c-img-chart-footer.cc-three", {
    scrollTrigger: {
      trigger: ".c-chart-footer-wrapper",
      start: "top 100%",
      end: "bottom -10%",
      scrub: true,
    },
    y: "-7rem",
    ease: "quart.easeOut",
  });

  gsap.to(".c-img-chart-footer.cc-four", {
    scrollTrigger: {
      trigger: ".c-chart-footer-wrapper",
      start: "top 100%",
      end: "bottom -10%",
      scrub: true,
    },
    y: "-2rem",
    ease: "quart.easeOut",
  });

  gsap.to(".c-img-chart-footer.cc-five", {
    scrollTrigger: {
      trigger: ".c-chart-footer-wrapper",
      start: "top 100%",
      end: "bottom -10%",
      scrub: true,
    },
    y: "-6rem",
    ease: "quart.easeOut",
  });

  gsap.to(".c-img-chart-footer.cc-six", {
    scrollTrigger: {
      trigger: ".c-chart-footer-wrapper",
      start: "top 100%",
      end: "bottom -10%",
      scrub: true,
    },
    y: "-11rem",
    ease: "quart.easeOut",
  });

  // Responsive animations
  ScrollTrigger.matchMedia({
    // Large screens
    "(min-width: 992px)": function () {
      // Growing IMG CTA Footer
      gsap.to(".c-img-cta-footer.cc-one", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
        },
        scaleX: "300%",
        scaleY: "300%",
        x: "21rem",
        ease: "quart.easeOut",
      });

      gsap.to(".c-img-cta-footer.cc-two", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
        },
        scaleX: "900%",
        scaleY: "900%",
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
        scaleX: "780%",
        scaleY: "780%",
        x: "-10rem",
        y: "5rem",
        ease: "quart.easeOut",
      });
    },

    // Medium screens
    "(min-width: 768px) and (max-width: 991px)": function () {
      // Growing IMG CTA Footer
      gsap.to(".c-img-cta-footer.cc-one", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
        },
        scaleX: "400%",
        scaleY: "400%",
        x: "21rem",
        ease: "quart.easeOut",
      });

      gsap.to(".c-img-cta-footer.cc-two", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
        },
        scaleX: "600%",
        scaleY: "600%",
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
        scaleX: "380%",
        scaleY: "380%",
        x: "-10rem",
        y: "5rem",
        ease: "quart.easeOut",
      });
    },

    // Small screens
    "(max-width: 480px)": function () {
      // Growing IMG CTA Footer
      gsap.to(".c-img-cta-footer.cc-one", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
        },
        scaleX: "200%",
        scaleY: "200%",
        x: "10rem",
        ease: "quart.easeOut",
      });

      gsap.to(".c-img-cta-footer.cc-two", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
        },
        scaleX: "350%",
        scaleY: "350%",
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
        scaleX: "280%",
        scaleY: "280%",
        x: "0rem",
        y: "5rem",
        ease: "quart.easeOut",
      });
    },
  });
}

export default referrals;

