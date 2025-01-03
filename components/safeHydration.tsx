'use client'

import { useEffect, useState, type ReactNode } from 'react'

interface SafeHydrationProps {
  children: ReactNode
  fallback?: ReactNode
}

export function SafeHydration({ children, fallback = null }: SafeHydrationProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Return fallback on server-side rendering
  if (!isClient) {
    return fallback
  }

  // Return children on client-side rendering
  return children
}

