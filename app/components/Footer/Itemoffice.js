import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { itemOffice } from "../../Data/menuOffice";

export default function Itemoffice({ link, name, description }) {
    return (
        <div className="flex items-center">
            <FontAwesomeIcon
                icon={faLocation}
                className="text-orange-400 text-2xl"
            />

            <Link href={link} target="_blank">
                <div className="ml-2">
                    <h2 className="font-semibold">{name}</h2>
                    <p>{description}</p>
                </div>
            </Link>
        </div>
    );
}