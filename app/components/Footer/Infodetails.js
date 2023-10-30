import Link from "next/link";
import Image from "next/image";

export default function Infodetails() {
    return (
        <div> {/* md:w-4/12 */}
            <div className="mb-6">
                <Link href='/' title="Home">
                    <Image
                        src='/images/EricpriceLogo-white.svg'
                        width={500}
                        height={500}
                        alt='Attorney Eric Price Logo'
                        className='w-[15rem] mx-auto pb-4'
                    />
                </Link>
            </div>
        </div >
    );
}