// Menu state management

(function() {
  'use strict'
  
  /**
   * Update active menu item based on current URL
   */
  function updateActiveMenu(path) {
    const menuLinks = document.querySelectorAll('nav a[href], header a[href]')
    const basePath = window.MOTION_CONFIG?.basePath || ''
    
    menuLinks.forEach((link) => {
      try {
        const linkPath = new URL(link.href).pathname
        const currentPath = path || window.location.pathname
        
        // Normalize paths (remove base path if present)
        const normalizedLink = linkPath.replace(basePath, '') || '/'
        const normalizedCurrent = currentPath.replace(basePath, '') || '/'
        
        if (normalizedLink === normalizedCurrent) {
          link.classList.add('active')
        } else {
          link.classList.remove('active')
        }
      } catch (e) {
        // Skip invalid URLs
      }
    })
  }
  
  // Export
  window.updateActiveMenu = updateActiveMenu
  
  // Initialize on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      updateActiveMenu(window.location.pathname)
    })
  } else {
    updateActiveMenu(window.location.pathname)
  }
})()
