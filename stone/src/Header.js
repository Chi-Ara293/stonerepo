import cloaf from './assets/cloaf.png'

const Header = () => {
    return(
     <div className="header">
        <h1>Grasstone</h1>
        <img src={cloaf} alt="Logo" className="img"/>
     </div>
    )
}

export default Header;