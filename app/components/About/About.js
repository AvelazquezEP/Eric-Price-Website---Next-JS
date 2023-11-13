import Title from "../utils/title";
import Image from "next/image";
import ItemAbout from "./Itemabout";
import Itemsello from "./Itemsello";
import { AboutItem } from "../../Data/AboutItem";
import { Sellositem } from '../../Data/Sellositem';

export default function About() {
    return (
        <section className="mt-16 sm:py-16 lg:px-6 p-16" id="Nosotros">
            <Title title='Lo que nos hace únicos' />
            <div className="flex flex-col gap-4 border-t pt-10 lg:flex-row">
                <div className="lg:w-1/2">
                    <Image
                        src="/images/testimonialImage.webp"
                        width={500}
                        height={500}
                        className="mx-auto w-[40rem]"
                        alt="Testimonial"
                    />
                </div>
                <div className="lg:w-1/2 grid grid-cols-1 gap-4 px-4 mt-4 md:grid-cols-2">
                    {AboutItem.map(({ title, description }) =>
                        <ItemAbout title={title} description={description} />
                    )}
                </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 place-content-center lg:grid-cols-4">
                {Sellositem.map(({ link, alt }) => (
                    <Itemsello link={link} alt={alt} />
                ))}
            </div>
        </section>
    );
}