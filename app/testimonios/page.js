import Link from "next/link";
import Hero from "../components/Header/Hero";
import ItemTestimonio from '../components/Testimonios/ItemTestimonio';
import { TestimonialesItems } from "../Data/TestimonialesItems";

let title = "No nos creas a nostros, mira lo que nuestros clientes dicen de nosotros.";

export default function test() {
    return (
        <>
            <Hero />
            <div className="mb-6 text-4xl tracking-tight font-extrabold text-gray-900">
                <h2 className="mb-6 text-4xl tracking-tight font-bold text-gray-900">{title}</h2>
                <p className="mb-6 font-normal text-gray-500 lg:mb-16 sm:text-xl">
                    Ayudamos a muchas personas a poder migrar a los Estados Unidos, tomamos cada uno de sus casos y creamos un
                    plan personalizado para poder llevarlo a un caso de éxitos
                </p>
            </div>

            <div className="bg-white mb-12 p-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <section className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {TestimonialesItems.map(({ Title, Description, Name, City }) =>
                        <ItemTestimonio Title={Title} Description={Description} Name={Name} City={City} />
                    )}
                </section>
            </div>
        </>
    );
}