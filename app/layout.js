import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';

// const inter = Inter({ subsets: ['latin'] })
export const siteTitle = "Eric Price - Immigration Attorney";

export const metadata = {
  title: siteTitle,
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name='description'
          content='Si esta buscando un abogado para su proceso de inmigración a llegado a la mejor oficina. El abogado Eric Price es  Ex-Fiscal de ICE y tiene años de experiencia. ¡Hable hoy para reservar su consulta gratis!'
        />
        <meta name='author' content='Eric Price' />
        <meta name='keywords' content='abogados de inmigración, abogado de inmigración en los Angeles, abogado eric price, Eric price, abogado de inmigración, abogado para green card, abogado para permiso de trabajo, abogado para residencia, inmigración, abogados de inmigracion, residencia, green card, ciudadanía, petición familiar, Immigration, immigration attorney, immigration attorney los Angeles, immigration attorneys' />
        <meta name='og:title' content={siteTitle} />
      </Head>

      {/* <body className={inter.className}> */}
      <body className='bg-gray-50'>
        {/* HEADER SECTION */}
        <Header />

        {/* MAIN CONTENT */}
        {children}

        {/* FOOTER SECTION */}
        <Footer />
      </body>
    </html>
  )
}
