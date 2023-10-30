// import Link from "next/link";
import Itemoffice from "./Itemoffice";

export default function Office() {
    return (
        <div className=" md:w-4/12 md:mx-auto"> {/* */}
            <p className="text-center mb-4 text-lg font-semibold uppercase">Oficinas</p>
            <Itemoffice />
        </div>
    );
}