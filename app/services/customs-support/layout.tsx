import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customs Support Services | Import Clearance Coordination',
  description: 'Expert customs clearance coordination through licensed partners. We ensure smooth import processes and compliance.',
}

export default function CustomsSupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

