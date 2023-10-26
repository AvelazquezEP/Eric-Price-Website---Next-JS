import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
    return (
        <div className='flex flex-col items-center lg:justify-around lg:flex-row px-4 mx-auto max-w-screen-xl lg:px-6'>
            <section className='lg:w-1/2 p-12 text-white'>
                <span className='text-xl text-gray-300'>Tu abogado de confianza</span>
                <h1 className='text-4xl leading-10 mt-8 font-bold'>
                    Abogado Eric Price luchara por usted
                </h1>
                <p className='mt-8 text-gray-100 text-2xl font-light'>
                    Haciendo realidad sus sueños, ayudando a miles de personas con sus tramites migratorios.
                </p>
                <div className='flex flex-grow gap-4 items-center mt-4 lg:flex-col'>
                    <button
                        className='w-11/12 lg:w-2/6 bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 rounded'>
                        <Link href="tel:(855)662-2772" className='text-[1.1rem]'>
                            {/* <i className="fa-solid fa-phone"></i> */}
                            <FontAwesomeIcon
                                icon={faPhone}
                                className="fa-solid fa-phone text-[1.1rem] mr-1"
                            // style={{ color: "red", fontSize: 64 }}
                            />
                            (855) 662-2772
                        </Link>
                    </button>
                    <button className='w-11/12 lg:w-2/6 border border-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-2 rounded'>
                        <Link href='' className='text-[1.1rem]'>
                            Contactanos hoy
                        </Link>
                    </button>
                </div>
            </section>
            <section>
                <Image
                    src='/images/EP_heroSection.png'
                    width={500}
                    height={500}
                    alt='Eric Price Picture'
                    className='mx-auto w-[27rem]'
                />
            </section>
        </div>
    );
}