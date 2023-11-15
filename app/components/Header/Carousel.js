import Carouselitem from "./Carouselitem";
import { Carouselitems } from "../../Data/Carouselitems";
// import Image from "next/image";

export default function Carousel() {
    return (
        <div className="whitespace-nowrap flex flex-row overflow-x-scroll">
            {Carouselitems.map(({ id, link, alt }) => (
                <Carouselitem link={link} alt={alt} />
            ))}
        </div>
    );
}