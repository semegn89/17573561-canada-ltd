import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Freight Services | Ocean, Air, Road & Customs',
  description: 'Comprehensive freight and logistics services: ocean freight, air freight, road freight, and customs support.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

