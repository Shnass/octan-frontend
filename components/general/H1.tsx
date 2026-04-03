import { ReactNode } from 'react';

export default function H1({children}:{children:ReactNode}) {
  return (
    <h1 className="text-5xl font-extrabold mb-4">{children}</h1>
  )
}
