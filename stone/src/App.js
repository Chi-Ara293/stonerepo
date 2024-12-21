import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './Header.js'
import Home from './Home.js';
import About from './About.js'
import Blog from './Blog.js'
import Contact from './Contact.js';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
       <Header/>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="about" element={<About/>}/>
           <Route path="contact" element={<Contact/>}/>
           <Route path="blog" element={<Blog/>}/>
        </Routes>
     </div>
   </BrowserRouter>
  );
}

export default App;
