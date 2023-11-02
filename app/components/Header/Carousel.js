import Carouselitem from "./Carouselitem";
import { Carouselitems } from "../../Data/Carouselitems";

export default function Carousel() {
    return (
        <div className="whitespace-nowrap flex flex-row overflow-x-scroll" >
            {Carouselitems.map(({ link, alt }) => (
                <Carouselitem
                    link={link}
                    alt={alt}
                />
            ))}
        </div>
    );
}