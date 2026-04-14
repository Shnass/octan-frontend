import React from 'react'

export default function HeaderNavi({children}:{children:React.ReactNode}) {
  return (
    <div className="flex fixed left-5 top-5 gap-2 bg-black rounded-3xl h-10 items-center pl-4 pr-5 z-20 shadow-lg/40 shadow-black">
      {children}
    </div>
  )
}
