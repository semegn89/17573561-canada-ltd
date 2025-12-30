// Scroll-triggered animations

(function() {
  'use strict'
  
  if (!window.gsap || !window.ScrollTrigger) {
    console.warn('GSAP or ScrollTrigger not loaded')
    return
  }
  
  gsap.registerPlugin(ScrollTrigger)
  
  const config = window.MOTION_CONFIG
  
  /**
   * Initialize scroll animations for a container
   */
  function initScrollAnimations(container) {
    const config = window.MOTION_CONFIG
    if (!config || !config.performance) return
    
    if (config.performance.prefersReducedMotion) {
      // Skip scroll animations for reduced motion
      return
    }
    
    // Reveal animations for sections
    const revealSections = container.querySelectorAll('[data-animate="reveal"]')
    
    revealSections.forEach((section) => {
      // Set initial state
      gsap.set(section, {
        y: 18,
        opacity: 0,
      })
      
      // Animate on scroll
      gsap.to(section, {
        y: 0,
        opacity: 1,
        duration: config.scroll.duration,
        ease: config.ease.reveal,
        scrollTrigger: {
          trigger: section,
          start: config.scroll.start,
          toggleActions: 'play none none none',
        },
      })
    })
    
    // Stagger animations for lists
    const lists = container.querySelectorAll('[data-animate="stagger"]')
    
    lists.forEach((list) => {
      const items = list.children
      if (items.length === 0) return
      
      // Set initial state
      gsap.set(items, {
        y: 18,
        opacity: 0,
      })
      
      // Animate with stagger
      gsap.to(items, {
        y: 0,
        opacity: 1,
        duration: config.scroll.duration,
        ease: config.ease.reveal,
        stagger: {
          amount: config.scroll.stagger.max,
          from: 'start',
        },
        scrollTrigger: {
          trigger: list,
          start: config.scroll.start,
          toggleActions: 'play none none none',
        },
      })
    })
  }
  
  /**
   * Initialize FAQ accordion animations
   */
  function initAccordion() {
    const config = window.MOTION_CONFIG
    if (!config || !config.performance) return
    
    if (config.performance.prefersReducedMotion) {
      // Use CSS for reduced motion
      return
    }
    
    const faqItems = document.querySelectorAll('[data-faq-item]')
    
    faqItems.forEach((item) => {
      const trigger = item.querySelector('[data-faq-trigger]')
      const content = item.querySelector('[data-faq-content]')
      
      if (!trigger || !content) return
      
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('open')
        
        if (isOpen) {
          // Close
          gsap.to(content, {
            height: 0,
            opacity: 0,
            duration: config.accordion.height.duration,
            ease: config.ease.reveal,
            onComplete: () => {
              item.classList.remove('open')
            },
          })
        } else {
          // Open
          item.classList.add('open')
          gsap.fromTo(content, {
            height: 0,
            opacity: 0,
          }, {
            height: 'auto',
            opacity: 1,
            duration: config.accordion.height.duration,
            ease: config.ease.reveal,
          })
        }
      })
    })
  }
  
  // Export functions
  window.initScrollAnimations = initScrollAnimations
  window.initAccordion = initAccordion
  
  // Auto-initialize on load - but wait for config
  function tryInit() {
    const config = window.MOTION_CONFIG
    if (!config || !config.performance) {
      setTimeout(tryInit, 100)
      return
    }
    
    const container = document.querySelector('[data-barba="container"]')
    if (container) {
      initScrollAnimations(container)
      initAccordion()
    }
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tryInit)
  } else {
    tryInit()
  }
})()
