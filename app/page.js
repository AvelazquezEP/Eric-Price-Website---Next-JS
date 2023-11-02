// INDEX FILE
import Main from './components/utils/main';
import Servicios from './components/Servicios/Servicios';
import About from './components/About/About'
import Cta from './components/Cta/Cta';
import Team from './components/Team/Team'

export default function Home() {
  return (
    <Main>
      <Servicios />
      <About />
      <Cta />
      <Team />
    </Main>
  )
}