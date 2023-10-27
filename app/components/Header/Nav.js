import Link from "next/link";
import Li from "../utils/li";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const menuItems = [
    {
        id: 1,
        link: 'Servicios',
        name: 'Servicios',
    },
    {
        id: 2,
        link: 'Nosotros',
        name: 'Nosotros',
    },
    {
        id: 3,
        link: 'Nuestro Equipo',
        name: 'Nuestro Equipo',
    },
    {
        id: 4,
        link: 'FAQ',
        name: 'FAQ',
    },
    {
        id: 5,
        link: 'Testimonios',
        name: 'Testimonios',
    },
    {
        id: 6,
        link: 'Blog',
        name: 'Blog',
    },
    {
        id: 7,
        link: 'Contacto',
        name: 'Contacto',
    },
];

const englishItem = 'English';

export default function Nav() {

    return (
        // w-full z-30 top-0
        <nav id="header" className="w-full z-30 top-0">
            <div className="mx-auto flex flex-wrap items-center justify-between mt-0 py-2 max-w-screen-xl sm:py-5 px-4">
                <div className="">
                    <Link href='/'>
                        <Image
                            src='/images/EricpriceLogo-white.svg'
                            width={150}
                            height={150}
                            alt="Attorney Eric Price Logo"
                            className="h-9"
                        />
                    </Link>
                </div>
                <div className="block lg:hidden pr-4">
                    <button id="nav-toggle" name="toggle"
                        className="flex items-center p-1 text-white hover:text-orange-200 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        <FontAwesomeIcon
                            icon={faBars}
                            className="fa-solid fa-bars text-2xl"
                        // style={{ color: "red", fontSize: 64 }}
                        />
                    </button>
                </div>
                <div className="flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 lg:bg-transparent p-4 lg:p-0 z-20"
                    id="nav-content">
                    <ul className='list-reset lg:flex justify-end flex-1 items-center text-gray-600 gap-5'>
                        {menuItems.map(({ id, link, name }) => (
                            <Li href={link} title={name} />
                        ))}
                        {/* <Li href='/' title='Servicios' />
                        <Li href='/' title='Nosotros' />
                        <Li href='/' title='Nuestro Equipo' />
                        <Li href='/' title='FAQ' />
                        <Li href='/' title='Testimonios' />
                        <Li href='/' title='Blog' />
                        <Li href='/' title='Contacto' /> */}
                        <li>
                            <Link href='/'
                                className='inline-block no-underline bg-orange-400 hover:bg-orange-500 rounded hover:text-gray-50 hover:text-underline py-2 px-4 lg:text-white'>
                                {englishItem}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* NAV MENU */}
        </nav>
    );

}