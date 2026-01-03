'use client'

import Link, { LinkProps } from 'next/link'
import { useMotion } from '@/app/providers'
import { ReactNode } from 'react'

interface TransitionLinkProps extends Omit<LinkProps, 'href'> {
  href: string
  children: ReactNode
  className?: string
  anchorSelector?: string
}

export default function TransitionLink({
  href,
  children,
  className,
  anchorSelector,
  ...props
}: TransitionLinkProps) {
  const { setClickPointFromEvent, setAnchorFromElement } = useMotion()

  const handleInteraction = (e: React.PointerEvent<HTMLAnchorElement> | React.MouseEvent<HTMLAnchorElement>) => {
    setClickPointFromEvent(e)

    if (anchorSelector) {
      const anchorEl = (e.currentTarget as HTMLElement).closest(anchorSelector) as HTMLElement | null
      setAnchorFromElement(anchorEl)
    } else {
      setAnchorFromElement(null)
    }
  }

  return (
    <Link
      href={href}
      className={className}
      onPointerDown={handleInteraction}
      onClick={handleInteraction}
      {...props}
    >
      {children}
    </Link>
  )
}


