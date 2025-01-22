import Clocks from './Clocks.js';

const Header = () => {
    return(
      <div className='header'>
        <div>
          <h1 className='brandname'>GRASSTONE</h1>
        </div>
        <div>
         <Clocks/>
        </div>
     </div>
    )
  }

export default Header;