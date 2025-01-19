import logo2 from './assets/logo2.png'

const imgStyle ={
    width: '150px',
    height: 'auto'
}

const Header = () => {
    return(
     <div className='header'>
       <div className='brandlogo'>
          <img src={logo2} alt="Logo" style={imgStyle}/>
          <h1 className='brandname'>GRASSTONE</h1>
       </div>
     </div>
    )
  }

export default Header;