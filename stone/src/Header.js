import cloaf from './assets/cloaf.png'

const imgStyle ={
    width: '150px',
    height: 'auto'
}

const Header = () => {
    return(
     <div className="header">
        <h1 style={{color:'white'}} >Grasstone</h1>
        <img src={cloaf} alt="Logo" style={imgStyle}/>
     </div>
    )
}

export default Header;