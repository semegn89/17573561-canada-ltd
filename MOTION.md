# Motion System Documentation

## Overview

The site now features motion-first transitions using Barba.js and GSAP, creating a smooth SPA-like experience while remaining a static site on GitHub Pages.

## Features

### 1. Singularity Transitions
- Pages collapse into a singularity point (center of hero, clicked element, or viewport)
- Smooth scale and fade animations
- Overlay with radial gradient
- Total duration: ~1.1-1.4s

### 2. Scroll Animations
- Sections reveal on scroll (start: "top 85%")
- Stagger animations for lists
- Respects `prefers-reduced-motion`

### 3. Hover Effects
- Buttons: scale 1 → 1.03
- Cards: lift y -6px
- Smooth transitions

### 4. FAQ Accordion
- GSAP-powered height animations
- Smooth open/close

## Data Attributes

### Required Structure
```html
<div data-barba="wrapper">
  <div data-barba="container" data-barba-namespace="default">
    <!-- Page content -->
  </div>
</div>
```

### Hero Sections
```html
<section data-singularity="hero">
  <!-- Hero content -->
</section>
```

### Scroll Reveal
```html
<section data-animate="reveal">
  <!-- Content -->
</section>

<div data-animate="stagger">
  <!-- List items -->
</div>
```

### Hover Effects
```html
<button data-hover="button">Button</button>
<div data-hover="card">Card</div>
```

### Source Elements (for singularity point)
```html
<a href="/link" data-singularity-source>
  <!-- Card or element -->
</a>
```

### FAQ Accordion
```html
<div data-faq-item>
  <h3 data-faq-trigger>Question</h3>
  <div data-faq-content>Answer</div>
</div>
```

## Excluded Links

Barba will NOT intercept:
- External links (`target="_blank"`, `rel="external"`)
- File downloads (`.pdf`, `.zip`, etc.)
- `mailto:` and `tel:` links
- Same-page anchors (`#`)
- Form submissions
- Links with `data-form-submit="true"`

## Performance

- Blur effects disabled on mobile/low-end devices
- All animations respect `prefers-reduced-motion`
- Timeout fallback (2.5s max transition time)
- ScrollTrigger cleanup on page transitions

## File Structure

```
public/assets/js/
├── motion/
│   ├── config.js          # Configuration
│   ├── singularity.js     # Singularity point calculation
│   ├── transitions.js     # Barba.js setup
│   ├── scroll.js          # ScrollTrigger animations
│   ├── forms.js           # Form handling
│   └── menu.js            # Menu state
└── main.js                # Entry point
```

## Configuration

Edit `public/assets/js/motion/config.js` to adjust:
- Transition timings
- Easing functions
- Transform values
- Hover effects
- Scroll trigger points

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers
- Reduced motion support

## Troubleshooting

### Transitions not working
1. Check browser console for errors
2. Verify Barba.js and GSAP are loaded
3. Ensure data-barba attributes are present
4. Check for JavaScript errors

### Forms not submitting
- Forms are excluded from Barba by default
- Check network tab for API calls
- Verify form action URLs

### Scroll animations not triggering
- Check ScrollTrigger is registered
- Verify `data-animate` attributes
- Check viewport intersection

## GitHub Pages

The site is configured for GitHub Pages with base path `/17573561-canada-ltd`. All asset paths are automatically adjusted.

