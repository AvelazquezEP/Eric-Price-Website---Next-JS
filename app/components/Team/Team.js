import Title from "../utils/title";
import Members from './Members';
import { TeamItems } from '../../Data/TeamItems';

let title = "Nuestro Equipo";

export default function test() {
    return (
        <section className="mt-16 sm:py-16 lg:px-6 p-16">
            <Title title={title} />
            <div className="grid grid-cols-1 gap-7 p-4 pt-6 place-items-center md:grid-cols-2 xl:grid-cols-3">
                {TeamItems.map(({ name, city, image, alt, facebook, tiktok, instagram }) => (
                    <Members
                        src={image}
                        alt={alt}
                        name={name}
                        city={city}
                        facebook={facebook}
                        tiktok={tiktok}
                        instagram={instagram}
                    />
                ))}
            </div>
        </section>
    );
}