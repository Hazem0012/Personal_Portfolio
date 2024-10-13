import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function IntroductionBar() {
  return (
    <div  className=' w-full snap-always snap-center ' style={{height: '90vh'}}>
      <div className=' flex flex-row justify-around items-center' style={{ marginTop:'8%', paddingLeft:'15%', paddingRight:'15%'}}>
        <p className=' text-5xl text-cyan-500 font-bold' style={{width:'60%'}}>
        <TypeAnimation
        sequence={[
            // Same substring at the start will only be typed out once, initially
            "I'm a Software Engineer",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "I'm a Data Engineer",
            1000,
            "I'm a Web Developer",
            1000,
            
          ]}
          wrapper="span"
          speed={50}
          style={{  display: 'inline-block' }}
          repeat={Infinity}
        />
          <p className=' text-xl text-gray-500 font-normal' style={{marginTop:'3%', width:'60%'}}>
          
            I’m glad you’re here! Explore to learn more about who I am, what I do, 
            and what drives my passion for technology and creativity.
          </p>
        </p>

         <div className='  w-96 h-96 relative' style={{borderRadius:''}}>
          <img src='https://i.imgur.com/THsgs9f.png' className='  h-full w-full absolute ' />

         </div>
        
      </div>

    </div>
  )
}

export default IntroductionBar