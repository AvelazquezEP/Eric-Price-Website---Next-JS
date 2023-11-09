import Link from "next/link";
import Title from "../utils/title";
import Image from "next/image";
import layoutModule from "../../components/layout.module.css";

const title = "Eric Price esta dispuesto a cumplir tus sueños";

export default function Cta() {
    return (
        <section className={`${layoutModule.cta} mt-16`} id="CTA">
            <article className="max-w-screen-2xl flex flex-col items-center text-center text-white py-9 lg:flex-row px-4 mx-auto sm:py-16 lg:px-6">
                <div className="lg:w-1/2 flex flex-col gap-5">
                    <h2 className="text-3xl font-bold leading-10 text-white">
                        {title}
                    </h2>
                    <p className="text-xl text-gray-50 font-normal leading-8">
                        En abogado Eric Price podemos ayudarte a cumplir tus sueños de inmigración. Pide tu consulta
                        gratuita con nosotros hoy.
                    </p>
                    <button
                        className="mx-auto w-11/12 bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 lg:py-3 px-8 mt-4 rounded lg:w-3/4 2xl:w-3/5">
                        <Link href="tel:(855)662-2772">
                            (855) 662-2772
                        </Link>
                    </button>
                    <button
                        className="mx-auto w-11/12 bg-white hover:bg-orange-400 hover:text-white text-gray-900 font-bold py-2 lg:py-3 px-8 mt-4 rounded lg:w-3/4 2xl:w-3/5">
                        <Link href="/">
                            Consulta gratis &#8594;
                        </Link>
                    </button>
                </div>
                {/*  */}
                <div className="lg:w-1/2 pt-10">
                    <Image
                        src="/images/new-ep-team.png"
                        width={400}
                        height={400}
                        className="w-[40rem] mx-auto"
                        alt="Eric Price image"
                    />
                </div>
            </article>
        </section>
    );
}