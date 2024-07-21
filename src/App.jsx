import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login/Login.jsx'
import Home from './Pages/Home/Home.jsx'
import Agendamento from './Pages/Agendamento/Agendamento.jsx'
import Equipamentos from './Pages/Equipamentos/Equipamentos.jsx'
import Registro from './Pages/Registro/Registro.jsx'

const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>  
      <Route path='/Home' element={<Home/>}></Route>  
      <Route path='/Agendamento' element={<Agendamento/>}></Route>  
      <Route path='/Equipamentos' element={<Equipamentos/>}></Route>  
      <Route path='/Registro' element={<Registro/>}></Route>  
      
      
    </Routes>
  </BrowserRouter>
  )
}
export default App