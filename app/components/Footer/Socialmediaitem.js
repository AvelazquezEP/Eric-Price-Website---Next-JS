import Link from "next/link";
import Image from "next/image";
// import { faFacebook, faTiktok, faInstagram, faYoutube } from "@fortawesome/free-solid-svg-icons";

export default function Socialmediaitem({ href }) {
    return (
        <div className="font-bold rounded-full bg-white flex items-center justify-center h-10 w-10 text-xs"            >
            <Link href={href} target="_blank">
                <Image
                    src={href}
                    width={26}
                    height={26}
                    alt='Social Media Icon'
                />
            </Link>
        </div>
    );
}