export default function Main({ children }) {
    return (
        // bg-slate-300 mt-8 - p-16 <--this last its to can have a spacing on each section
        <main className='flex flex-col items-center justify-between'>
            {children}
        </main>
    );
}