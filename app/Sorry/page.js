import Link from "next/link";
import Image from "next/image";


async function getData() {
    const res = await fetch('https://abogadoericprice.com/test.php');

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
export default function test() {
    return ({ getData })
    // #region REAL CODE FROM THIS PAGE
    // return (
    //     <main className="bg-[#001E3E]">
    //         <div className="flex items-center justify-center h-screen">
    //             <div className="p-2">
    //                 <div className="flex flex-col gap-8 items-center text-center space-y-2">
    //                     <Image
    //                         src='/images/EricpriceLogo-white.svg'
    //                         width={100}
    //                         height={100}
    //                         alt="Attorney Eric Price Logo"
    //                         className="w-52 mx-auto"
    //                     />
    //                     <h1>
    //                         We feel a lot for the inconveniences
    //                     </h1>
    //                     <p>
    //                         It seems that an error occurred while trying to make your request
    //                     </p>
    //                     <Link href='/'
    //                         className="inline-flex items-center px-4 py-2 text-white bg-orange-400 border rounded-full hover:bg-orange-500 focus:outline-none focus:ring">
    //                         <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24"
    //                             stroke="currentColor" strokeWidth={2}>
    //                             <path strokeLinecap="round" strokeLinejoin="round" d="M7 161-4-4-4m0 014-4m-4 4h18" />
    //                         </svg>
    //                         <span className="text-xl font-semibold">
    //                             Back
    //                         </span>
    //                     </Link>
    //                 </div>
    //             </div>
    //         </div>
    //     </main >
    // );
    // #endregion
}

// const fetcher = async () => {
//     const res = await fetch(
//         'https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/lottigully-jjrda/service/movies/incoming_webhook/movies?arg=dexter'
//     );
//     const data = await res.json();
//     return data;
// };

