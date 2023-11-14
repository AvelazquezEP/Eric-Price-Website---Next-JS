// "use client";
import Link from "next/link";
// import { useState, useMemo } from "react"
import layouModule from '../layout.module.css';
import Li from "../utils/li";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { menuItems } from "../../Data/menuItems";

const englishItem = 'English';

export default function Nav() {

    // const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (

        // #region NEW NAV

        // <nav className="navigation">
        //     <a href="/" className="brand-name">
        //         EP
        //     </a>
        //     <button className="hamburger" onClick={() => {
        //         setIsNavExpanded(!isNavExpanded);
        //     }}>
        //         <svg
        //             xmlns="http://www.w3.org/2000/svg"
        //             className="h-5 w-5"
        //             viewBox="0 0 20 20"
        //             fill="white">
        //             <path
        //                 fillRule="evenodd"
        //                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
        //                 clipRule="evenodd"
        //             />
        //         </svg>
        //     </button>
        //     <div
        //         className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        //         <ul>
        //             {menuItems.map(({ link, name }) =>
        //                 <Li href={link} title={name} />
        //             )}
        //         </ul>
        //     </div>
        // </nav>

        // #endregion


        // #region OlD NAV

        // w-full z-30 top-0
        <nav id="header" className={`w-full z-30 top-0 ${layouModule.headerBackground}`}>
            <div className="mx-auto flex flex-wrap items-center justify-between py-2 max-w-screen-xl sm:py-5 px-4">
                <div className="">
                    <Link href='/'>
                        <Image
                            src='/images/EricpriceLogo-white.svg'
                            width={150}
                            height={39}
                            alt="Attorney Eric Price Logo"
                            className="h-9"
                            loading="eager"
                            style="width: auto; height: auto;"
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
                            <Li id={id} href={link} title={name} />
                        ))}
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

        // #endregion 
    );

}