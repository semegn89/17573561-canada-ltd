'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'

interface SingularityPoint {
  x: number
  y: number
}

interface MotionContextValue {
  lastClickPoint: SingularityPoint | null
  anchorRect: DOMRect | null
  reducedMotion: boolean
  setClickPointFromEvent: (e: React.PointerEvent | React.MouseEvent) => void
  setAnchorFromElement: (el: HTMLElement | null) => void
  clearAnchor: () => void
  getSingularityPoint: () => SingularityPoint
}

const MotionContext = createContext<MotionContextValue | undefined>(undefined)

export function MotionProvider({ children }: { children: ReactNode }) {
  const [lastClickPoint, setLastClickPoint] = useState<SingularityPoint | null>(null)
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null)
  const prefersReducedMotion = useReducedMotion()
  const reducedMotion = prefersReducedMotion ?? false

  const setClickPointFromEvent = useCallback((e: React.PointerEvent | React.MouseEvent) => {
    setLastClickPoint({ x: e.clientX, y: e.clientY })
  }, [])

  const setAnchorFromElement = useCallback((el: HTMLElement | null) => {
    if (el) {
      setAnchorRect(el.getBoundingClientRect())
    } else {
      setAnchorRect(null)
    }
  }, [])

  const clearAnchor = useCallback(() => {
    setAnchorRect(null)
  }, [])

  const getSingularityPoint = useCallback((): SingularityPoint => {
    // Priority 1: anchorRect center
    if (anchorRect) {
      return {
        x: anchorRect.left + anchorRect.width / 2,
        y: anchorRect.top + anchorRect.height / 2,
      }
    }

    // Priority 2: data-singularity="hero" element
    const heroEl = document.querySelector('[data-singularity="hero"]') as HTMLElement
    if (heroEl) {
      const rect = heroEl.getBoundingClientRect()
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      }
    }

    // Priority 3: lastClickPoint
    if (lastClickPoint) {
      return lastClickPoint
    }

    // Priority 4: viewport center
    return {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }
  }, [anchorRect, lastClickPoint])

  return (
    <MotionContext.Provider
      value={{
        lastClickPoint,
        anchorRect,
        reducedMotion,
        setClickPointFromEvent,
        setAnchorFromElement,
        clearAnchor,
        getSingularityPoint,
      }}
    >
      {children}
    </MotionContext.Provider>
  )
}

export function useMotion() {
  const context = useContext(MotionContext)
  if (!context) {
    throw new Error('useMotion must be used within MotionProvider')
  }
  return context
}


