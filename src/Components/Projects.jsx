import React, { useState } from 'react'

function Projects() {
  
  return (
    <div className='snap-always snap-center'>
        <div className=' text-gray-600' style={{ marginTop:'4%', marginBottom:'4%'}}>
          <div className=' flex justify-center flex-col items-center' style={{marginBottom:'6%'}}>
            <p className=' text-6xl text-cyan-500 font-bold text-center' style={{marginBottom:'1.5%'}}>Projects</p>
            <hr className=' bg-black h-1 opacity-70 rounded-lg ' style={{width:'4%', marginTop:'0.2%'}} />
           
          </div>
          <div className=' flex flex-col justify-around' style={{marginTop:'5%'}}>
            {/*Project 1*/}
            <div className=' flex flex-row w-full justify-center ' style={{}} >
              <a href='https://github.com/Hazem0012/Tic-Tac-Toe' target='_blank' rel="noopener noreferrer" style={{width: '30%'}}>
                  <img className=' transition transform hover:scale-125 delay-0 ease-in-out duration-75' style={{  width:'100%'}} src='https://cdn3.iconfinder.com/data/icons/brain-games/1042/Tic-Tac-Toe-Game.png'/>  
              </a>
              <div className=' w-1/2 flex-col' style={{marginLeft:'5%'}}>
              <a href='https://github.com/Hazem0012/Tic-Tac-Toe' target='_blank' rel="noopener noreferrer" className=' text-center items-center justify-center flex'>
                  <p className=' text-4xl font-bold text-black text-center w-fit transition transform hover:scale-110 hover:text-cyan-500 ease-in-out duration-75' style={{paddingTop:'15%'}}>
                    Tic Tac Toe Game
                  </p>
                </a>
                <p className=' text-lg text-gray-500'style={{marginTop:'5%', paddingLeft:'20%', paddingRight:'15%'}}>
                This is a console-based Tic Tac Toe game developed in Python, 
                featuring an intelligent AI opponent using the minimax algorithm with alpha-beta pruning. 
                The AI efficiently calculates the optimal moves, providing a challenging gameplay experience. 
                Perfect for those who enjoy classic games with a strategic twist!
                </p>
                <div style={{marginTop:'2%',paddingLeft:'20%', paddingRight:'15%'}}>
                  <p className='font-semibold text-black text-xl' >
                    Languages Used
                  </p>
                  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/2048px-Python_logo_01.svg.png' className=' w-1/12 transition transform hover:scale-125 delay-0 ease-in-out duration-75' style={{marginTop:'1%'}} />
                </div>
              </div>
            </div>
            {/*Project 2*/}
            <div className=' flex flex-row w-full justify-center ' style={{}} >
            <a href='https://github.com/Hazem0012/Weather-App' target='_blank' rel="noopener noreferrer"  style={{  width:'30%'}}>
                <img className=' transition transform hover:scale-125 delay-0 ease-in-out duration-75' style={{  width:'100%'}} src='https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png'/>  
            </a>
              <div className=' w-1/2 flex-col' style={{marginLeft:'5%'}}>
                <a href='https://github.com/Hazem0012/Weather-App' target='_blank' rel="noopener noreferrer" className=' text-center items-center justify-center flex' >
                  <p className=' text-4xl font-bold text-black text-center w-fit transition transform hover:scale-110 hover:text-cyan-500 ease-in-out duration-75' style={{paddingTop:'15%'}}>
                    Weather App
                  </p>
                </a>
                <p className=' text-lg text-gray-500'style={{marginTop:'5%', paddingLeft:'20%', paddingRight:'15%'}}>
                  This weather app provides up-to-date weather information, including current conditions and detailed daily 
                  and hourly forecasts for any location you search. Powered by the OpenWeather API, it delivers accurate and 
                  reliable data to help you plan your day and stay prepared for any conditions.
                </p>

                <div style={{marginTop:'2%',paddingLeft:'20%', paddingRight:'15%'}}>
                  <p className='font-semibold text-black text-xl' >
                    Languages Used
                  </p>
                  <div className=' flex flex-row justify-start'>
                    <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' className=' w-1/12 transition transform hover:scale-125 delay-0 ease-in-out duration-75' style={{marginTop:'1%'}} />
                    <img src='https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png' className=' w-1/12 transition transform hover:scale-125 delay-0 ease-in-out duration-75' style={{marginTop:'1%', marginLeft:'1%'}} />
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png' className=' w-1/12 transition transform hover:scale-125 delay-0 ease-in-out duration-75' style={{marginTop:'1%', marginLeft:'1%'}} />
                    <img src='https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png' className=' w-1/12 transition transform hover:scale-125 delay-0 ease-in-out duration-75' style={{marginTop:'1%', marginLeft:'1%',width:''}} />

                  
                  </div> 
                  </div>
              </div>
            </div>
            
          </div>
        </div>
        
    </div>
  )
}

export default Projects