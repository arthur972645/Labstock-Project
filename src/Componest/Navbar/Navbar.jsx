import Imagem_logo from '../../assets/Home/LABSTOCK-removebg-preview 2.png'
import { Link } from 'react-router-dom'
import {Rotas_Styled_Link, Sessao_navbar, Box_navbar, Box_caminho } from './Navbar.js'
// import './Navbar.css'

const Navbar = () => {
  return(
     
      <Box_navbar className='Box-navbar'>
        
          <Link to='/Home'> 
            <img src={Imagem_logo} alt="" />
          </Link>
          
        <Box_caminho  className="Box-caminhos">
            <Rotas_Styled_Link to='/Agendamento'>AGENDAMENTO</Rotas_Styled_Link>
            <Rotas_Styled_Link to='/Equipamentos'> EQUIPAMENTOS </Rotas_Styled_Link>
            <Rotas_Styled_Link to='/Registro'>REGISTRO</Rotas_Styled_Link>
        </Box_caminho >

      </Box_navbar>
  )
}
export default Navbar