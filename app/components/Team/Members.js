import Link from "next/link";
import Circleimage from './Circleimage';
import Memberitems from "./Memberitems";
import Image from "next/image";

export default function test({ src, alt, name, city, facebook, tiktok, instagram }) {
    return (
        <article>
            <div class="social">
                <Circleimage src={src} alt={alt} />
            </div>
            <Memberitems name={name} city={city} facebook={facebook} tiktok={tiktok} instagram={instagram} />
        </article>
    );
}