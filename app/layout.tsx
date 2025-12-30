import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import GoogleAnalytics from '@/components/GoogleAnalytics'

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
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}

