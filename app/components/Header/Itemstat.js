export default function Itemstat({ amount, description }) {
    return (
        <div>
            <p className="text-5xl font-bold">
                {amount}
                <span className="text-4xl">+</span>
            </p>
            <p className="text-xl">
                {description}
            </p>
        </div>
    );
}