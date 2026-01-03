'use client'

import TransitionLink from './TransitionLink'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/europe-to-canada', label: 'Europe→Canada' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          <TransitionLink href="/" className="flex items-center">
            <div className="text-2xl font-bold text-primary-600">
              17573561 Canada Ltd
            </div>
          </TransitionLink>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <TransitionLink
                  key={link.href}
                  href={link.href}
                  className="relative text-gray-700 hover:text-primary-600 transition-colors"
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
                      layoutId="navbar-indicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </TransitionLink>
              )
            })}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <TransitionLink href="/request-a-quote" className="btn-primary">
                Request a Quote
              </TransitionLink>
            </motion.div>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-4">
            {navLinks.map((link) => (
              <TransitionLink
                key={link.href}
                href={link.href}
                className="block text-gray-700 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </TransitionLink>
            ))}
            <TransitionLink
              href="/request-a-quote"
              className="block btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Request a Quote
            </TransitionLink>
          </div>
        )}
      </nav>
    </header>
  )
}
