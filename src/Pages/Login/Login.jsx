import Imagem_Logo from '../../assets/Login/LOGO-LABSTOCK (1).png'
import Buttons from '../../Componest/Buttons/Buttons'
import './Login.css'

const Login = () => {
  return(
    <main className="Img-Fundo">
      <section className="Sessao-Login">
        <div className="Box-Login">
          <div className="Box-Logo">
            <img className='Logo' src={Imagem_Logo} alt="" />
          </div>
          <div className="Box-Inputs">
            <div className="Box-Input-Usuarios">
              <p>Usuarios:</p>
              <input className='Inout-User' type="text" />
            </div>
            <div className="Box-Input-Senha">
              <p>Senha: </p>
              <input type="text" />
            </div>
          </div>
          <div className="Box-Btn">
            <Buttons
              Login="Login"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
export default Login