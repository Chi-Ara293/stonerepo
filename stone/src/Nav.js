import { Link } from 'react-router-dom'
import instagram_icon from './assets/instagram_icon.png'
import treads_icon from './assets/treads_icon.png'

const iconStyle ={
  width: '25px',
  height: 'auto',
}

const Nav = () => {
  return(
     <ul className="nav">
       <li>
         <Link to="/">Home</Link>
       </li>
       <li>
         <Link to="/about">About</Link>
       </li>
       <li>
         <Link to="/contact">Contact</Link>
       </li>
       <li>
         <img src={instagram_icon} alt='icon of instagram' style={iconStyle}/>
       </li>
       <li>
         <img src={treads_icon} alt='icon of treads' style={iconStyle} />
       </li>
    </ul>
  )
}

export default Nav;
