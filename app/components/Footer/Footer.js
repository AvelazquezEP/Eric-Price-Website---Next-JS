import Link from "next/link";
import Infodetails from './Infodetails';
import Siteroute from './Siteroute';
import Office from './Office';


export default function Footer() {
    return (
        <footer className="p-3 mt-8 bg-[#001E3E] text-white">
            <div className="flex flex-col gap-5 pt-5 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 md:flex-row">
                {/* INFO DETAILS */}
                <Infodetails />

                {/* SITE ROUTE */}
                <Siteroute />

                {/* OFFICE */}
                <Office />
            </div>

            {/* PAUSE
            <div className="">
            </div> */}
        </footer>
    );
}