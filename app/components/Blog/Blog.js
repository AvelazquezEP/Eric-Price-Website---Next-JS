import Link from "next/link";
import Title from "../utils/title";

let title = 'Nuestro Blog';

export default function Blog() {
    return (
        <section className="mt-16 sm:py-16 lg:px-6 p-16" id="Blog">
            <div>
                <div className="bg-white">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                            <Title title={title} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}