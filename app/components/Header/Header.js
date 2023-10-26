import Link from 'next/link';
import Li from '../utils/li';
import Hero from './Hero'

export default function Header() {
    return (
        // We change the 
        <header className='bg-slate-800 h-screen'>
            <nav className='w-full flex justify-between py-2 px-4 items-center bg-slate-700'>
                {/* LOGO */}
                <div className=''>
                    <Link href="/" className='flex items-center'>
                        {/* <img src="" alt="" /> */}
                        <p className='text-white'>EP site</p>
                    </Link>
                </div>
                {/* NAV MENU */}
                <div>
                    <ul className='list-reset lg:flex justify-end flex-1 items-center text-gray-600 gap-5'>
                        <Li href='/' title='Servicios' />
                        <Li href='/' title='Nosotros' />
                        <Li href='/' title='Nuestro Equipo' />
                        <Li href='/' title='FAQ' />
                        <Li href='/' title='Testimonios' />
                        <Li href='/' title='Blog' />
                        <Li href='/' title='Contacto' />
                        <li>
                            <Link href='/'
                                className='inline-block no-underline bg-orange-400 hover:bg-orange-500 rounded hover:text-gray-50 hover:text-underline py-2 px-4 lg:text-white'>
                                English
                            </Link>
                        </li>
                    </ul>
                    {/* </div> */}
                </div>
            </nav>
            <Hero />
        </header>
    );
}