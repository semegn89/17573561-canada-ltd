import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '17573561 Canada Ltd | Europe to Canada Freight Services',
  description: 'Professional freight and logistics services from Europe to Canada. Ocean, air, and road freight solutions for businesses.',
  keywords: 'freight, logistics, Europe to Canada, shipping, cargo, import, export',
  openGraph: {
    title: '17573561 Canada Ltd | Europe to Canada Freight',
    description: 'Professional freight and logistics services from Europe to Canada',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const basePath = process.env.NODE_ENV === 'production' ? '/17573561-canada-ltd' : ''
  
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        
        {/* Barba wrapper */}
        <div data-barba="wrapper">
          {/* Main container */}
          <div data-barba="container" data-barba-namespace="default">
            <Header />
            <main>{children}</main>
            <Footer />
            <CookieBanner />
          </div>
        </div>
        
        {/* Motion libraries - CDN */}
        <Script
          src="https://cdn.jsdelivr.net/npm/@barba/core@2.9.7/dist/barba.umd.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
        
        {/* Motion system - inline config and initialization */}
        <Script id="motion-init" strategy="afterInteractive">
          {`
            (function() {
              const basePath = '${basePath}';
              
              // Don't create MOTION_CONFIG here - let config.js do it
              // Just store basePath temporarily
              window.MOTION_BASE_PATH = basePath;
              
              // Load motion scripts sequentially
              function loadScript(src, callback) {
                const script = document.createElement('script');
                script.src = src;
                script.onload = callback;
                script.onerror = function() {
                  console.error('Failed to load:', src);
                };
                document.head.appendChild(script);
              }
              
              // Wait for libraries, then load motion system
              function initMotion() {
                if (!window.barba || !window.gsap) {
                  setTimeout(initMotion, 100);
                  return;
                }
                
                console.log('[Motion] Libraries loaded, initializing...');
                
                // Load motion scripts - config MUST load first and complete
                const scripts = [
                  basePath + '/assets/js/motion/config.js',
                  basePath + '/assets/js/motion/singularity.js',
                  basePath + '/assets/js/motion/menu.js',
                  basePath + '/assets/js/motion/forms.js',
                  basePath + '/assets/js/motion/scroll.js',
                  basePath + '/assets/js/motion/transitions.js',
                  basePath + '/assets/js/main.js'
                ];
                
                let index = 0;
                function loadNext() {
                  if (index >= scripts.length) {
                    // All scripts loaded, wait for config and initialize
                    function waitForConfig() {
                      if (!window.MOTION_CONFIG || !window.MOTION_CONFIG.performance) {
                        console.log('[Motion] Waiting for config...', window.MOTION_CONFIG);
                        setTimeout(waitForConfig, 100);
                        return;
                      }
                      console.log('[Motion] ✅ Config ready:', window.MOTION_CONFIG);
                      setTimeout(function() {
                        if (window.initTransitions) {
                          console.log('[Motion] ✅ All libraries ready, initializing transitions...');
                          window.initTransitions();
                        }
                      }, 200);
                    }
                    waitForConfig();
                    return;
                  }
                  loadScript(scripts[index], function() {
                    console.log('[Motion] ✅ Script loaded:', scripts[index]);
                    // Special handling for config.js - wait longer for it to execute
                    if (index === 0) {
                      // Wait for config to be fully initialized
                      let attempts = 0;
                      function checkConfig() {
                        attempts++;
                        const config = window.MOTION_CONFIG;
                        // Check for FULL config structure, not just performance
                        if (config && 
                            config.performance && 
                            config.transition && 
                            config.ease &&
                            config.out &&
                            config.in) {
                          console.log('[Motion] ✅ Config fully initialized after', attempts, 'attempts');
                          console.log('[Motion] Config structure verified:', {
                            performance: !!config.performance,
                            transition: !!config.transition,
                            ease: !!config.ease,
                            out: !!config.out,
                            in: !!config.in,
                          });
                          index++;
                          loadNext();
                        } else if (attempts < 50) {
                          if (attempts % 5 === 0 || attempts <= 3) {
                            console.log('[Motion] ⏳ Waiting for config... attempt', attempts);
                            if (config) {
                              console.log('[Motion] Current config keys:', Object.keys(config));
                              console.log('[Motion] Has performance:', !!config.performance);
                              console.log('[Motion] Has transition:', !!config.transition);
                            } else {
                              console.log('[Motion] Config is undefined');
                            }
                          }
                          setTimeout(checkConfig, 100);
                        } else {
                          console.error('[Motion] ❌ Config failed to initialize after 50 attempts');
                          console.error('[Motion] Final config:', config);
                          // Create fallback config if missing critical parts
                          if (!config || !config.performance || !config.transition) {
                            console.warn('[Motion] Creating fallback config');
                            window.MOTION_CONFIG = window.MOTION_CONFIG || {};
                            Object.assign(window.MOTION_CONFIG, {
                              performance: config?.performance || { prefersReducedMotion: false, useBlur: false },
                              transition: config?.transition || { outDuration: 0.55, inDuration: 0.65, collapseDuration: 0.15, overlayFadeOut: 0.25, maxDuration: 2.5 },
                              ease: config?.ease || { out: 'expo.in', in: 'expo.out', hover: 'power2.out', reveal: 'power2.out' },
                              out: config?.out || { scale: { from: 1, to: 0.85 }, y: { from: 0, to: -20 }, opacity: { from: 1, to: 0 }, blur: 12 },
                              in: config?.in || { scale: { from: 1.12, to: 1 }, y: { from: 24, to: 0 }, opacity: { from: 0, to: 1 } },
                              overlay: config?.overlay || { scale: { from: 0.05, to: 1.5, collapse: 0.005, expand: 1.3 }, opacity: { from: 0, to: 0.95 } },
                              basePath: basePath,
                            });
                            console.log('[Motion] Fallback config created');
                          }
                          index++;
                          loadNext();
                        }
                      }
                      // Start checking after delay to let script execute
                      setTimeout(checkConfig, 200);
                    } else {
                      index++;
                      loadNext();
                    }
                  });
                }
                loadNext();
              }
              
              // Start initialization
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initMotion);
              } else {
                initMotion();
              }
            })();
          `}
        </Script>
      </body>
    </html>
  )
}
