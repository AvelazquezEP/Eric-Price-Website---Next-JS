// import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
import Header from './components/Header/Header';
import Nav from './components/Header/Nav';
import Navbar from './components/Header/navbar';
import Footer from './components/Footer/Footer';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// import './components/Form/loader'

config.autoAddCss = false;

// const inter = Inter({ subsets: ['latin'] })
export const siteTitle = "Eric Price - Immigration Attorney";

export const metadata = {
  title: siteTitle,
  description: 'Attorney Eric Price website',
}

// RootLayout
export default function Layout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes='any' />
        <script src="https://kit.fontawesome.com/b50aac37d5.js" crossOrigin="anonymous"></script>
        <meta
          name='description'
          content='Si esta buscando un abogado para su proceso de inmigración a llegado a la mejor oficina. El abogado Eric Price es  Ex-Fiscal de ICE y tiene años de experiencia. ¡Hable hoy para reservar su consulta gratis!'
        />
        <meta name='author' content='Eric Price' />
        <meta name='keywords' content='abogados de inmigración, abogado de inmigración en los Angeles, abogado eric price, Eric price, abogado de inmigración, abogado para green card, abogado para permiso de trabajo, abogado para residencia, inmigración, abogados de inmigracion, residencia, green card, ciudadanía, petición familiar, Immigration, immigration attorney, immigration attorney los Angeles, immigration attorneys' />
        <meta name='og:title' content={siteTitle} />
        <script type='text/javascript' src="/static/script.js"></script>
      </Head>

      <body className='bg-gray-50'>
        {/* HEADER SECTION */}
        {/* <Nav /> */}
        <Navbar />

        {/* MAIN CONTENT */}
        {children}

        {/* FOOTER SECTION */}
        <Footer />

        {/* <script src="./components/Header/toggle.js"></script> */}
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js">
        </script>
        <script src="../public/static/script.js"></script>
      </body>
    </html>
  )
}
