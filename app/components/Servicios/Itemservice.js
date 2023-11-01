import Link from "next/link";
import Image from "next/image";

export default function Itemservice({ href, image, service }) {
    return (
        <Link href={href} className="bg-white pt-4 rounded-sm shadow-sm">
            <div className="flex flex-col items-center">
                <Image
                    src={image}
                    width={60}
                    height={60}
                    alt="Icon Service"
                    loading="lazy"
                />
                <h2 className="text-lg font-medium text-gray-900">{service}</h2>
            </div>
        </Link>
        // <Link href="/" className="bg-white pt-4 rounded-sm shadow-sm">
        //     <div>
        //         <Image
        //             src="/"
        //             width={60}
        //             height={60}
        //             alt="Icon Service"
        //             loading="lazy"
        //         />
        //         <h2 className="text-lg font-medium text-gray-900">Item 1</h2>
        //     </div>
        // </Link>
    );
}