import { ReactNode } from 'react';

export default function H1({children}:{children:ReactNode}) {
  return (
    <h1 className="text-3xl font-extrabold mb-2.5">{children}</h1>
  )
}
