import { useState } from "react";
import './Contact.css';

const Contact = () => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, phone);
       }

    const labelStyle = {
        display: "block",
        marginBottom: "5px"
    }

    const inputStyle = {
        maxWidth: "400px",
        borderRadius: "4px",
        border: "1px solid #ccc"
    }

    return(
        <div>
           <h2>Contact</h2>
           <p>Please fill the form below.</p>
           <form onSubmit={handleSubmit} style={{maxWidth: "400px", margin:"0 auto"}}>
             <div>
               <label htmlFor="name" style={labelStyle}>Name:</label>
               <input
                 type="text"
                 minLength="3"
                 maxLength="10"
                 id="name"
                 autoComplete="on"
                 required
                 onChange={(e) => setName(e.target.value)}
                 style={inputStyle}/>
             </div>
             <div>
                <label htmlFor="email" style={labelStyle}>Email address:</label>
                <input
                 type="email"
                 id="email"
                 name="email"
                 autoComplete="on"
                 required
                 onChange={(e) => setEmail(e.target.value)}
                 style={inputStyle}/>
             </div>
             <div>
                <label htmlFor="phone" style={labelStyle}>Phone number (option):</label>
                <input
                 type="tel"
                 id="phone"
                 name="phone"
                 autoComplete="on"
                 onChange={(e) => setPhone(e.target.value)}
                 style={inputStyle}/>
             </div>

             <button type="submit" className="signin"><b>Sign In</b></button>
           </form>
        </div>
    )
}

export default Contact;