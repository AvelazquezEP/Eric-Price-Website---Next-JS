import Link from 'next/link';
import Li from '../utils/li';
import Nav from './Nav';
import Hero from './Hero'
import Stats from './Stats';

export default function Header() {
    return (
        // We change the 
        <header className='bg-slate-800' id='Header'>
            <div className='h-screen'> {/* BACKGROUND BLUE DEGRADED */}
                {/* NAVIGATION */}
                <Nav />

                {/* HERO SECTION */}
                <Hero />
            </div>
            {/* STATS SECTION */}
            <Stats />
        </header>
    );
}