/**
 * .cc-refresh used to call ScrollTrigger.refresh() after 300ms on click.
 * That makes ScrollSmoother jump to the top during measure (FAQ accordion bug).
 * Dynamic height is handled by watchSmootherHeight in main.js instead.
 */
export function bindCcRefreshLinks() {
  document.querySelectorAll('.cc-refresh').forEach((link) => {
    link.addEventListener('click', () => {
      if (typeof window.__rsuOnCcRefresh === 'function') {
        window.__rsuOnCcRefresh();
      }
    });
  });
}
