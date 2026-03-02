import { ReactNode } from 'react'

export default function H2({children} : {children:ReactNode}) {
  return (
    <h2 className='text-2xl mb-2.5'>
      {children}
    </h2>
  )
}
