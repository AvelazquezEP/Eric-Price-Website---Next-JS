import Image from "next/image";
import { Carouselitems } from "@/app/Data/Carouselitems";

export default function Carousel() {
    return (
        <div className="whitespace-nowrap flex flex-row overflow-x-scroll">
            {/* {Carouselitems.map(({ link, alt }) => (
                <Image
                    src={link}
                    width={150}
                    height={150}
                    alt={alt}
                    className="h-9"
                    loading="eager"
                />
            ))} */}
            
            {Carouselitems.map(({ link, alt }) => (
                <Image
                    src={link}
                />
            ))}
        </div>
    );
}