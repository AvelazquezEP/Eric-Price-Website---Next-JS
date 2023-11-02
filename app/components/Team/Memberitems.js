import Link from "next/link";
import Socialmediaitem from "../Footer/Socialmediaitem";

export default function Memberitems({ name, city, facebook, tiktok, instagram }) {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-col items-center">
                <h3 className="text-3xl font-medium">{name}</h3>
                <p className="text-xl text-gray-600">{city}</p>
            </div>
            <div className="flex">
                <button
                    className="bg-orange-400 px-4 py-2 rounded-full text-white hover:bg-orange-500 mx-auto shadow-lg">
                    <Link href="/">
                        sobre mi
                    </Link>
                </button>
            </div>
            <div className="flex flex-row justify-between">
                <div className="">
                    <Link href={facebook} target="_blank">
                        <Socialmediaitem href='/images/icons/facebook.svg' />
                    </Link>
                </div>
                <div>
                    <Link href={tiktok} target="_blank">
                        <Socialmediaitem href='/images/icons/tiktok.svg' />
                    </Link>
                </div>
                <div>
                    <Link href={instagram} target="_blank">
                        <Socialmediaitem href='/images/icons/instagram.svg' />
                    </Link>
                </div>
            </div>
        </div>
    );
}