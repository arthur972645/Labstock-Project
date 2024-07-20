import { Link } from 'react-router-dom'
import './Buttons.css'

const Buttons = ({Login}) => {
  return(
    <main className='Buttons'>
      <Link to='/Home'>
        <button>{Login}</button>
      </Link>
      
    </main>
    
  )
}
export default Buttons