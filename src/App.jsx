import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login/Login.jsx'
import Home from './Pages/Home/Home.jsx'

const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>  
      <Route path='/Home' element={<Home/>}></Route>  
      
      
    </Routes>
  </BrowserRouter>
  )
}
export default App