import React from 'react'

export default function HeaderAsideControls({children}:{children:React.ReactNode}) {
  return (
    <nav className="fixed right-5 top-5 flex gap-1 z-20">
      {children}
    </nav>
  )
}
