import { Link } from 'react-router-dom'

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
         <Link to="/book">Book</Link>
       </li>
       <li>
         <Link to="/contact">Contact</Link>
       </li>
    </ul>
  )
}

export default Nav;
