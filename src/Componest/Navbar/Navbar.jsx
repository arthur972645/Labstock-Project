import Imagem_logo from '../../assets/Home/LABSTOCK-removebg-preview 2.png'
import { Link } from 'react-router-dom'
import {Rotas_Styled_Link, Sessao_navbar, Box_navbar, Box_caminho } from './Navbar.js'


const Navbar = () => {
  return(
     <Sessao_navbar className="Sessao-navbar">
      <Box_navbar className='Box-navbar'>
        <div  className="Logo">
          <Link to='/Home'> 
            <img src={Imagem_logo} alt="" />
          </Link>
          
        </div>
        <Box_caminho  className="Box-caminhos">
          <div className="Box-agendamento">
            <Rotas_Styled_Link to='/Agendamento'>AGENDAMENTO</Rotas_Styled_Link>
            
          </div>
          <div className="Box-equipamentos">
            <Rotas_Styled_Link to='/Equipamentos'> EQUIPAMENTOS </Rotas_Styled_Link>
            
          </div>
          <div className="Box-registro">
            <Rotas_Styled_Link to='/Registro'>REGISTRO</Rotas_Styled_Link>
            
          </div>
        </Box_caminho >
      </Box_navbar>
      
     </Sessao_navbar>
  )
}
export default Navbar