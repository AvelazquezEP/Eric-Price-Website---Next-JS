// import Link from "next/link";
import Itemoffice from "./Itemoffice";
import { itemOffice } from "../../Data/menuOffice";

export default function Office() {
    return (
        <div className=" md:w-4/12 md:mx-auto">
            <p className="text-center mb-4 text-lg font-semibold uppercase">Oficinas</p>
            {/* <Itemoffice /> */}
            <div className="grid grid-cols-2 gap-4 md:mx-auto">
                {itemOffice.map(({ link, name, description }) =>
                    <Itemoffice link={link} name={name} description={description} />
                )}
            </div>
        </div>
    );
}