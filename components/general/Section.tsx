import React from "react";

export default function Section({children}:{children:React.ReactNode}) {
  return (
    <section className="mb-15">
      {children}
    </section>
  )
}
