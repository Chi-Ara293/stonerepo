import cloaf from './assets/cloaf.png'
import { Link } from 'react-router-dom'

const imgStyle ={
    width: '150px',
    height: 'auto'
}

const Header = () => {
    return(
     <div className="container">
         <div className="header">
             <h1 className='logo'>Grasstone</h1>
             <img src={cloaf} alt="Logo" style={imgStyle}/>
         </div>
         <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/book">Book</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link></li>
         </ul>
     </div>
    )
}

export default Header;