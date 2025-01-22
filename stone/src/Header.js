import logo2 from './assets/logo2.png'
import Clocks from './Clocks.js';

const imgStyle ={
    width: '120px',
    height: 'auto'
}

const Header = () => {
    return(
     <div className='header'>
       <div className='brandlogo'>
          <img src={logo2} alt="Logo" style={imgStyle}/>
          <h1 className='brandname'>GRASSTONE</h1>
       </div>
       <div>
         <Clocks/>
       </div>
     </div>
    )
  }

export default Header;