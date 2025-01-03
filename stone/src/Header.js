import cloaf from './assets/cloaf.png'
import Tokyo from './Tokyo'
import Toronto from './Toronto'

const imgStyle ={
    width: '150px',
    height: 'auto'
}

const Header = () => {
    return(
     <div className='header'>
       <div className='brand'>
          <h1 style={{color:'orange'}}>Grasstone</h1>
          <img src={cloaf} alt="Logo" style={imgStyle}/>
       </div>
       <div className='clock'>
          <Toronto/>
          <Tokyo/>
       </div>
     </div>
    )
  }

export default Header;