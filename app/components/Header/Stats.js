import Itemstat from "./Itemstat";

export default function Stats() {
    return (
        <section className="text-center bg-gray-100">
            <div
                className="flex flex-col justify-around items-center text-gray-500 p-4 gap-10 md:flex-row mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <p className="text-2xl font-semibold">
                    Nuestro equipo se dedica a terminar con éxito los casos de nuestros clientes.
                </p>
            </div>
            <Itemstat amount='1,734' description='Familias unidas' />
            <Itemstat amount='1,258' description='Emisión de tarjetas verdes' />
            <Itemstat amount='468' description='Deportaciones detenidas' />
        </section>
    );
}