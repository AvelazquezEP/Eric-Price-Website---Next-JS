import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function itemAbout({ title, description }) {
    return (
        <figure
            className="bg-white flex flex-col content-center items-center shadow-md py-4 px-4 rounded"
            data-aos="fade-right">
            <div>
                {/* <i class="fa-sharp fa-solid fa-check text-5xl text-green-500"></i> */}
                <FontAwesomeIcon
                    icon={faCheck}
                    className="text-3xl text-green-500"
                />
            </div>
            <div className="text-center">
                <figcaption className="text-2xl font-medium">{title}</figcaption>
                <figcaption>
                    {description}
                </figcaption>
            </div>
        </figure>
    );
}