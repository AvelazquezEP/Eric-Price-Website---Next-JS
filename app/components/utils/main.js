export default function Main({ children }) {
    return (
        // bg-slate-300 mt-8 
        <main className='flex flex-col items-center justify-between p-16'>
            {children}
        </main>
    );
}