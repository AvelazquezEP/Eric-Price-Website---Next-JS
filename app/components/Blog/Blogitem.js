import Image from "next/image";
import Link from "next/link";


export default function test({ date, image, postLink, alt, title, description, postIcon, postIconAlt }) {
    return (
        <article className="p-6 bg-white rounded border border-gray-200 shadow-md">
            <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="text-sm">{date}</span>
            </div>
            <div>
                <Image
                    src={image}
                    width={600}
                    height={100}
                    alt={alt}
                    className="rounded mb-2"
                />
            </div>
            <p className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                <Link href={postLink}>
                    {title}
                </Link>
            </p>
            <p className="mb-5 font-light text-gray-500">
                {description}...
            </p>
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <Image
                        src={postIcon}
                        width={28}
                        height={28}
                        alt={postIconAlt}
                        loading="eager"
                        className="w-7 h-7 rounded-full object-cover"
                    />
                    <span className="font-medium">
                        Eric Price
                    </span>
                </div>
                <Link href='/'
                    className="inline-flex items-center font-medium text-primary-600 hover:underline">
                    Leer mas
                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </Link>
            </div>
        </article >
    );
}