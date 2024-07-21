import Imagem_Logo from '../../assets/Login/LOGO-LABSTOCK (1).png'
import Buttons from '../../Componest/Buttons/Buttons'
import {Img_Fundo ,Sessao_Login, Box_Login, Box_Logo, Logo, Box_Inputs, Box_Input_Senha, Input, Paragrafo} from './Login.js'


const Login = () => {
  return( 
    <Img_Fundo  className="Img-Fundo">
      <Sessao_Login className="Sessao-Login">
        <Box_Login className="Box-Login">
          <Box_Logo className="Box-Logo">
            <Logo className='Logo' src={Imagem_Logo} alt="Link da imagem<a href=https://br.freepik.com/psd-gratuitas/design-de-borda-de-ondas-gradientes_64807566.htm>Imagem de freepik</a>" />
          </Box_Logo>
          <Box_Inputs className="Box-Inputs">
            <div className="Box-Input-Usuarios">
              <Paragrafo>Usuarios:</Paragrafo>
              <Input className='Inout-User' type="text" />
            </div>
            <Box_Input_Senha className="Box-Input-Senha">
              <Paragrafo>Senha: </Paragrafo>
              <Input type="text" />
            </Box_Input_Senha>
          </Box_Inputs>
          <div className="Box-Btn">
            <Buttons
              Login="Login"
            />
          </div>
        </Box_Login>
      </Sessao_Login>
    </Img_Fundo >
  )
}
export default Login