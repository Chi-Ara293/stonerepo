import { useState } from "react";

const Contact = () => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, phone);
        e.target.reset();
       }

    return(
        <div className="contact">
           <h2>Contact</h2>
           <div>
             <p><i><b>Please DM me via {''}
              <a
                href="https://www.instagram.com/grasstone_/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-link">
                Instagram.
              </a>
             </b></i></p>
             <p className="contact-text"> *The form below is currently unavailable.</p>
           </div>
           <form className='form' onSubmit={handleSubmit}>
             <div>
               <label className='label' htmlFor="name">Name:</label>
               <input className="feild"
                 type="text"
                 minLength="3"
                 maxLength="10"
                 id="name"
                 autoComplete="on"
                 required
                 onChange={(e) => setName(e.target.value)}/>
             </div>
             <div>
                <label className='label' htmlFor="email">Email address:</label>
                <input className="feild"
                 type="email"
                 id="email"
                 name="email"
                 autoComplete="on"
                 required
                 onChange={(e) => setEmail(e.target.value)}/>
             </div>
             <div>
                <label className="label" htmlFor="phone">Phone number (option):</label>
                <input className="feild"
                 type="tel"
                 id="phone"
                 name="phone"
                 autoComplete="on"
                 onChange={(e) => setPhone(e.target.value)}/>
             </div>
             <div>
                <label className="label" htmlFor="message">Message:</label>
                <textarea className="feild2"
                 type="message"
                 id="message"
                 name="message"
                 rows='8'
                 cols='50'
                 autoComplete="off"
                 onChange={(e) => setPhone(e.target.value)}/>
             </div>
             <button type="submit" className="send"><b>Send</b></button>
           </form>
        </div>
    )
}

export default Contact;