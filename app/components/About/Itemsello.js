import Image from "next/image";

export default function Itemsello({ link, alt }) {
    return (
        <Image
            src={link}
            width={140}
            height={128}
            alt={alt}
            className="h-28 mx-auto"
            loading="lazy"
        />
    );
}