// Motion configuration
// Merge with existing config if any (from inline script)
const basePath = window.MOTION_BASE_PATH || '';
const existingPrefersReducedMotion = window.MOTION_CONFIG?.prefersReducedMotion;

window.MOTION_CONFIG = {
  // Timing
  transition: {
    outDuration: 0.55,
    collapseDuration: 0.15, // 0.55-0.70s total
    inDuration: 0.65,
    overlayFadeOut: 0.25,
    maxDuration: 2.5, // timeout fallback
  },
  
  // Easing
  ease: {
    out: 'expo.in',
    in: 'expo.out',
    hover: 'power2.out',
    reveal: 'power2.out',
  },
  
  // Transform values
  out: {
    scale: { from: 1, to: 0.85 },
    y: { from: 0, to: -20 },
    opacity: { from: 1, to: 0 },
    blur: 12, // only if performance allows
  },
  
  in: {
    scale: { from: 1.12, to: 1 },
    y: { from: 24, to: 0 },
    opacity: { from: 0, to: 1 },
  },
  
  overlay: {
    scale: { from: 0.05, to: 1.5, collapse: 0.005, expand: 1.3 },
    opacity: { from: 0, to: 0.95 },
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
    prefersReducedMotion: existingPrefersReducedMotion !== undefined 
      ? existingPrefersReducedMotion 
      : window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  },
  
  // Base path from inline script
  basePath: basePath,
}

// Merge any existing properties
if (window.MOTION_CONFIG && typeof window.MOTION_CONFIG === 'object') {
  Object.assign(window.MOTION_CONFIG, {
    basePath: basePath,
    performance: {
      ...window.MOTION_CONFIG.performance,
      prefersReducedMotion: existingPrefersReducedMotion !== undefined 
        ? existingPrefersReducedMotion 
        : window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    }
  });
}

// Log initialization
console.log('[Motion] ✅ Config file executed');
console.log('[Motion] ✅ MOTION_CONFIG object:', window.MOTION_CONFIG);
console.log('[Motion] ✅ Performance config:', window.MOTION_CONFIG?.performance);
