import Image from "next/image";
import Layoutmodule from '../layout.module.css';

export default function Circleimage({ src, alt }) {
    return (
        <div className={Layoutmodule.circle}>
            <Image
                src={src}
                width={300}
                height={300}
                alt={alt}
                className=""
            />
            {/* <img src="images/Attorney-Eric-Price-1365x2048.webp" alt="Eric Price picture" loading="lazy" title="Eric Price picture"> */}
        </div>
    );
}