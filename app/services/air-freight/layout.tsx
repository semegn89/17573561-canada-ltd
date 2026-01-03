import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Air Freight Services | Fast Shipping from Europe to Canada',
  description: 'Fast and reliable air freight services from Europe to Canada. Express delivery options for time-sensitive shipments.',
}

export default function AirFreightLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

