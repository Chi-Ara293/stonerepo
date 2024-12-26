import cloaf from './assets/cloaf.png'
import Tokyo from './Tokyo'
import Toronto from './Toronto'

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
         <div>
           <Toronto/>
           <Tokyo/>
         </div>
     </div>
    )
}

export default Header;