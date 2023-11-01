import Title from "../utils/title";
import Link from "next/link";
import Image from "next/image";
import Itemservice from "./Itemservice";
import { serviceItems } from '../../Data/serviceItems';

export default function Servicios() {
    return (
        <section className="mt-16 sm:py-16 lg:px-6" id="Servicios">
            <Title title="Principales Servicios" />
            <div className="flex flex-col gap-4 border-t pt-10 lg:flex-row">
                <div className="mx-auto">
                    <span className="text-gray-600 text-base font-semibold nd:text-xl">Lo que ofrecemos</span>
                    <p className="text-gray-500 text-base md:text-xl">
                        Nuestra firma de abogados Eric Price se especializa en casos de inmigración, estos algunos de los
                        servicios que tenemos para ofrecerte. Póngase en contacto con nosotros hoy.
                    </p>
                    <div className="text-center grid grid-cols-2 gap-6 pt-8 md:grid-cols-3">

                        {serviceItems.map(({ image, link, name }) =>
                            <Itemservice href={link} image={image} service={name} />
                        )}

                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <button name="phoneNumber"
                    className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-8 mt-4 rounded">
                    <Link href='/' className="text-2xl">
                        Ver mas servicios &#8594;
                    </Link>
                </button>
            </div>
        </section>
    );
}