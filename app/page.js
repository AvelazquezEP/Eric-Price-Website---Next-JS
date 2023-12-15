// INDEX FILE
import Main from './components/utils/main';
import Header from './components/Header/Header';
import Servicios from './components/Servicios/Servicios';
import About from './components/About/About'
import Cta from './components/Cta/Cta';
import Team from './components/Team/Team';
import Faq from './components/FAQ/Faq';
import Testimonios from './components/Testimonios/Testimonios';
import Blog from './components/Blog/Blog';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

export default function Home() {
  // This is the index page and the Main tag is the Children tag in the layout, in this way we can render al the content
  // and this index have the nav and footer
  return (
    <Main>
      <Header />
      <Servicios />
      <About />
      <Cta />
      <Team />
      <Faq />
      <Testimonios />
      <Blog />
      <Form />      
    </Main>
  )
}