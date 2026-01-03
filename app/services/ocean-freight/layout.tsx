import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ocean Freight Services | FCL & LCL Container Shipping',
  description: 'Professional ocean freight services from Europe to Canada. FCL and LCL container shipping solutions.',
}

export default function OceanFreightLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

