import { Link } from 'react-router-dom'
import {Main_Buttons, Styled_buttons} from './Buttons.js'


const Buttons = ({Texto}) => {
  return(
    <Main_Buttons className='Buttons'>
      <Link to='/Home'>
        <Styled_buttons type='submit'>{Texto}</Styled_buttons>
      </Link>
      
    </Main_Buttons>
    
  )
}
export default Buttons