import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Warehousing Services | Storage & Distribution',
  description: 'Storage and distribution services in key locations. Cross-docking and consolidation available.',
}

export default function WarehousingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

