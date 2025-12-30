// Main entry point for motion system

(function() {
  'use strict'
  
  const config = window.MOTION_CONFIG || {}
  const gsap = window.gsap
  
  /**
   * Setup hover animations for buttons and cards
   */
  function setupHoverAnimations() {
    if (config.performance?.prefersReducedMotion || !gsap) return
    
    // Button hover
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, [data-hover="button"]')
    buttons.forEach((button) => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: config.hover?.button?.scale?.to || 1.03,
          duration: config.hover?.button?.duration?.in || 0.12,
          ease: config.ease?.hover || 'power2.out',
        })
      })
      
      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: config.hover?.button?.duration?.out || 0.16,
          ease: config.ease?.hover || 'power2.out',
        })
      })
    })
    
    // Card hover
    const cards = document.querySelectorAll('[data-hover="card"]')
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: config.hover?.card?.y || -6,
          duration: config.hover?.card?.duration || 0.2,
          ease: config.ease?.hover || 'power2.out',
        })
      })
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          duration: config.hover?.card?.duration || 0.2,
          ease: config.ease?.hover || 'power2.out',
        })
      })
    })
  }
  
  /**
   * Initialize motion system
   */
  function init() {
    // Setup forms
    if (window.setupForms) {
      window.setupForms()
    }
    
    // Initialize scroll animations for initial page
    const container = document.querySelector('[data-barba="container"]')
    if (container) {
      if (window.initScrollAnimations) {
        window.initScrollAnimations(container)
      }
      if (window.initAccordion) {
        window.initAccordion()
      }
    }
    
    // Update menu state
    if (window.updateActiveMenu) {
      window.updateActiveMenu(window.location.pathname)
    }
    
    // Setup hover animations
    setupHoverAnimations()
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
  
  // Re-initialize on Barba page transitions
  if (window.barba) {
    barba.hooks.after(() => {
      const container = document.querySelector('[data-barba="container"]')
      if (container) {
        if (window.initScrollAnimations) {
          window.initScrollAnimations(container)
        }
        if (window.initAccordion) {
          window.initAccordion()
        }
        setupHoverAnimations()
      }
    })
  }
})()
