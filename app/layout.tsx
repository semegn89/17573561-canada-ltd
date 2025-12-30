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
        
        {/* Motion system - inline config */}
        <Script id="motion-config" strategy="afterInteractive">
          {`
            window.MOTION_CONFIG = window.MOTION_CONFIG || {};
            window.MOTION_CONFIG.basePath = '${basePath}';
            window.MOTION_CONFIG.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          `}
        </Script>
        
        {/* Load motion system scripts */}
        <Script
          src={`${basePath}/assets/js/motion/config.js`}
          strategy="afterInteractive"
        />
        <Script
          src={`${basePath}/assets/js/motion/singularity.js`}
          strategy="afterInteractive"
        />
        <Script
          src={`${basePath}/assets/js/motion/menu.js`}
          strategy="afterInteractive"
        />
        <Script
          src={`${basePath}/assets/js/motion/forms.js`}
          strategy="afterInteractive"
        />
        <Script
          src={`${basePath}/assets/js/motion/scroll.js`}
          strategy="afterInteractive"
        />
        <Script
          src={`${basePath}/assets/js/motion/transitions.js`}
          strategy="afterInteractive"
        />
        <Script
          src={`${basePath}/assets/js/main.js`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
