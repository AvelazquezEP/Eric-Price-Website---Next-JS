export default function itemAbout({ title, description }) {
    return (
        <figure class="bg-white flex flex-col content-center items-center shadow-md py-4 px-4 rounded"
            data-aos="fade-right">
            <div>
                <i class="fa-sharp fa-solid fa-check text-5xl text-green-500"></i>
            </div>
            <figcaption class="text-2xl font-medium">{title}</figcaption>
            <figcaption>
                {description}
            </figcaption>
        </figure>
    );
}