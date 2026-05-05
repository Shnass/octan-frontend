import React from "react"

export default function H0({children}:{children:React.ReactNode}) {
  return (
    <div  className="
        font-contrail 
        text-8xl
        otext-transparent 
        text-fg
        mb-3
        [-webkit-text-fill-color:transparent] 
        [-webkit-text-stroke:1px_black]
    ">{children}</div>
  )
}
