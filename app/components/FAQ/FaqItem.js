import Link from "next/link";

// export default function FaqItem() {
export default function FaqItem() {
    return (
        <div className='grid grid-cols-1 md:gap-8 md:grid-cols-2'>

            {/* #1 QUESTION */}
            <article className="mb-10">
                <p className="flex items-center mb-4 text-lg font-medium text-gray-900">
                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-[#001E3E]" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"></path>
                    </svg>
                    &#191;Pueden ayudarme con mi proceso migratorio&#63;
                </p>
                <p className="text-gray-500">
                    ¡Claro que sí! Podemos ayudarte en cualquier proceso migratorio que necesites. Sólo ponte en
                    contacto con nosotros llamando al número
                    <span>
                        <Link href="tel:(855)662-2772" className="font-medium underline text-primary-600">
                            (855) 662-2772
                        </Link>
                    </span>
                    y te guiaremos de forma gratuita.
                </p>
            </article>

            {/* #2 QUESTION */}
            <article className="mb-10">
                <p className="flex items-center mb-4 text-lg font-medium text-gray-900">
                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-[#001E3E]" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"></path>
                    </svg>
                    &#191;Me puede pedir algún familiar para hacerme residente&#63;
                </p>
                <p className="text-gray-500">
                    Un familiar sí puede solicitar tu residencia, pero es necesario revisar tu estatus actual y
                    el caso más a fondo. Agenda tu consulta gratuita y comienza tu caso.
                </p>
            </article>

            {/* #3 QUESTION */}
            <article className="mb-10" data-aos="zoom-in">
                <p className="flex items-center mb-4 text-lg font-medium text-gray-900">
                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-[#001E3E]" fill=" currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"></path>
                    </svg>
                    Fui víctima de un crimen, &#191;puedo aplicar para algún estatus legal&#63;
                </p>
                <p className="text-gray-500">
                    Sí. Puedes aplicar dependiendo del crimen ocurrido. Ponte en contacto con nosotros para
                    revisar los procesos a los que puedes aplicar y asegurar el éxito de tu caso.
                </p>
            </article>

            {/* #4 QUESTION */}
            <article className="mb-10" data-aos="zoom-in">
                <p className="flex items-center mb-4 text-lg font-medium text-gray-900">
                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-[#001E3E]" fill=" currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"></path>
                    </svg>
                    Soy residente y quisiera aplicar para la ciudadanía, &#191;puedo llevar el trámite con
                    ustedes&#63;
                </p>
                <p className="text-gray-500">
                    ¡Claro que sí! Solo llámanos, agenda tu consulta gratuita y empieza tu proceso de ciudadanía
                    con nosotros.
                </p>
            </article>

            {/* #5 QUESTION */}
            <article className="mb-10" data-aos="zoom-in">
                <p className="flex items-center mb-4 text-lg font-medium text-gray-900">
                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-[#001E3E]" fill=" currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"></path>
                    </svg>
                    &#191;Cómo sé si puedo calificar para un asilo&#63;
                </p>
                <p className="text-gray-500">
                    Hay varias razones por las cuales puedes solicitar asilo o protección. Ponte en contacto con
                    nosotros para platicar sobre tu situación actual y evaluar todas tus posibilidades.
                </p>
            </article>

            {/* #6 QUESTION */}
            <article className="mb-10" data-aos="zoom-in">
                <p className="flex items-center mb-4 text-lg font-medium text-gray-900">
                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-[#001E3E]" fill=" currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"></path>
                    </svg>
                    Perdí mi tarjeta de residencia, &#191;ustedes me pueden ayudar a conseguirla otra vez&#63;
                </p>
                <p className="text-gray-500">
                    Nosotros te ayudamos a tramitar tu tarjeta. Ponte en contacto con nosotros e inicia con la
                    reposición. Realiza una llamada nuestras oficinas y te ayudaremos a obtenerla.
                    <span>
                        <Link href="tel:(855)662-2772"
                            className="font-medium underline text-primary-600">
                            (855) 662-2772
                        </Link>
                    </span>
                </p>
            </article>
        </div>
    );
}