// INDEX FILE
import Main from './components/utils/main';
import Servicios from './components/Servicios/Servicios';
import About from './components/About/About'
import Cta from './components/Cta/Cta';
import Team from './components/Team/Team';
import Faq from './components/FAQ/Faq';
import Testimonios from './components/Testimonios/Testimonios';
import Blog from './components/Blog/Blog';

export default function Home() {
  return (
    <Main>
      <Servicios />
      <About />
      <Cta />
      <Team />
      <Faq />
      <Testimonios />
      <Blog />
    </Main>
  )
}