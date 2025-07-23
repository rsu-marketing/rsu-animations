// Example usage of the reusable yellow ball animation on other pages
import yellowBallAnimation from "./yellowBallAnimation.js";

function contractorResources() {
  yellowBallAnimation();

  // The yellow ball animation will only run if:
  // 1. [yellow-ball-section] element exists
  // 2. [yellow-ball] element exists
  // 3. Swiper cards will only animate if .swiper element exists
  // 4. Split chars will only animate if .cc-split-chars element exists
  // 5. Fast cards wrapper will only animate if .c-fast-cards-wrapper element exists
}

export default contractorResources; 