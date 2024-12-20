import cloaf from './assets/cloaf.png'

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
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
         </ul>
     </div>
    )
}

export default Header;