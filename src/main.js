//import gsap from '../dist/gsap.js';

import { ScrollTrigger, ScrollSmoother } from './gsap/all.js';
import { initSharedAnimations } from './sharedAnimations.js';

// Register GSAP plugins globally
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Expose to window so inline Webflow scripts can access them
window.ScrollTrigger = ScrollTrigger;
window.ScrollSmoother = ScrollSmoother;

import home from './home.js';
import offline from './offline.js';
import ecommerce from './ecommerce.js';
import rp from './rp.js';
import partnerships from './partnerships.js';
import careers from './careers.js';
import contact from './contact.js';
import startups from './startups.js';
import investor from './investor.js';
import creative from './creative.js';
import about from './about.js';
import freelancing from './freelancing.js';
import agency from './agency.js';
import advisory from './advisory.js';
import recruiting from './recruiting.js';
import talent from './talent.js';
import other from './other.js';
import blog from './blog.js';
import blogtemplate from './blogtemplate.js';
import study from './study.js';
import studytemplate from './studytemplate.js';
import author from './author.js';
import webinars from './webinars.js';
import confirmation from './confirmation.js';
import webinartemplate from './webinartemplate.js';
import videotemplate from './videotemplate.js';
import referrals from './referrals.js';
import contractorResources from './contractor-resources.js';

let isHome = document.querySelector('body').classList.contains('body--home');
if (isHome) {
  home();
}

let isOffline = document.querySelector('body').classList.contains('body--offline');
if (isOffline) {
  offline();
}

let isPartnerships = document.querySelector('body').classList.contains('body--partnerships');
if (isPartnerships) {
  partnerships();
}

let isEcommerce = document.querySelector('body').classList.contains('body--ecommerce');
if (isEcommerce) {
  ecommerce();
}

let isRp = document.querySelector('body').classList.contains('body--rp');
if (isRp) {
  rp();
}

let isCareers = document.querySelector('body').classList.contains('body--careers');
if (isCareers) {
  careers();
}

let isStartups = document.querySelector('body').classList.contains('body--startups');
if (isStartups) {
  startups();
}

let isInvestor = document.querySelector('body').classList.contains('body--investor');
if (isInvestor) {
  investor();
}

let isOther = document.querySelector('body').classList.contains('body--other');
if (isOther) {
  other();
}

let isCreative = document.querySelector('body').classList.contains('body--creative');
if (isCreative) {
  creative();
}

let isAbout = document.querySelector('body').classList.contains('body--about');
if (isAbout) {
  about();
}

let isFreelancing = document.querySelector('body').classList.contains('body--freelancing');
if (isFreelancing) {
  freelancing();
}

let isAgency = document.querySelector('body').classList.contains('body--agency');
if (isAgency) {
  agency();
}

let isAdvisory = document.querySelector('body').classList.contains('body--advisory');
if (isAdvisory) {
  advisory();
}

let isRecruiting = document.querySelector('body').classList.contains('body--recruiting');
if (isRecruiting) {
  recruiting();
}

let isTalent = document.querySelector('body').classList.contains('body--talent');
if (isTalent) {
  talent();
}

let isBlog = document.querySelector('body').classList.contains('body--blog');
if (isBlog) {
  blog();
}

let isBlogtemplate = document.querySelector('body').classList.contains('body--blogtemplate');
if (isBlogtemplate) {
  blogtemplate();
}

let isStudy = document.querySelector('body').classList.contains('body--study');
if (isStudy) {
  study();
}

let isStudytemplate = document.querySelector('body').classList.contains('body--studytemplate');
if (isStudytemplate) {
  studytemplate();
}

let isContact = document.querySelector('body').classList.contains('body--contact');
if (isContact) {
  contact();
}

let isAuthor = document.querySelector('body').classList.contains('body--authors');
if (isAuthor) {
  author();
}

let isWebinars = document.querySelector('body').classList.contains('body--webinars');
if (isWebinars) {
  webinars();
}

let isWebinartemplate = document.querySelector('body').classList.contains('body--webinartemplate');
if (isWebinartemplate) {
  webinartemplate();
}

let isConfirmation = document.querySelector('body').classList.contains('body--confirmation');
if (isConfirmation) {
  confirmation();
}

let isVideotemplate = document.querySelector('body').classList.contains('body--videotemplate');
if (isVideotemplate) {
  videotemplate();
}

let isReferrals = document.querySelector('body').classList.contains('body--referrals');
if (isReferrals) {
  referrals();
}

if (document.querySelector('body').classList.contains('body--contractor')) {
  contractorResources();
}

// Initialize shared animations on all pages
initSharedAnimations();

// Keep ScrollSmoother in sync with dynamic content (lazy images, FAQ collapses, etc.)
function watchSmootherHeight() {
  const content = document.querySelector('.smooth-content');
  if (!content) return;

  let lastHeight = content.scrollHeight;
  let savedScroll = null;
  let suppressRefreshUntil = 0;
  let debounceTimer = null;

  const getVisualY = () => {
    const t = content.style.transform || '';
    const m3 = t.match(/matrix3d\(([^)]+)\)/);
    if (m3) return parseFloat(m3[1].split(',')[13]);
    const m2 = t.match(/matrix\(([^)]+)\)/);
    if (m2) return parseFloat(m2[1].split(',')[5]);
    return Number(gsap.getProperty(content, 'y')) || 0;
  };

  // #region agent log
  window.__RSU_DEBUG_LOGS__ = window.__RSU_DEBUG_LOGS__ || [];
  const __dbg = (hypothesisId, location, message, data = {}) => {
    const smoother = ScrollSmoother.get();
    const payload = {
      sessionId: 'f7f040',
      runId: 'post-fix-5',
      hypothesisId,
      location,
      message,
      data: {
        ...data,
        winScrollY: window.scrollY,
        smootherScrollTop: smoother ? smoother.scrollTop() : null,
        visualY: getVisualY(),
        gsapY: content ? gsap.getProperty(content, 'y') : null,
        bodyHeight: document.body.style.height,
        contentScrollHeight: content ? content.scrollHeight : null,
        suppressRemainingMs: Math.max(0, suppressRefreshUntil - Date.now()),
      },
      timestamp: Date.now(),
    };
    window.__RSU_DEBUG_LOGS__.push(payload);
    console.log('[RSU-DEBUG]', payload);
  };
  // #endregion

  const suppressRefresh = (ms, reason) => {
    suppressRefreshUntil = Math.max(suppressRefreshUntil, Date.now() + ms);
    // #region agent log
    __dbg('G', 'main.js:suppressRefresh', reason, { ms, suppressRefreshUntil });
    // #endregion
  };

  window.__rsuOnCcRefresh = () => suppressRefresh(1500, 'cc-refresh click — suppress 1500ms');
  document.addEventListener(
    'click',
    (e) => {
      if (e.target && e.target.closest && e.target.closest('.cc-refresh')) {
        suppressRefresh(1500, 'cc-refresh capture click — suppress 1500ms');
      }
    },
    true,
  );

  // #region agent log
  let __lastVisualY = getVisualY();
  let __lastSmootherScroll = null;
  const detectVisualJump = (source) => {
    const smoother = ScrollSmoother.get();
    const visualY = getVisualY();
    const smo = smoother ? smoother.scrollTop() : null;
    // visualY is negative when scrolled down; jump-to-top ≈ visualY near 0 while we were scrolled
    const wasScrolled = __lastVisualY < -80 || (__lastSmootherScroll != null && __lastSmootherScroll > 80);
    const nowAtTop = visualY > -20;
    if (wasScrolled && nowAtTop) {
      __dbg('H', 'main.js:visual-jump', 'Content transform jumped toward top', {
        source,
        fromVisualY: __lastVisualY,
        toVisualY: visualY,
        fromSmo: __lastSmootherScroll,
        toSmo: smo,
      });
    }
    __lastVisualY = visualY;
    __lastSmootherScroll = smo;
  };

  window.addEventListener(
    'scroll',
    () => detectVisualJump('scroll'),
    { passive: true },
  );

  window.addEventListener(
    'focusin',
    (e) => {
      __dbg('B', 'main.js:focusin', 'focusin fired', {
        targetTag: e.target && e.target.tagName,
        targetClass: e.target && e.target.className,
        inViewport: typeof ScrollTrigger !== 'undefined' ? ScrollTrigger.isInViewport(e.target) : null,
      });
      requestAnimationFrame(() => detectVisualJump('focusin-raf'));
    },
    true,
  );
  // #endregion

  const _origRefresh = ScrollTrigger.refresh;
  const patchedRefresh = function patchedRefresh() {
    const stack = new Error().stack || '';
    if (Date.now() < suppressRefreshUntil) {
      // #region agent log
      __dbg('G', 'main.js:ScrollTrigger.refresh', 'SUPPRESSED refresh', { stack });
      // #endregion
      return;
    }
    // #region agent log
    __dbg('C', 'main.js:ScrollTrigger.refresh', 'ALLOWING refresh', { stack });
    // #endregion
    return _origRefresh.apply(this, arguments);
  };
  ScrollTrigger.refresh = patchedRefresh;
  ScrollSmoother.refresh = patchedRefresh;

  ScrollTrigger.addEventListener('refreshInit', () => {
    const smoother = ScrollSmoother.get();
    if (smoother) savedScroll = smoother.scrollTop();
    // #region agent log
    __dbg('C', 'main.js:refreshInit', 'refreshInit', { savedScroll });
    // #endregion
  });

  ScrollTrigger.addEventListener('refresh', () => {
    const smoother = ScrollSmoother.get();
    if (smoother && savedScroll != null) {
      smoother.scrollTop(savedScroll);
      // #region agent log
      __dbg('C', 'main.js:refresh', 'restored after refresh', {
        savedScroll,
        afterRestore: smoother.scrollTop(),
        visualY: getVisualY(),
      });
      // #endregion
      savedScroll = null;
    }
  });

  // Block ScrollSmoother focus scrollTo during FAQ (matches "top then to FAQ item")
  const patchSmootherScrollTo = () => {
    const smoother = ScrollSmoother.get();
    if (!smoother || smoother.__rsuPatchedScrollTo) return;
    smoother.__rsuPatchedScrollTo = true;
    const origScrollTo = smoother.scrollTo.bind(smoother);
    smoother.scrollTo = function (target, smooth, position) {
      // #region agent log
      __dbg('I', 'main.js:scrollTo', 'ScrollSmoother.scrollTo called', {
        smooth,
        position,
        suppressed: Date.now() < suppressRefreshUntil,
        stack: new Error().stack,
      });
      // #endregion
      if (Date.now() < suppressRefreshUntil) return this;
      return origScrollTo(target, smooth, position);
    };
  };
  patchSmootherScrollTo();
  document.addEventListener('DOMContentLoaded', patchSmootherScrollTo);
  setTimeout(patchSmootherScrollTo, 0);
  setTimeout(patchSmootherScrollTo, 500);

  const syncHeight = (newHeight) => {
    const smoother = ScrollSmoother.get();
    if (!smoother) return;

    const st = smoother.scrollTrigger;
    if (!st) return;

    const newEnd = Math.max(0, newHeight - window.innerHeight);
    const scrollPos = smoother.scrollTop();
    const visualBefore = getVisualY();

    // #region agent log
    __dbg('H', 'main.js:sync-before', 'Debounced height sync start', {
      newHeight,
      newEnd,
      scrollPos,
      visualBefore,
    });
    // #endregion

    document.body.style.height = newHeight + 'px';
    if (st.animation && st.animation._pt) {
      st.animation._pt.s = 0;
      st.animation._pt.c = -newEnd;
    }

    // Pause scrub so setPositions/update cannot animate content through y=0
    const scrub = st.getTween && st.getTween();
    if (scrub) scrub.pause();

    st.setPositions(0, newEnd);

    // Pin visual scroll immediately (absolute pixel position, not progress)
    smoother.scrollTop(scrollPos);
    if (scrub) scrub.progress(1);

    suppressRefresh(1000, 'height sync — suppress refresh 1000ms');

    // #region agent log
    __dbg('H', 'main.js:sync-after', 'Debounced height sync done', {
      scrollAfter: smoother.scrollTop(),
      visualAfter: getVisualY(),
      progressAfter: st.progress,
      stEnd: st.end,
    });
    detectVisualJump('sync-after');
    // #endregion
  };

  const observer = new ResizeObserver(() => {
    const newHeight = content.scrollHeight;
    if (newHeight === lastHeight) return;
    lastHeight = newHeight;

    // #region agent log
    __dbg('A', 'main.js:resize-detected', 'Height changed — debounce sync', {
      newHeight,
      visualY: getVisualY(),
    });
    // #endregion

    // Wait for accordion animation to settle — syncing every frame caused visual jumps
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => syncHeight(content.scrollHeight), 150);
  });

  console.log('Observing smoother content height changes...');
  observer.observe(content);

  // #region agent log
  __dbg('E', 'main.js:watch-init', 'watchSmootherHeight initialized', { lastHeight });
  // #endregion
}

watchSmootherHeight();
