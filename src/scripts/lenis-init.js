import Lenis from 'lenis';

let lenis = null;
let rafId = null;

/**
 * Initialize Lenis smooth scroll
 */
export function initLenis() {
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    console.log('Lenis disabled: user prefers reduced motion');
    return;
  }

  // Create Lenis instance with configuration
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
  });

  // Expose globally for modal control
  window.lenis = lenis;

  // RAF loop to drive Lenis
  function raf(time) {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  }

  rafId = requestAnimationFrame(raf);
}

/**
 * Pause Lenis smooth scroll
 */
export function pauseLenis() {
  if (lenis) {
    lenis.stop();
  }
}

/**
 * Resume Lenis smooth scroll
 */
export function resumeLenis() {
  if (lenis) {
    lenis.start();
  }
}
