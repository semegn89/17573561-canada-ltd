// Form handling - prevent Barba from intercepting form submissions

(function() {
  'use strict'
  
  /**
   * Setup form handlers to prevent transition on submit
   */
  function setupForms() {
    const forms = document.querySelectorAll('form')
    
    forms.forEach((form) => {
      form.addEventListener('submit', (e) => {
        // Don't let Barba intercept form submissions
        // Forms should work normally
      })
    })
    
    // Prevent Barba from intercepting submit buttons
    const submitButtons = document.querySelectorAll('button[type="submit"], input[type="submit"]')
    submitButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        // Mark that this is a form submission
        button.dataset.formSubmit = 'true'
      })
    })
  }
  
  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupForms)
  } else {
    setupForms()
  }
  
  window.setupForms = setupForms
})()
