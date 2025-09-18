//import gsap from "../dist/gsap.js";
import { ScrollTrigger } from "./gsap/all.js";
import { ScrollSmoother } from "./gsap/all.js";
import { SplitText } from "./gsap/all.js";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
function webinartemplate() {


    // hero

    gsap.fromTo(".c-info-webinars-wrapper", {
        y: '5rem',
        opacity: 0
    }, {
        y: '0rem',
        duration: 0.8,
        opacity: 1,
        delay: 0.3,
    });

    gsap.fromTo(".c-contact-form-wrapper", {
        y: '5rem',
        opacity: 0,
    }, {
        y: '0rem',
        duration: 0.8,
        opacity: 1,
        delay: 0.6,
    });

    // redirection code

    document.addEventListener("DOMContentLoaded", function () {
        let form = document.querySelector('.c-form-webinar');
        let videoPageUrl = document.querySelector('.c-hidden-url').textContent.trim();
        let tags = document.querySelectorAll('.c-hidden-tag');
        let hasUpcomingTag = Array.from(tags).some(tag => tag.textContent.trim().toLowerCase() === 'upcoming');
        let thankYouPageUrl = "https://www.rightsideup.com/registration-confirmation";

        // url path as unique ID
        let pagePath = window.location.pathname;

        // Check if url is already inside the storage
        if (!hasUpcomingTag) {
            let storedVideoUrl = localStorage.getItem('watchedVideo_' + pagePath);
            if (storedVideoUrl) {
                window.location.href = storedVideoUrl;
                return;
            }
        }

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let redirectUrl = hasUpcomingTag ? thankYouPageUrl : videoPageUrl;

            // store url video inside the localstorage
            if (!hasUpcomingTag) {
                localStorage.setItem('watchedVideo_' + pagePath, videoPageUrl);
            }

            setTimeout(function () {
                window.location.href = redirectUrl;
            }, 1000);
        });
    });
    // FOOTER CHART ANIM

    gsap.to(".c-img-chart-footer.cc-one", {
        scrollTrigger: {
            trigger: ".c-chart-footer-wrapper",
            start: "top 100%",
            end: "bottom -10%",
            scrub: true,
        },
        y: '-9rem',
        ease: "quart.easeOut",
    });

    gsap.to(".c-img-chart-footer.cc-two", {
        scrollTrigger: {
            trigger: ".c-chart-footer-wrapper",
            start: "top 100%",
            end: "bottom -10%",
            scrub: true,
        },
        y: '-13rem',
        ease: "quart.easeOut",
    });

    gsap.to(".c-img-chart-footer.cc-three", {
        scrollTrigger: {
            trigger: ".c-chart-footer-wrapper",
            start: "top 100%",
            end: "bottom -10%",
            scrub: true,
        },
        y: '-6rem',
        ease: "quart.easeOut",
    });

    gsap.to(".c-img-chart-footer.cc-four", {
        scrollTrigger: {
            trigger: ".c-chart-footer-wrapper",
            start: "top 100%",
            end: "bottom -10%",
            scrub: true,
        },
        y: '-3rem',
        ease: "quart.easeOut",
    });

    gsap.to(".c-img-chart-footer.cc-five", {
        scrollTrigger: {
            trigger: ".c-chart-footer-wrapper",
            start: "top 100%",
            end: "bottom -10%",
            scrub: true,
        },
        y: '-3rem',
        ease: "quart.easeOut",
    });

    gsap.to(".c-img-chart-footer.cc-six", {
        scrollTrigger: {
            trigger: ".c-chart-footer-wrapper",
            start: "top 100%",
            end: "bottom -10%",
            scrub: true,
        },
        y: '-3rem',
        ease: "quart.easeOut",
    });


}

export default webinartemplate