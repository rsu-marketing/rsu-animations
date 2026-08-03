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
  // After we sync height manually, suppress redundant ScrollTrigger.refresh() calls.
  // Full refresh zeros ScrollSmoother scroll.y during measure → visible jump to top.
  // Our setPositions sync already updates the scroll track for dynamic height.
  let suppressRefreshUntil = 0;

  // #region agent log
  window.__RSU_DEBUG_LOGS__ = window.__RSU_DEBUG_LOGS__ || [];
  const __dbg = (hypothesisId, location, message, data = {}) => {
    const smoother = ScrollSmoother.get();
    const payload = {
      sessionId: 'f7f040',
      runId: 'post-fix-3',
      hypothesisId,
      location,
      message,
      data: {
        ...data,
        winScrollY: window.scrollY,
        docScrollTop: document.documentElement.scrollTop,
        bodyScrollTop: document.body.scrollTop,
        smootherScrollTop: smoother ? smoother.scrollTop() : null,
        contentY: content ? gsap.getProperty(content, 'y') : null,
        bodyHeight: document.body.style.height,
        contentScrollHeight: content ? content.scrollHeight : null,
        suppressRemainingMs: Math.max(0, suppressRefreshUntil - Date.now()),
      },
      timestamp: Date.now(),
    };
    window.__RSU_DEBUG_LOGS__.push(payload);
    console.log('[RSU-DEBUG]', payload);
  };

  let __lastWinScrollY = window.scrollY;
  let __lastSmootherScroll = null;
  window.addEventListener(
    'scroll',
    () => {
      const smoother = ScrollSmoother.get();
      const cur = window.scrollY;
      const smo = smoother ? smoother.scrollTop() : null;
      const jumpedToTop = __lastWinScrollY > 80 && cur < 20;
      const smoJumped =
        __lastSmootherScroll != null && smo != null && __lastSmootherScroll > 80 && smo < 20;
      if (jumpedToTop || smoJumped) {
        __dbg('D', 'main.js:scroll-jump', 'Detected scroll jump toward top', {
          fromWin: __lastWinScrollY,
          toWin: cur,
          fromSmo: __lastSmootherScroll,
          toSmo: smo,
          jumpedToTop,
          smoJumped,
        });
      }
      __lastWinScrollY = cur;
      __lastSmootherScroll = smo;
    },
    { passive: true },
  );

  window.addEventListener(
    'focusin',
    (e) => {
      __dbg('B', 'main.js:focusin', 'focusin fired (ScrollSmoother may scrollTo target)', {
        targetTag: e.target && e.target.tagName,
        targetClass: e.target && e.target.className,
        inViewport: typeof ScrollTrigger !== 'undefined' ? ScrollTrigger.isInViewport(e.target) : null,
      });
    },
    true,
  );
  // #endregion

  const _origRefresh = ScrollTrigger.refresh;
  const patchedRefresh = function patchedRefresh() {
    const stack = new Error().stack || '';
    if (Date.now() < suppressRefreshUntil) {
      // #region agent log
      __dbg('G', 'main.js:ScrollTrigger.refresh', 'SUPPRESSED refresh during height sync', {
        stack,
      });
      console.warn('[RSU-DEBUG] SUPPRESSED ScrollTrigger.refresh\n', stack);
      // #endregion
      return;
    }
    // #region agent log
    __dbg('C', 'main.js:ScrollTrigger.refresh', 'ScrollTrigger.refresh() allowing', { stack });
    console.warn('[RSU-DEBUG] ScrollTrigger.refresh stack\n', stack);
    // #endregion
    return _origRefresh.apply(this, arguments);
  };
  ScrollTrigger.refresh = patchedRefresh;
  // ScrollSmoother.refresh may hold the original fn reference from registration time
  ScrollSmoother.refresh = patchedRefresh;

  // Safety net if a refresh does run (e.g. orientation change) — restore scroll, keep scrub.
  ScrollTrigger.addEventListener('refreshInit', () => {
    const smoother = ScrollSmoother.get();
    if (smoother) savedScroll = smoother.scrollTop();
    // #region agent log
    __dbg('C', 'main.js:refreshInit', 'refreshInit — saved scroll', { savedScroll });
    // #endregion
  });

  ScrollTrigger.addEventListener('refresh', () => {
    const smoother = ScrollSmoother.get();
    if (smoother && savedScroll != null) {
      smoother.scrollTop(savedScroll);
      // #region agent log
      __dbg('C', 'main.js:refresh', 'refresh — restored scroll (scrub intact)', {
        savedScroll,
        afterRestore: smoother.scrollTop(),
      });
      // #endregion
      savedScroll = null;
    } else {
      // #region agent log
      __dbg('C', 'main.js:refresh', 'refresh completed (no restore)', { savedScroll });
      // #endregion
    }
  });

  const observer = new ResizeObserver(() => {
    const newHeight = content.scrollHeight;
    if (newHeight === lastHeight) return;

    const prevHeight = lastHeight;
    lastHeight = newHeight;

    const smoother = ScrollSmoother.get();
    if (!smoother) return;

    const st = smoother.scrollTrigger;
    const newEnd = newHeight - window.innerHeight;

    // #region agent log
    __dbg('A', 'main.js:resize-before', 'Height change — syncing without full refresh', {
      prevHeight,
      newHeight,
      newEnd,
      scrollBefore: smoother.scrollTop(),
    });
    // #endregion

    // Dynamic-height sync (lazy images, FAQ, injected DOM) without ScrollTrigger.refresh().
    document.body.style.height = newHeight + 'px';
    if (st.animation && st.animation._pt) {
      st.animation._pt.s = 0;
      st.animation._pt.c = -newEnd;
    }
    st.setPositions(0, newEnd);
    st.update(true);

    // Block redundant refreshes that would flash the page to top (accordion/Webflow observers).
    suppressRefreshUntil = Date.now() + 500;

    // #region agent log
    __dbg('A', 'main.js:resize-after', 'After height sync; refresh suppressed 500ms', {
      scrollAfter: smoother.scrollTop(),
      progressAfter: st.progress,
      stEnd: st.end,
      suppressRefreshUntil,
    });
    // #endregion
  });

  console.log('Observing smoother content height changes...');
  observer.observe(content);

  // #region agent log
  __dbg('E', 'main.js:watch-init', 'watchSmootherHeight initialized', { lastHeight });
  // #endregion
}

watchSmootherHeight();
