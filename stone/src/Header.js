import Clocks from './Clocks.js';
import logo2 from './assets/logo2.png'

const logoStyle = {
  width: '100px',
  height: 'auto'
}

const Header = () => {
    return(
      <div className='header'>
        <div className='brand'>
          <img src={logo2} alt='logo' style={logoStyle}/>
          <h1 className='brandName'>Grasstone</h1>
        </div>
        <div>
         <Clocks/>
        </div>
     </div>
    )
  }

export default Header;