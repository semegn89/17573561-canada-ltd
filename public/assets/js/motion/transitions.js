// Barba.js transitions with singularity effect

(function() {
  'use strict'
  
  if (!window.barba || !window.gsap) {
    console.warn('[Motion] Barba.js or GSAP not loaded')
    return
  }
  
  const Singularity = window.Singularity
  if (!Singularity) {
    console.error('[Motion] Singularity not loaded')
    return
  }
  
  let currentClickEvent = null
  let currentSourceElement = null
  
  /**
   * Setup click tracking for singularity point
   */
  function setupClickTracking() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href]')
      if (!link) return
      
      // Check if link should be intercepted
      if (shouldInterceptLink(link)) {
        currentClickEvent = e
        
        // Find source element (card with data-singularity-source)
        const source = link.closest('[data-singularity-source]')
        currentSourceElement = source || null
      }
    }, true)
  }
  
  /**
   * Check if link should be intercepted by Barba
   */
  function shouldInterceptLink(link) {
    const config = window.MOTION_CONFIG
    if (!config || !config.performance) return false
    
    // Don't intercept external links
    if (link.target === '_blank' || link.rel?.includes('external')) return false
    
    // Don't intercept file links
    const href = link.getAttribute('href')
    if (href?.match(/\.(pdf|zip|doc|docx|xls|xlsx)$/i)) return false
    
    // Don't intercept mailto/tel
    if (href?.startsWith('mailto:') || href?.startsWith('tel:')) return false
    
    // Don't intercept anchors on same page
    if (href?.startsWith('#')) {
      const currentPath = window.location.pathname
      const targetPath = new URL(href, window.location.href).pathname
      if (targetPath === currentPath) return false
    }
    
    // Don't intercept if reduced motion
    if (config.performance.prefersReducedMotion) return false
    
    // Don't intercept form submissions
    if (link.closest('form') || link.type === 'submit') return false
    
    return true
  }
  
  /**
   * Transition OUT timeline
   */
  function createOutTimeline(container, overlay, circle, point) {
    const config = window.MOTION_CONFIG
    if (!config) return gsap.timeline()
    
    const tl = gsap.timeline()
    const useBlur = config.performance?.useBlur && Singularity.supportsBlur()
    
    // Phase 1: Scale down and fade (0-0.55s)
    tl.to(container, {
      scale: config.out?.scale?.to || 0.85,
      y: config.out?.y?.to || -20,
      opacity: config.out?.opacity?.to || 0,
      filter: useBlur ? `blur(${config.out?.blur || 12}px)` : 'none',
      duration: config.transition?.outDuration || 0.55,
      ease: config.ease?.out || 'expo.in',
    }, 0)
    
    // Overlay expand
    tl.fromTo(circle, {
      scale: config.overlay?.scale?.from || 0.05,
      opacity: config.overlay?.opacity?.from || 0,
    }, {
      scale: config.overlay?.scale?.to || 1.5,
      opacity: config.overlay?.opacity?.to || 0.95,
      duration: config.transition?.outDuration || 0.55,
      ease: config.ease?.out || 'expo.in',
    }, 0)
    
    // Phase 2: Collapse to singularity (0.55-0.70s)
    tl.to(circle, {
      scale: config.overlay?.scale?.collapse || 0.005,
      duration: config.transition?.collapseDuration || 0.15,
      ease: config.ease?.out || 'expo.in',
    })
    
    return tl
  }
  
  /**
   * Transition IN timeline
   */
  function createInTimeline(container, overlay, circle) {
    const config = window.MOTION_CONFIG
    if (!config) return gsap.timeline()
    
    const tl = gsap.timeline()
    
    // Set initial state
    gsap.set(container, {
      scale: config.in?.scale?.from || 1.12,
      y: config.in?.y?.from || 24,
      opacity: config.in?.opacity?.from || 0,
    })
    
    // Expand overlay first
    gsap.set(circle, {
      scale: config.overlay?.scale?.collapse || 0.005,
      opacity: 1,
    })
    
    // Animate container in
    tl.to(container, {
      scale: config.in?.scale?.to || 1,
      y: config.in?.y?.to || 0,
      opacity: config.in?.opacity?.to || 1,
      duration: config.transition?.inDuration || 0.65,
      ease: config.ease?.in || 'expo.out',
    }, 0)
    
    // Overlay fade out
    tl.to(circle, {
      scale: config.overlay?.scale?.expand || 1.3,
      opacity: 0,
      duration: config.transition?.overlayFadeOut || 0.25,
      ease: config.ease?.in || 'expo.out',
    }, 0.1)
    
    return tl
  }
  
  /**
   * Initialize Barba
   */
  function initTransitions() {
    const config = window.MOTION_CONFIG
    if (!config || !config.performance) {
      console.error('[Motion] Config not initialized')
      return
    }
    
    if (config.performance.prefersReducedMotion) {
      // Skip Barba for reduced motion - instant navigation
      console.log('[Motion] Reduced motion detected, skipping transitions')
      return
    }
    
    if (!window.barba) {
      console.error('[Motion] Barba.js not loaded')
      return
    }
    
    if (!window.gsap) {
      console.error('[Motion] GSAP not loaded')
      return
    }
    
    console.log('[Motion] Initializing transitions...')
    setupClickTracking()
    
    barba.init({
      transitions: [{
        name: 'singularity-transition',
        
        async leave(data) {
          console.log('[Motion] Transition OUT started')
          const container = data.current.container
          const point = Singularity.getSingularityPoint(container, currentClickEvent, currentSourceElement)
          console.log('[Motion] Singularity point:', point)
          const { overlay, circle } = Singularity.createOverlay(point)
          
          const tl = createOutTimeline(container, overlay, circle, point)
          
          // Cleanup click tracking
          currentClickEvent = null
          currentSourceElement = null
          
          // Ensure timeline completes and return promise
          return new Promise((resolve) => {
            tl.eventCallback('onComplete', () => {
              console.log('[Motion] Transition OUT complete, resolving...')
              resolve()
            })
            // Fallback timeout
            setTimeout(() => {
              console.warn('[Motion] Transition OUT timeout, forcing resolve')
              resolve()
            }, (window.MOTION_CONFIG?.transition?.outDuration || 0.7) * 1000 + 500)
          })
        },
        
        async enter(data) {
          console.log('[Motion] Transition IN started')
          const container = data.next.container
          const overlay = document.getElementById('singularity-overlay')
          const circle = overlay?.querySelector('.singularity')
          
          if (!overlay || !circle) {
            console.warn('[Motion] Overlay not found, using fallback')
            // Fallback: no overlay, just fade in
            const fallbackTl = gsap.fromTo(container, {
              opacity: 0,
            }, {
              opacity: 1,
              duration: 0.3,
            })
            return new Promise((resolve) => {
              fallbackTl.eventCallback('onComplete', resolve)
              setTimeout(resolve, 350)
            })
          }
          
          const tl = createInTimeline(container, overlay, circle)
          
          // Return promise that resolves when animation completes
          return new Promise((resolve) => {
            // Cleanup after animation
            tl.call(() => {
              console.log('[Motion] Transition complete')
              Singularity.removeOverlay()
              // Reinitialize scroll animations
              if (window.ScrollTrigger) {
                ScrollTrigger.getAll().forEach(t => t.kill())
              }
              if (window.initScrollAnimations) {
                window.initScrollAnimations(container)
              }
              if (window.updateActiveMenu) {
                window.updateActiveMenu(data.next.url.path)
              }
              resolve()
            })
            
            // Fallback timeout
            setTimeout(() => {
              console.warn('[Motion] Transition IN timeout, forcing resolve')
              Singularity.removeOverlay()
              resolve()
            }, (window.MOTION_CONFIG?.transition?.inDuration || 0.8) * 1000 + 500)
          })
          
          return tl
        },
        
        async once(data) {
          // Initial page load
          const container = data.next.container
          if (window.initScrollAnimations) {
            window.initScrollAnimations(container)
          }
          if (window.updateActiveMenu) {
            window.updateActiveMenu(data.next.url.path)
          }
        },
      }],
      
      views: [{
        namespace: 'default',
        beforeEnter() {
          // Cleanup old ScrollTriggers
          if (window.ScrollTrigger) {
            ScrollTrigger.getAll().forEach(t => t.kill())
          }
        },
      }],
      
      requestError: (trigger, action, url) => {
        // Fallback on error
        Singularity.removeOverlay()
        window.location.href = url.href
      },
    })
    
    // Timeout fallback
    let transitionStartTime = null
    barba.hooks.before(() => {
      transitionStartTime = Date.now()
    })
    
    barba.hooks.after(() => {
      const duration = Date.now() - transitionStartTime
      if (duration > config.transition.maxDuration * 1000) {
        Singularity.removeOverlay()
        console.warn('Transition timeout, forcing completion')
      }
    })
    
    // Note: enterError hook may not be available in all Barba versions
    if (barba.hooks && typeof barba.hooks.enterError === 'function') {
      barba.hooks.enterError(() => {
        Singularity.removeOverlay()
      })
    }
  }
  
  // Wait for libraries and config to load
  function waitForLibraries() {
    if (window.barba && window.gsap && window.MOTION_CONFIG && window.MOTION_CONFIG.performance) {
      console.log('[Motion] ✅ All dependencies ready, initializing transitions...')
      initTransitions()
      return true
    }
    return false
  }
  
  // Try to initialize immediately
  if (!waitForLibraries()) {
    // Wait for DOM and libraries
    const checkLibraries = setInterval(() => {
      if (waitForLibraries()) {
        clearInterval(checkLibraries)
      }
    }, 100)
    
    // Timeout after 5 seconds
    setTimeout(() => {
      clearInterval(checkLibraries)
      if (!window.barba || !window.gsap) {
        console.error('❌ Libraries failed to load after 5 seconds')
        console.log('Barba:', typeof window.barba)
        console.log('GSAP:', typeof window.gsap)
      }
    }, 5000)
  }
  
  // Export for manual initialization
  window.initTransitions = initTransitions
})()
