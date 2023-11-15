import Image from "next/image";

let width_img = '150px';
let height_img = '190px';

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