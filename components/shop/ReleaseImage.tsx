import Image from "next/image";
import { ImageProps } from "@/types/imageprops";

export default function ReleaseImage({ src="", alt, width, height }: ImageProps) {
    const safeSrc = src?`https://images.octan.online/${src}`:`/placeholder.png`;
    return (
        <div className={`overflow-hidden mb-2 max-w-[${width}px] relative`}>
            <div className="relative pt-[100%]"></div>
            <Image 
                src={safeSrc}
                alt={alt} 
                width={width} 
                height={height} 
                className={`w-full h-full absolute left-0 top-0 object-cover`}  
            />
        </div>
   )
}
