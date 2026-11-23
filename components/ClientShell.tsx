'use client'

import { useState } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { AskEicf } from './AskEicf'
import { SmartSearch } from './SmartSearch'
import { MotionEffects } from './Motion'

export function ClientShell({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      <MotionEffects />
      <Header onOpenSearch={() => setSearchOpen(true)} />
      <main id="main-content">{children}</main>
      <Footer />
      <AskEicf />
      <SmartSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
