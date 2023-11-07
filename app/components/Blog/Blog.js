import Link from "next/link";
import Title from "../utils/title";
import Blogitem from "./Blogitem";
import { PostItems } from "../../Data/PostItems";

let title = 'Nuestro Blog';

export default function Blog() {
    return (
        <section className="mt-16 sm:py-16 lg:px-6 p-16" id="Blog">
            {/* <div> */}
            <div className="bg-white">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                        <Title title={title} />
                        <p className="font-normal text-gray-800 text-2xl">
                            Entra a nuestro blog y encuentra mas información reciente acerca de casos migratorios
                        </p>
                        <button>
                            <Link href='/'
                                className="inline-flex items-center underline text-xl font-medium text-gray-500 p-2 rounded mt-4">
                                mas publicaciones
                                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </Link>
                        </button>
                    </div>
                </div>

                {/* POST */}
                <div className="grid gap-8 lg:grid-cols-2 md:w-4/5 md:mx-auto">
                    {PostItems.map(({ date, image, postLink, alt, title, description, postIcon, postIconAlt }) =>
                        <Blogitem
                            date={date}
                            image={image}
                            postLink={postLink}
                            alt={alt}
                            title={title}
                            description={description}
                            postIcon={postIcon}
                            postIconAlt={postIconAlt}
                        />
                    )}
                </div>
            </div>
            {/* </div> */}
        </section>
    );
}