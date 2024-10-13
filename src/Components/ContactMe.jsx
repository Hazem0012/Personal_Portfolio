import React, {useState,useRef} from 'react'
import emailjs from '@emailjs/browser';


function ContactMe() {
  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_okns684', 'template_2voe9zp', form.current, {
        publicKey: '5m8iJPLnl2LRKBegN',
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          
          form.current.reset();
          
          alert('Email has been sent successfully!');
          
           
        },
        
        (error) => {
          console.log(error.text);
        }
      );
  };





  return (
    <div className='snap-always snap-center'>
      <div className=' text-gray-600 flex flex-row justify-around relative' style={{marginLeft: '15%', marginRight: '15%', marginTop:'8%', marginBottom:'4%'}}>
        
        <div className=' w-1/3 '> 
          <p className='text-3xl text-cyan-500 font-bold' style={{marginBottom:'3%'}}>Contact Me</p>
      
          <p className='text-md ' style={{marginBottom:'5%'}}>I am currently in my last year of study seeking opportunities. Please do not hesitate to reach 
          out to discuss future opportunities or even to just say hi! I will do my best to get back to you in time</p>

          <div className=' flex flex-row justify-around items-center'>
            <a href='https://github.com/Hazem0012' target='_blank' rel="noopener noreferrer" className='w-full' style={{width:'13%' ,height:'13%'}} >
            <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='Github'  className=' cursor-pointer'/>
            </a>
            <a href='https://www.linkedin.com/in/hazem-alsagheer/' target='_blank ' rel="noopener noreferrer" style={{width:'18%'}}  className='w-full'>
              <img src='https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png' alt='LinkedIn' className=' cursor-pointer'/>
            </a>
          </div>


        </div> 

        <div className=' w-1/3 h-1/2 '>
        <form className='flex flex-col justify-center h-full ' ref={form} onSubmit={sendEmail}>
          <label htmlFor='subject' style={{marginTop:'5%', marginBottom: '2%'}} > Name </label>
          <input type="text" name="user_name" placeholder=' Jeremy ' required  className=' px-3 border-2 border-cyan-500 rounded-lg py-1'/>


          <label htmlFor='email' style={{marginTop:'5%', marginBottom: '2%'}} > Email</label>
          <input type="email"name="user_email" placeholder=' jeremy@gmail.com' required  className=' px-2 border-2 border-cyan-500 rounded-lg py-1'/>


          <label htmlFor='message' style={{marginTop:'5%', marginBottom: '2%'}} > Message</label>
          <textarea type="text" name="message" placeholder=' type your message in here ...' required className=' border-2 border-cyan-500 rounded-lg h-1/2 px-2'/>

          <button type="submit" value="Send"  className=' transition ease-in-out duration-75 rounded-full font-medium bg-cyan-500 text-gray-700 hover:bg-cyan-600 cursor-pointer p-2 my-8 text-lg w-11/12 items-center ' style={{marginLeft: '4.3%'}} >
            Submit
          </button>
        </form>
          
        {
        //<div className=' bg-cyan-500 w-lvw  absolute -z-10'style={{left:'-23%', bottom:'-25%', height:'75vh'} }></div>
        }
        </div>
        
      </div>
      
    </div>
  )
}

export default ContactMe