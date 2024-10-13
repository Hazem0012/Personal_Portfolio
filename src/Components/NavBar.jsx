import React from 'react'

function NavBar() {
  return (
    <div className='   w-full flex flex-row snap-always snap-center '>
      <img  style={{width:'3%', margin:'1.5%'}} src="https://i.imgur.com/LoGKbTk.png" />
      <a href='https://github.com/Hazem0012/Resume/raw/main/Resume.pdf'>
        <button className=' absolute rounded-3xl from-cyan-300 to-sky-600 bg-gradient-to-br
        text-white text-lg font-medium shadow-md shadow-gray-400 transition transform hover:scale-105 
        delay-0 ease-in-out duration-75' style={{right: '4%', top:'2%', paddingRight:'2%', 
        paddingLeft:'2%', paddingTop:'1%', paddingBottom:'1%'}}> 
          Download CV
        </button>
      </a>
    </div>
  )
}

export default NavBar