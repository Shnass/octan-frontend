import { ReactNode } from 'react'

export default function H3({children} : {children:ReactNode}) {
  return (
    <h3 className='text-1xl'>
      {children}
    </h3>
  )
}
