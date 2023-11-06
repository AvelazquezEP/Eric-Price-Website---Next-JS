import Link from "next/link";
import Image from "next/image";
// import { faFacebook, faTiktok, faInstagram, faYoutube } from "@fortawesome/free-solid-svg-icons";

export default function Socialmediaitem({ href, icon }) {
    return (
        <div className="font-bold rounded-full bg-white flex items-center justify-center h-10 w-10 text-xs">
            <Link href={href} target="_blank">
                <Image
                    src={icon}
                    width={30}
                    height={30}
                    alt='Social Media Icon'
                    className="w-6"
                />
            </Link>
        </div>
    );
}