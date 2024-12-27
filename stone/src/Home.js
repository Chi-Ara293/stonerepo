import ctray from './assets/ctray.png'
import blackcat from './assets/blackcat.jpg'
import sofacat from './assets/sofacat.png'
import './Home.css'

const Home = () => {
    return(
      <div>
         <h1>Welcome to My Homepage</h1>
         <div className='home'>
             <div className='card'>
                <img src={sofacat} alt='drawing' style={{width: '200px', height: 'auto'}}/>
                <h4>Hello</h4>
             </div>
             <div className='card2'>
                <img src={blackcat} alt='drawing' style={{width: '300px', height: 'auto'}}/>
                <h4>Everyone</h4>
             </div>
             <div className='card3'>
                <img src={ctray} alt='drawing' style={{width: '300px', height: 'auto'}}/>
                <h4>what's up?</h4>
             </div>
         </div>
      </div>
    )
}

export default Home;