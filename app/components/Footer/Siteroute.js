import Li from "../utils/li";
import { menuItems } from "../../Data/menuItems";


export default function Siteroute() {
    return (
        <div className="text-center  md:w-4/12 md:mx-auto">
            <h2 className="mb-4 font-semibold uppercase">Mapa del sitio</h2>
            <ul className="text-gray-200">
                {menuItems.map(({ id, link, name }) =>
                    <Li id={id} href={link} title={name} />
                )}
            </ul>
        </div>
    );
}