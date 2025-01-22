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
       <li className='navItem'>
         <Link to="/">Home</Link>
       </li>
       <li className='navItem'>
         <Link to="/about">About</Link>
       </li>
       <li className='navItem'>
         <Link to="/contact">Contact</Link>
       </li>
       <li className='navItem'>
         <img src={instagram_icon} alt='icon of instagram' style={iconStyle}/>
       </li>
       <li className='navItem'>
         <img src={treads_icon} alt='icon of treads' style={iconStyle} />
       </li>
    </ul>
  )
}

export default Nav;
