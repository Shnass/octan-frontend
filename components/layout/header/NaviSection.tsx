import React from "react"

export default function NaviSection({children}:{children:React.ReactNode}) {
  return (
    <ul className="flex gap-5 text-md relative font-roboto text-white ml-3">
      {children}
    </ul>
  )
}
