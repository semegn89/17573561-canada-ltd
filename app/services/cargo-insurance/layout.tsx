import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cargo Insurance Services | Comprehensive Coverage',
  description: 'Comprehensive cargo insurance options to protect your shipments throughout the transit process.',
}

export default function CargoInsuranceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

