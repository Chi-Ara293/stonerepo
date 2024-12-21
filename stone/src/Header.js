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
             <h1 style={{color:'white'}} >Grasstone</h1>
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
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link></li>
         </ul>
     </div>
    )
}

export default Header;