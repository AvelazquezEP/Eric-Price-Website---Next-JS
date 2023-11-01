import Link from 'next/link';
import Li from '../utils/li';
import Nav from './Nav';
import Hero from './Hero';
import Stats from './Stats';
import Carousel from './Carousel';
import layouModule from '../layout.module.css';

export default function Header() {
    return (
        // We change the 
        <header id='Header'>
            {/* bg-slate-800 */}
            <div className={layouModule.headerBackground}> {/* BACKGROUND BLUE DEGRADED */}
                {/* NAVIGATION */}
                <Nav />

                {/* HERO SECTION */}
                <Hero />
            </div>
            {/* STATS SECTION */}
            <Stats />

            {/* CAROUSEL SECTION */}
            <Carousel />
        </header>
    );
}