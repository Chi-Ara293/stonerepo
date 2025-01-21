import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './Header.js'
import Clocks from './Clocks.js';
import Nav from './Nav.js';
import Home from './Home.js';
import About from './About.js'
import Contact from './Contact.js';
import Footer from './Footer.js'


function App() {
  return (
    <BrowserRouter>
     <div className="App">
       <Header/>
       <Clocks/>
       <Nav/>
         <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="about" element={<About/>}/>
           <Route path="contact" element={<Contact/>}/>
         </Routes>
       <Footer className='footer'/>
     </div>
    </BrowserRouter>
  );
}

export default App;
