"use client"
import { useState } from "react"

export default function AIDisclaimer() {
  const [shown, setShown] = useState<boolean>(false);
  function clickHandle(){
    setShown(prev => !prev)
  }

  const disclaimer = `We generated this text automatically—yeah, we know it sucks. We just needed a way to process 3,000 records at once.
If you’re a human, feel free to ignore this section. We’ll replace it with a proper, human-written description soon.
If you’re a search engine… well, go ahead and index away.`

  return (
    <span className="relative inline-block text-xs self-center">
        <span 
            onClick={()=>clickHandle()}
            className="inline-block align-middle text-center leading-4 h-5 w-5 rounded-4xl bg-blue-700 border-blue-950 border-2 text-white font-bold relative cursor-pointer -top-1"
        >?</span>

        {shown && 
        <span className="absolute bottom-full left-1/2 translate-x-[-50%] leading-[1.3] bg-blue-800 text-white w-86 p-3 mb-4 rounded-xl border-blue-950 box-border">
            {disclaimer}
            <span className="inline-block w-0 h-0 border-solid border-t-[5.2px] translate-x-[-50%] border-r-[3px] border-l-[3px] border-b-0 border-l-transparent border-r-transparent border-t-blue-800 border-b-transparent absolute top-full left-[50%]"></span>
        </span>
        }

    </span>
  )
}
