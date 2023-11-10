import Link from "next/link";

export default function ItemTestimonio({ Title, Description, Name, City }) {
    return (
        
            <figure className="flex flex-col justify-center items-center p-6 text-center rounded md:p-12 bg-white">
                <blockquote className="mx-auto max-w-2xl text-gray-800 text-center">
                    <h3 className="text-lg font-semibold">
                        {Title}
                    </h3>
                    <p>
                        " {Description} "
                    </p>
                </blockquote>
                <figcaption className="flex flex-col justify-center items-center space-x-3 text-gray-800">
                    <div className="space-y-0.5 font-medium text-center">
                        <div>{Name}</div>
                        <div className="text-sm font-light">
                            {City}
                        </div>
                    </div>
                </figcaption>
            </figure>        
    );
}