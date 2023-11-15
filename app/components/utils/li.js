import Link from 'next/link';

export default function Li({ id, href, title }) {
    return (
        <li className='mr-1' id={id} key={id}>
            <Link href={href}
                className='inline-block no-underline hover:text-amber-500 hover:underline py-2 x-4 lg:text-white'>
                {title}
            </Link>
        </li>
    );
}