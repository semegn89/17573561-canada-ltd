'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode, useRef } from 'react'
import { useMotion } from '@/app/providers'

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const { reducedMotion } = useMotion()
  const prevPathname = useRef(pathname)

  if (reducedMotion) {
    return <>{children}</>
  }

  const variants = {
    initial: {
      scale: 1.06,
      opacity: 0,
      y: 14,
    },
    animate: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: {
      scale: 0.92,
      opacity: 0,
      y: -12,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }

  if (pathname !== prevPathname.current) {
    prevPathname.current = pathname
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ width: '100%' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
