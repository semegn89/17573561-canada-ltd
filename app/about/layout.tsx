import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | 17573561 Canada Ltd',
  description: 'Learn about 17573561 Canada Ltd - professional freight and logistics services from Europe to Canada.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

