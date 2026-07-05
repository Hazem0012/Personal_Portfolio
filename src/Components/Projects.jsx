import React, { useState } from 'react'

function Projects() {
  
  return (
    <div className='snap-always snap-center'>
        <div className=' text-gray-600' style={{ marginTop:'4%', marginBottom:'4%'}}>
          <div className=' flex justify-center flex-col items-center' style={{marginBottom:'6%'}}>
            <p className=' text-6xl text-cyan-500 font-bold text-center' style={{marginBottom:'1.5%'}}>Projects</p>
            <hr className=' bg-black h-1 opacity-70 rounded-lg ' style={{width:'4%', marginTop:'0.2%'}} />
           
          </div>
          <div className=' flex flex-col justify-around' style={{marginTop:'5%', marginLeft: '6.5%'}}>

             {/*Project 1*/}
             <div className=' flex flex-row w-full justify-center space-x-[1%]' style={{marginTop:'0%'}} >
              <a href='https://drive.google.com/file/d/15aYz0xzCJjqRbDMmEUaaOGyJLNWoe88d/view?usp=sharing' target='_blank' rel="noopener noreferrer" style={{width: '28%', marginTop:'1%'}}>
                  <img className=' transition transform hover:scale-125 delay-0 ease-in-out duration-75' style={{  width:'100%'}} src='https://cdn-icons-png.freepik.com/512/1461/1461141.png'/>  
              </a>
              <div className=' w-1/2 flex-col px-[9%]' style={{marginLeft:'5%'}}>
              <a href='https://drive.google.com/file/d/15aYz0xzCJjqRbDMmEUaaOGyJLNWoe88d/view?usp=sharing' target='_blank' rel="noopener noreferrer" className=' text-center items-center justify-center flex'>
                  <p className=' text-4xl font-bold text-black text-center w-fit transition transform hover:scale-110 hover:text-cyan-500 ease-in-out duration-75' style={{paddingTop:'%'}}>
                    Face Emotion Recognition
                  </p>
                </a>
                <p className=' text-lg text-gray-500'style={{marginTop:'5%'}}>
                In this project, I trained the ResNet50 model on the RAF-DB dataset to recognize emotions across 7 categories, hitting an 81% accuracy. 
                I used techniques like data augmentation, dropout, and regularization to make sure the model performed well and didn’t overfit.
                 I also built a real-time emotion detection app in Python, combining the trained model with Haar Cascade for face detection. 
                 This project was a great chance for me to apply machine learning in a hands-on way, and I’m excited to share the results!
                </p>
                <div className='w-full' style={{marginTop:'2%'}}>
                  <p className='font-semibold text-black text-xl' >
                    Tech Stack
                  </p>
                  <div className=' flex flex-row justify-start w-full space-x-[15%]'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/3840px-Python-logo-notext.svg.png' className=' w-[9%] transition transform hover:scale-125 delay-0 ease-in-out duration-75' style={{marginTop:'1%'}} />
                    <img src="https://static.vecteezy.com/system/resources/previews/072/677/636/non_2x/tensorflow-logo-tensorflow-icon-free-png.png" alt="TensorFlow Logo" className=' w-1/12 transition transform hover:scale-125 delay-0 ease-in-out duration-75'style={{marginTop:'1%', marginLeft:'1%'}}/>
                    <img src="https://research.shu.ac.uk/aces/guardians/opencv_logo.png" alt="OpenCV" className=' w-[10%] transition transform hover:scale-125 delay-0 ease-in-out duration-75'style={{marginTop:'1%', marginLeft:'1%'}}/>
                    <img src="https://img.icons8.com/?size=512&id=aR9CXyMagKIS&format=png" alt="Numpy Logo" className=' w-1/12 transition transform hover:scale-125 delay-0 ease-in-out duration-75'style={{marginTop:'1%', marginLeft:'1%'}}/>
                  </div> 
                </div>
              </div>
            </div>


            {/*Project 2*/}
            <div className=' flex flex-row w-full justify-center ' style={{marginTop:'5%'}} >
              
              <div className=' w-1/2 flex-col px-[9%]' style={{marginLeft:'-15%'}}>
              <a href='https://echosofink.ca' target='_blank' rel="noopener noreferrer" className=' text-center items-center justify-center flex'>
                  <p className=' text-4xl font-bold text-black text-center w-fit transition transform hover:scale-110 hover:text-cyan-500 ease-in-out duration-75' style={{paddingTop:'15%'}}>
                    Journaling App: Echos Of Ink
                  </p>
                </a>
                <p className=' text-lg text-gray-500'style={{marginTop:'5%'}}>
                Echoes of Ink is a full-stack journaling platform I built end-to-end with a focus on security, reliability, 
                and real-world deployment. The application uses a React and TypeScript frontend backed by a FastAPI service with 
                PostgreSQL, containerized with Docker and deployed on AWS. I designed authenticated REST APIs, implemented robust 
                data validation, and engineered encrypted journal storage to protect user content at rest. This project reflects how 
                I approach software engineering: treating side projects like production systems, from architecture and security to 
                deployment and maintenance.
                </p>
                <div style={{marginTop:'2%'}}>
                  <p className='font-semibold text-black text-xl' >
                    Tech Stack
                  </p>
                  <div className='flex flex-row justify-start items-center space-x-[1%]'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/3840px-Python-logo-notext.svg.png' alt='Python' className=' w-1/12 transition transform hover:scale-125 delay-0 ease-in-out duration-75' style={{marginTop:'1%'}} />
                    <img src='https://i.pinimg.com/originals/06/86/c0/0686c0c85407548ea5bd737a572974b6.png' alt='PostgreSQL' className=' w-[11%] transition transform hover:scale-125 delay-0 ease-in-out duration-75' style={{marginTop:'1%'}} />
                    <img src='https://logospng.org/download/typescript/typescript-4096.png' alt='TypeScript' className=' w-1/12 transition transform hover:scale-125 delay-0 ease-in-out duration-75' style={{marginTop:'1%'}} />
                    <img src='https://www.pngall.com/wp-content/uploads/15/React-Logo-PNG-Images.png' alt='React' className=' w-1/12 transition transform hover:scale-125 delay-0 ease-in-out duration-75' style={{marginTop:'1%'}} />
                    <img src='https://cdn.worldvectorlogo.com/logos/fastapi.svg' alt='FastAPI' className=' w-1/12 transition transform hover:scale-125 delay-0 ease-in-out duration-75' style={{marginTop:'1%'}} />
                    <img src='https://www.pngplay.com/wp-content/uploads/3/Amazon-Web-Services-AWS-Logo-Transparent-PNG.png' alt='AWS' className=' w-1/12 transition transform hover:scale-125 delay-0 ease-in-out duration-75' style={{marginTop:'1%'}} />

                
                  </div>
           
                
                </div>
              </div>
              
              <a href='https://echosofink.ca' target='_blank' rel="noopener noreferrer" style={{width: '30%', marginLeft:'4%',marginTop:'4%'}}>
                  <img className=' transition transform hover:scale-125 delay-0 ease-in-out duration-75' style={{  width:'100%'}} src='https://wallpapers.com/images/hd/eucalyptus-watercolor-journal-png-xxd-d7pmzwk7z1ikh0u2.png'/>  
              </a>
            </div>

            {/*Project 3*/}
            <div className=' flex flex-row w-full justify-center SPACE-X-[1%] ' style={{}} >
            <a href='https://hazem0012.github.io/Weather-App/' target='_blank' rel="noopener noreferrer"  style={{  width:'30%',marginTop:'4%'}}>
                <img className=' transition transform hover:scale-125 delay-0 ease-in-out duration-75' style={{  width:'100%'}} src='https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png'/>  
            </a>
              <div className=' w-1/2 flex-col px-[9%]' style={{marginLeft:'5%'}}>
                <a href='https://hazem0012.github.io/Weather-App/' target='_blank' rel="noopener noreferrer" className=' text-center items-center justify-center flex' >
                  <p className=' text-4xl font-bold text-black text-center w-fit transition transform hover:scale-110 hover:text-cyan-500 ease-in-out duration-75' style={{paddingTop:'15%'}}>
                    Weather App
                  </p>
                </a>
                <p className=' text-lg text-gray-500'style={{marginTop:'5%'}}>
                  This weather app provides up-to-date weather information, including current conditions and detailed daily 
                  and hourly forecasts for any location you search. Powered by the OpenWeather API, it delivers accurate and 
                  reliable data to help you plan your day and stay prepared for any conditions.
                </p>

                <div style={{marginTop:'2%'}}>
                  <p className='font-semibold text-black text-xl' >
                    Tech Stack
                  </p>
                  <div className=' flex flex-row justify-start items-center' >
                    <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' className='  w-[11%] transition transform hover:scale-125 delay-0 ease-in-out duration-75'  />
                    <img src='https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png' className=' w-[11%] transition-all transform hover:scale-125 delay-0 ease-in-out duration-75'  />
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/960px-HTML5_logo_and_wordmark.svg.png' className=' w-[11%] transition-all transform hover:scale-125 delay-0 ease-in-out duration-75'  />
                    <img src='https://img.icons8.com/fluent/512/css3.png' className=' w-[11%] transition transform hover:scale-125 delay-0 ease-in-out duration-75'  />

                  
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