import Title from "../utils/title";
import Members from './Members';
import { TeamItems } from '../../Data/TeamItems';

let title = "Nuestro Equipo";

export default function test() {
    return (
        // mt-16 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6
        // <section className="mt-16 lg:px-6 p-16"></section>
        <section className="mt-16 px-4 mx-auto sm:py-16 lg:px-6 text-center">
            <Title title={title} />
            {/* <h2 className="mb-2 text-4xl tracking-tight font-bold text-gray-900 text-center">{title}</h2> */}
            <div className="grid grid-cols-1 gap-7 p-4 pt-6 place-items-center md:grid-cols-2 xl:grid-cols-3 text-center">
                {TeamItems.map(({ name, city, image, alt, facebook, iconFb, tiktok, iconTk, instagram, iconIg, }) => (
                    <Members
                        src={image}
                        alt={alt}
                        name={name}
                        city={city}
                        facebook={facebook}
                        iconFb={iconFb}
                        tiktok={tiktok}
                        iconTk={iconTk}
                        instagram={instagram}
                        iconIg={iconIg}
                    />
                ))}
            </div>
        </section>
    );
}