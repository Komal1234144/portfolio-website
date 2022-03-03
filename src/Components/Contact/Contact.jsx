import React , {useState} from 'react'
import {GitHub , MailOutline} from '@mui/icons-material';
import './__contact.scss';

const Contact = () => {
  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [message , setMessage] = useState('');
  const [send , setSend] = useState(false);
  const [error , setError] = useState('');

  function encode(data) {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) +
                "=" +
                encodeURIComponent(data[key])
        )
        .join("&");
}

function handleSubmit(e) {
    e.preventDefault();
    if(!name || !email || !message){
       setError('Please fill out all the fields')
     return  setTimeout(()=>{
          setError('')
      },3000) 
    }
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
    })
        .then(() => setSend(true))
        .catch((error) => setError(error));
     
     setTimeout(()=>{
      setName('')
      setEmail('')
      setMessage('')
      setSend(false)
      setError('') 
     },5000)  
}


  return (
    <div className='contact' id="contact">
       <div className='contact__left'>
         <img src="./assets/shake.svg" alt="image"/>
         <div>
            <span><a className='contactIcons' href='https://github.com/Komal1234144'><GitHub className='icon'/></a></span>
            <span><a className='contactIcons' href='mailto:tolambia.komal5@gmail.com'><MailOutline className='icon'/></a></span>
         </div>
       </div>
       <div className='contact__right'>
         <p>Contact</p>
         
         <form
         netlify="true"
         name="contact"
         onSubmit={handleSubmit}
     >
         
         <div>
             <label htmlFor="name">
                 Name
             </label>
             <input
                 type="text"
                 id="name"
                 name="name"
                 value={name}
                 onChange={(e) => setName(e.target.value)}
             />
         </div>
         <div>
             <label htmlFor="email">
                 Email
             </label>
             <input
                 type="email"
                 id="email"
                 name="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
             />
         </div>
         <div>
             <label htmlFor="message">
                 Message
             </label>
             <textarea
                 id="message"
                 name="message"
                 value={message}
                 onChange={(e) => setMessage(e.target.value)}
             />
         </div>
         <button type="submit">
             Submit
         </button>
     </form>


         {send && <p style={{color : '#1cb81c' , fontSize : '22px' , fontWeight : 800, letterSpacing :'-1px'}}>Thank You! I'll reply ASAP :)</p>}

         {error !=='' && <p style={{color : '#1cb81c' , fontSize : '22px' , fontWeight : 800, letterSpacing :'-1px'}}>{error}</p>}

       </div>
    </div>
  )
}

export default Contact;