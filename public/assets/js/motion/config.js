// Motion configuration
// Get basePath from inline script if available
const basePath = window.MOTION_BASE_PATH || '';

// Create full config object
window.MOTION_CONFIG = {
  // Timing
  transition: {
    outDuration: 0.7, // Increased for visibility
    collapseDuration: 0.2, // 0.7-0.9s total
    inDuration: 0.8, // Increased for visibility
    overlayFadeOut: 0.3,
    maxDuration: 2.5, // timeout fallback
  },
  
  // Easing
  ease: {
    out: 'expo.in',
    in: 'expo.out',
    hover: 'power2.out',
    reveal: 'power2.out',
  },
  
  // Transform values - more dramatic for visibility
  out: {
    scale: { from: 1, to: 0.7 }, // More scale down
    y: { from: 0, to: -30 }, // More movement
    opacity: { from: 1, to: 0 },
    blur: 15, // More blur
  },
  
  in: {
    scale: { from: 1.2, to: 1 }, // More scale up
    y: { from: 30, to: 0 }, // More movement
    opacity: { from: 0, to: 1 },
  },
  
  overlay: {
    scale: { from: 0.02, to: 2.0, collapse: 0.001, expand: 1.5 }, // More dramatic overlay
    opacity: { from: 0, to: 1 }, // Fully opaque
  },
  
  // Hover animations
  hover: {
    button: {
      scale: { from: 1, to: 1.03 },
      duration: { in: 0.12, out: 0.16 },
    },
    card: {
      y: -6,
      duration: 0.2,
    },
  },
  
  // Scroll animations
  scroll: {
    start: 'top 85%',
    duration: 0.45,
    stagger: { min: 0.06, max: 0.10 },
  },
  
  // FAQ accordion
  accordion: {
    height: { duration: 0.28 },
    fade: { duration: 0.18 },
  },
  
  // Performance
  performance: {
    useBlur: true, // will check device capability
    prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  },
  
  // Base path from inline script
  basePath: basePath,
}

// Log initialization
console.log('[Motion] ✅ Config file executed');
console.log('[Motion] ✅ MOTION_CONFIG object:', window.MOTION_CONFIG);
console.log('[Motion] ✅ Performance config:', window.MOTION_CONFIG?.performance);
console.log('[Motion] ✅ Has transition:', !!window.MOTION_CONFIG?.transition);
console.log('[Motion] ✅ Has ease:', !!window.MOTION_CONFIG?.ease);
