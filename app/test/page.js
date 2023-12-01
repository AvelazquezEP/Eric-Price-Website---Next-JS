'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

export default function test() {

    const url = 'https://abogadoericprice.com/test.php';

    const [state, setState] = useState([]);


    const handleClick = () => {
        let url = "https://abogadoericprice.com/test.php";

        request('get', url)
            .then(data => console.log(data));
    }

    async function request(method, url = '') {
        const data = await fetch(url, {
            method: method.toUpperCase(),
            mode: 'cors'
        });

        var json = await data.json();

        return json;
    }

    useEffect(() => {
        handleClick();
    }, []);

    return (
        <main className="flex flex-col items-center justify-center h-screen">
            <p>Test data</p>
            <div>
                <button className="border-2 p-2" onClick={(e) => handleClick()}>Fetch</button>
            </div>
            <div>
            </div>
        </main>
    );
}