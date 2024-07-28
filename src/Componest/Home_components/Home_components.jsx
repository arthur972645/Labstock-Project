import BoxHome from "../BoxHome/BoxHome.jsx"
import Carrosol from "../Carrosel_Home/Carrosel.jsx"
import {Texto, Titulo1, Subtitulo1, SessaoBoxHome} from './Home_components.js'

const Home_components = () => {
  return(
    <>
      <Texto>
        <Titulo1>
          <p>BEM-VINDO AO LABSTOCK</p>
        </Titulo1>
        <Subtitulo1>
          <p>Descubra uma novo modo de gerenciamento dos laboratórios de ciências com o LABSTOCK, o software focado para organização e controle das atividades laboratoriais.</p>
        </Subtitulo1>
      </Texto>
      <section className="Carrosel">
        <Carrosol/>
      </section>
      <SessaoBoxHome>
        <BoxHome/>
      </SessaoBoxHome>  
   </>
  )
}

export default Home_components