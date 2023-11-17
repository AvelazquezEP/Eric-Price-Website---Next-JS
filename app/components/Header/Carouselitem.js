import Image from "next/image";

export default function Carouselitem({ link, alt }) {
    return (
        // <>
        <Image
            src={link}
            width={150}
            height={190}
            alt={alt}
            // style={`width:auto; height:auto;`}
            className="w-full h-[190px]"
        />
        // </>
    );
}