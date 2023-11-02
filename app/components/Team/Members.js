import Link from "next/link";
import Circleimage from './Circleimage';
import Socialitem from './Socialitem';
import Memberitems from "./Memberitems";
import Image from "next/image";
import Socialmediaitem from "../Footer/Socialmediaitem";

export default function test({ src, alt, name, city, facebook, iconFb, tiktok, iconTk, instagram, iconIg, aboutMe }) {
    return (
        <article className="w-[20rem] flex flex-col items-center rounded-xl shadow-md p-4">
            <div className="social">
                <Circleimage src={src} alt={alt} />
            </div>
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
                    <Socialitem href={facebook} icon={iconFb} />
                    <Socialitem href={tiktok} icon={iconTk} />
                    <Socialitem href={instagram} icon={iconIg} />
                </div>
            </div>
            {/* <Memberitems name={name} city={city} facebook={facebook} tiktok={tiktok} instagram={instagram} /> */}
        </article>
    );
}