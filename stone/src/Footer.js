import copyright_icon from './assets/copyright_icon.png'

const copyright = {
    width:'10px',
    height: 'auto',
}
const Footer = () => {
    return(
      <div className="footer">
        <p>Copyright <img src={copyright_icon} alt="copyright icon" style={copyright}/> Grasstone 2025</p>
      </div>
    )
}

export default Footer;