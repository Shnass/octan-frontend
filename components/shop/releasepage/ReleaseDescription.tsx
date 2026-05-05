import AIDisclaimer from '@/components/general/AIDisclaimer'
import H2 from '@/components/general/H2'

export default function ReleaseDescription({
    text
}:{text:string}) {
  return (
    <>
        <H2>Description <AIDisclaimer /></H2>
        <div className="w-full" dangerouslySetInnerHTML={{__html: text}}></div>
      
    </>
  )
}
