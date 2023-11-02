import Link from "next/link";
import Image from "next/image";

export default function Socialitem({ href, icon }) {
    return (
        <div>
            <Link href={href} target="_blank">
                <Image
                    src={icon}
                    width={10}
                    height={10}
                    alt="Social media icon"
                    className="w-6"
                />
            </Link>
        </div>
    );
}