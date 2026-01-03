import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Road Freight Services | EU Pickup & Transport',
  description: 'European road freight and pickup services. Integrated with ocean and air freight for complete door-to-door solutions.',
}

export default function RoadFreightLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

