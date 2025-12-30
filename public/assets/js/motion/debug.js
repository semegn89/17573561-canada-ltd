// Debug helper to check if motion system is loaded
(function() {
  'use strict'
  
  console.log('🔍 Motion System Debug:')
  console.log('Barba:', typeof window.barba !== 'undefined' ? '✅ Loaded' : '❌ Not loaded')
  console.log('GSAP:', typeof window.gsap !== 'undefined' ? '✅ Loaded' : '❌ Not loaded')
  console.log('ScrollTrigger:', typeof window.ScrollTrigger !== 'undefined' ? '✅ Loaded' : '❌ Not loaded')
  console.log('MOTION_CONFIG:', window.MOTION_CONFIG || '❌ Not set')
  console.log('Singularity:', typeof window.Singularity !== 'undefined' ? '✅ Loaded' : '❌ Not loaded')
  console.log('Prefers reduced motion:', window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  
  // Check for Barba wrapper
  const wrapper = document.querySelector('[data-barba="wrapper"]')
  const container = document.querySelector('[data-barba="container"]')
  console.log('Barba wrapper:', wrapper ? '✅ Found' : '❌ Not found')
  console.log('Barba container:', container ? '✅ Found' : '❌ Not found')
  
  // Check for hero
  const hero = document.querySelector('[data-singularity="hero"]')
  console.log('Hero element:', hero ? '✅ Found' : '❌ Not found')
  
  // Check if Barba is initialized
  if (window.barba) {
    console.log('Barba initialized:', window.barba.history ? '✅ Yes' : '❌ No')
  }
})()

