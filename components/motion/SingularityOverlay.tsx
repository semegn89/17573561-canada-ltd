'use client'

import { motion, useMotionValue, animate } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { useMotion } from '@/app/providers'
import { usePathname } from 'next/navigation'

export default function SingularityOverlay() {
  const pathname = usePathname()
  const { reducedMotion, getSingularityPoint } = useMotion()
  const [point, setPoint] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const scale = useMotionValue(0.1)
  const prevPathname = useRef(pathname)

  useEffect(() => {
    if (reducedMotion) return
    if (pathname === prevPathname.current) return

    const timeoutId = setTimeout(() => {
      const p = getSingularityPoint()
      setPoint(p)
      setIsVisible(true)
      scale.set(0.1)

      const expand = animate(scale, 1.2, { duration: 0.55, ease: [0.16, 1, 0.3, 1] })
      expand.then(() => {
        const collapse = animate(scale, 0.01, { duration: 0.18, ease: [0.42, 0, 1, 1] })
        collapse.then(() => {
          setTimeout(() => {
            setIsVisible(false)
            prevPathname.current = pathname
          }, 300)
        })
      })
    }, 0)

    return () => clearTimeout(timeoutId)
  }, [pathname, reducedMotion, getSingularityPoint, scale])

  if (reducedMotion || !isVisible) {
    return null
  }

  const size = typeof window !== 'undefined' ? Math.max(window.innerWidth, window.innerHeight) * 2 : 4000

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{
        backgroundColor: 'rgb(249, 250, 251)',
      }}
    >
      <div
        className="absolute"
        style={{
          left: `${point.x}px`,
          top: `${point.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <motion.div
          className="rounded-full"
          style={{
            scale,
            width: size,
            height: size,
            background: 'radial-gradient(circle, rgba(15, 23, 42, 0.98) 0%, rgba(15, 23, 42, 0.95) 100%)',
          }}
        />
      </div>
    </div>
  )
}
