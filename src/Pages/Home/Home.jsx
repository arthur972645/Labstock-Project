import React from "react";
import Navbar from "../../Componest/Navbar/Navbar.jsx"
import Footer from "../../Componest/Footer/Footer.jsx";
import Home_components from "../../Componest/Home_components/Home_components.jsx";
import { SessaoFooter, SessaoHome, CorFundo } from "./Home.js"; 



const Home = () => {
  return(
  <>
      <Navbar/>
      <SessaoHome>
        <Home_components/>
      </SessaoHome>
      <SessaoFooter>
        <Footer/>
      </SessaoFooter>
    </>  
   
    
  )
}
export default Home