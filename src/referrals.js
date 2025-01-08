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
        ScrollTrigger.refresh();  // Fixed typo (removed 'ggi')
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
          lastOpenedDropdown = null;
          navBg.style.display = "none";
        } else {
          dropdowns.forEach((otherDropdown) => {
            otherDropdown.classList.remove("open");
          });
          dropdown.classList.add("open");
          navBg.style.display = "block";
          lastOpenedDropdown = dropdown;
        }
      });
    });

    document.addEventListener("click", () => {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("open");
      });
      navBg.style.display = "none";
      lastOpenedDropdown = null;
    });

    navBg.addEventListener("click", (event) => {
      event.stopPropagation();
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
        start: "top 85%",  // Fixed 'bot' to 'top' for correct trigger
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

  // Animate Hero Image
  gsap.fromTo(".referrals-hero-img", {
    y: '-5rem',
    opacity: 0
  }, {
    y: '0rem',
    delay: 0.6,
    duration: 1.2,
    opacity: 1,
  });

  // Animate How it works
  const steps = gsap.utils.toArray(".c-referral-process__step");
  steps.forEach((step, index) => {
    gsap.fromTo(step,
      {
        y: '5rem',
        opacity: 0
      },
      {
        y: '0rem',
        duration: 0.8,
        opacity: 1,
        delay: index * 0.3,
        scrollTrigger: {
          trigger: step,
          start: "top 85%",
          end: "bottom top",
          toggleActions: "play none none reverse",
          once: false,
          markers: false,
        }
      }
    );
  });

  // Footer CTA
  const chartAnimations = [
    { selector: ".c-img-chart-footer.cc-one", y: "-11rem" },
    { selector: ".c-img-chart-footer.cc-two", y: "-20rem" },
    { selector: ".c-img-chart-footer.cc-three", y: "-7rem" },
    { selector: ".c-img-chart-footer.cc-four", y: "-2rem" },
    { selector: ".c-img-chart-footer.cc-five", y: "-6rem" },
    { selector: ".c-img-chart-footer.cc-six", y: "-11rem" }
  ];

  chartAnimations.forEach(item => {
    gsap.to(item.selector, {
      scrollTrigger: {
        trigger: ".c-chart-footer-wrapper",
        start: "top 100%",
        end: "bottom -10%",
        scrub: true,
      },
      y: item.y,
      ease: "quart.easeOut",
    });
  });

  // Responsive animations
  ScrollTrigger.matchMedia({
    "(min-width: 992px)": function () {
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
    },

    "(min-width: 768px) and (max-width: 991px)": function () {
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
    },

    "(max-width: 480px)": function () {
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
    },
  });
}

export default referrals;


