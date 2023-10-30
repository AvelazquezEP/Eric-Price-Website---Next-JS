import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, fafacebook, faBrandTiktok, faInstagram, faYoutube } from "@fortawesome/free-solid-svg-icons";
import Socialmediaitem from "./Socialmediaitem";

export default function Infodetails() {
    return (
        <div className=" md:w-4/12 md:mx-auto"> {/* md:w-4/12 */}
            <div className="mb-6">
                <Link href='/' title="Home">
                    <Image
                        src='/images/EricpriceLogo-white.svg'
                        width={0}
                        height={0}
                        alt='Attorney Eric Price Logo'
                        className='w-[15rem] mx-auto pb-4'
                    />
                </Link>
                <div className="flex flex-col items-center gap-1 justify-center mt-2">
                    <div>
                        <Link href="tel:(855)662-2772" className="text-base">
                            <FontAwesomeIcon
                                icon={faPhone}
                                className="mr-1"
                            />
                            (855) 662-2772
                        </Link>
                    </div>
                    <div>
                        <Link href="mailto:info@abogadoericprice.com" className="text-base">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="mr-1"
                            />
                            info@abogadoericprice.com
                        </Link>
                    </div>
                </div>
            </div>
            {/* SOCIAL MEDIA */}
            <div className="flex flex-row justify-around w-4/5 mx-auto">
                <Socialmediaitem href='/images/icons/facebook.svg' />
                <Socialmediaitem href='/images/icons/tiktok.svg' />
                <Socialmediaitem href='/images/icons/instagram.svg' />
                <Socialmediaitem href='/images/icons/youtube.svg' />
            </div>
        </div>
    );
}