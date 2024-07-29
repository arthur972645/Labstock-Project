import { Link } from "react-router-dom";
import { Main_Buttons, Styled_buttons } from "./Buttons.js";

const Buttons = ({ Texto  ,user,senha }) => {
  console.log(user,senha)
  const data = [
    { id: 1, usuario: 'adm@labstock.dev.com', senha: 'labstockdev'},
    { id: 2, usuario: 'jeannynneleite@labstock.prof.com', senha: 'labstock11' },
    { id: 3, usuario: 'adeliavertano@labstock.prof.com', senha: 'labstock22' },
    { id: 4, usuario: 'marcoscesar@labstock.prof.com', senha: 'labstock33' },
    { id: 5, usuario: 'marcosalves@labstock.prof.com', senha: 'labstock44' },
  ];
 let verify = data.find((obj) => obj.usuario === user && obj.senha === senha);
 if(verify){
  return (
    <>

      <>
        <Main_Buttons className="Buttons">
         <Link to="/Home"> 
            <Styled_buttons type="submit">{Texto}</Styled_buttons>
          </Link> 
        </Main_Buttons>
      </>
    
    </> 
  );
}
else{
  return (
    <>

      <>
        <Main_Buttons className="Buttons">
  
            <Styled_buttons type="submit">{Texto}</Styled_buttons>
        
        </Main_Buttons>
      </>
    
    </> 
  );
}


};
export default Buttons;
