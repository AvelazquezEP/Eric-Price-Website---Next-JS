import Link from 'next/link';
import Li from './li';

export default function Header() {
    return (
        <header className='flex justify-between py-2 px-4 bg-slate-200'>
            <nav className='w-full flex justify-between items-center'>
                {/* LOGO */}
                <div className=''>
                    <Link href="/" className='flex items-center'>
                        {/* <img src="" alt="" /> */}
                        <p>EP site</p>
                    </Link>
                </div>
                {/* NAV MENU */}
                <div>
                    <ul className='list-reset lg:flex justify-end flex-1 items-center text-gray-600 gap-5'>
                        <Li href='/' title='Servicios' />
                        <Li href='/' title='Servicios' />
                        <Li href='/' title='Servicios' />
                        <Li href='/' title='Servicios' />
                    </ul>
                    {/* </div> */}
                </div>
            </nav>
        </header>
    );
}