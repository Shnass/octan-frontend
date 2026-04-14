import React from 'react'

export default function InnerPageContainer({children}:{children:React.ReactNode}) {
  return (
    <div className="container max-w-7xl mx-auto px-4">
        <div className="min-h-screen font-sans dark:bg-black flex flex-col">
            {children}
        </div>
    </div>
  )
}
