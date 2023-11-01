// INDEX FILE
import Main from './components/utils/main';
import Servicios from './components/Servicios/Servicios';
import About from './components/About/About'

export default function Home() {
  return (
    // <main>
    //   <Servicios />
    // </main>
    // <main className='bg-slate-300 mt-8 flex flex-col items-center justify-between p-24'>
    // </main>
    <Main>
      <Servicios />
      <About />
    </Main>
  )
}