
export default function TestimonioItem() {
    return (
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2" >
            {/* #1 TESTIMONY */}
            <figure
                className="flex flex-col justify-center items-center text-center bg-[#001E3E] border-b border-gray-200 lg:border-r">
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/UhUdOSGlqHY"
                    title="YouTube video player" className="border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
            </figure>

            {/* #2 TESTIMONY */}
            <figure
                className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12">
                <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                    <p className="text-lg font-semibold text-gray-900">
                        Servicio, amabilidad y desempeño en su trabajo
                    </p>
                    <p className="my-4">
                        "¡Gracias al abogado Eric Price y a la asistente legal Miss Irene Castrillon por tan
                        excelente servicio, amabilidad y desempeño en su trabajo! Todo lleva su tiempo y con la
                        ayuda de Dios y de ellos todo saldrá excelente! Bendiciones!! los recomiendo!!"
                    </p>
                </blockquote>
                <figcaption className="flex justify-center items-center space-x-3">
                    <div className="space-y-0.5 font-medium text-center">
                        <div>Oscar Guadon</div>
                        <div className="text-sm font-light text-gray-500">
                            Orange County
                        </div>
                    </div>
                </figcaption>
            </figure>

            {/* #3 TESTIMONY */}
            <figure
                className="flex flex-col justify-center items-center p-8 text-center bg-[#001E3E] lg:bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r">
                <blockquote className="mx-auto mb-8 max-w-2xl text-gray-50 lg:text-gray-500">
                    <p className="text-lg font-semibold text-white lg:text-gray-900">
                        satisfecho con la gran disposición
                    </p>
                    <p className="my-4">
                        "Actualmente estoy iniciando un proceso legal con el abogado Eric Price en sus oficinas
                        de Santa Ana y hasta el momento estoy satisfecho con la gran disposición que tienen para
                        ayudarte con cualquier duda o pregunta, por eso si los recomiendo."
                    </p>
                </blockquote>
                <figcaption className="flex justify-center items-center space-x-3">
                    <div className="space-y-0.5 font-medium text-center">
                        <div className="text-white lg:text-black">
                            Hugo Vergara
                        </div>
                        <div className="text-sm font-light text-gray-50 lg:text-gray-500">
                            Chicago
                        </div>
                    </div>
                </figcaption>
            </figure>

            {/* #4 TESTIMONY */}
            <figure
                className="flex flex-col justify-center items-center text-center bg-[#001E3E] border-b border-gray-200  lg:border-r">
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/f4lRKylLCCA"
                    title="YouTube video player" className="border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen data-aos="fade-right">
                </iframe>
            </figure>
        </div>
    );
}