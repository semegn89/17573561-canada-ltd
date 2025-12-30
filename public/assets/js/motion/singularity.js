// Singularity point calculation and overlay management

window.Singularity = window.Singularity || {
  /**
   * Get singularity point (center of hero or viewport)
   */
  getSingularityPoint(container, clickEvent = null, sourceElement = null) {
    // Priority 1: Source element (card with data-singularity-source)
    if (sourceElement) {
      const rect = sourceElement.getBoundingClientRect()
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      }
    }
    
    // Priority 2: Hero element
    const hero = container.querySelector('[data-singularity="hero"]')
    if (hero) {
      const rect = hero.getBoundingClientRect()
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      }
    }
    
    // Priority 3: Click coordinates
    if (clickEvent) {
      return {
        x: clickEvent.clientX,
        y: clickEvent.clientY,
      }
    }
    
    // Priority 4: Viewport center
    return {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }
  },
  
  /**
   * Create singularity overlay element
   */
  createOverlay(point) {
    // Remove existing overlay if any
    const existing = document.getElementById('singularity-overlay')
    if (existing) {
      existing.remove()
    }
    
    const overlay = document.createElement('div')
    overlay.id = 'singularity-overlay'
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 9999;
      overflow: hidden;
    `
    
    const circle = document.createElement('div')
    circle.className = 'singularity'
    circle.style.cssText = `
      position: absolute;
      width: 120vmax;
      height: 120vmax;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      left: ${point.x}px;
      top: ${point.y}px;
      background: radial-gradient(
        closest-side,
        rgba(10, 20, 35, 0.22),
        rgba(10, 20, 35, 0.86)
      );
      will-change: transform, opacity;
    `
    
    overlay.appendChild(circle)
    document.body.appendChild(overlay)
    
    return { overlay, circle }
  },
  
  /**
   * Remove overlay
   */
  removeOverlay() {
    const overlay = document.getElementById('singularity-overlay')
    if (overlay) {
      overlay.remove()
    }
  },
  
  /**
   * Check if device supports blur (performance check)
   */
  supportsBlur() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
    const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4
    
    return !isMobile && !isLowEnd
  },
}
