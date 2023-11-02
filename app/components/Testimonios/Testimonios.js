import Title from "../utils/title";
import TestimonioItem from "./TestimonioItem";
import Link from "next/link";

let title = 'No nos creas a nosotros, mira lo que nuestros clientes dicen';

export default function Testimonios() {
    return (
        <section className="mt-16 sm:py-16 lg:px-6 p-16" id="Testimonios">
            <Title title={title} />
            <p className="mb-6 font-normal text-gray-500 lg:mb-16 sm:text-xl">
                Ayudamos a muchas personas a poder migrar a los Estados Unidos, tomamos cada uno de sus casos y creamos un
                plan personalizado para poder llevarlo a un caso de éxitos
            </p>
            <div className="bg-white">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    <TestimonioItem />
                </div>
            </div>
            <div className="text-center">
                <Link href='/'
                    className="py-2.5 px-5 mr-2 mb-2 text-xl font-medium text-white focus:outline-none bg-orange-400 rounded-lg border border-gray-200 hover:bg-orange-500 focus:z-10 focus:ring-4 focus:ring-gray-200">
                    mas casos de éxito...
                </Link>
            </div>
        </section>
    );
}