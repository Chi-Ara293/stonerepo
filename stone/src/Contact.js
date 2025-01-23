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
           <p>Please DM me via Instagram or fill out the form below.</p>
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