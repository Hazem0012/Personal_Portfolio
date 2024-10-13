import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Experience() {
  return (
    <div>
        <div className=' text-gray-600 relative' style={{ marginTop:'4%', marginBottom:'10%'}}>
          
        <div className=' flex justify-center flex-col items-center' style={{marginBottom:'6%'}}>
            <p className=' text-6xl text-cyan-500 font-bold text-center' style={{marginBottom:'1.5%'}}>Experience</p>
            <hr className=' bg-black h-1 opacity-70 rounded-lg ' style={{width:'4%', marginTop:'0.2%'}} />
            
          </div>

          
          <VerticalTimeline lineColor=' #06b6d4' className=' ' >
          


            <VerticalTimelineElement
            className="vertical-timeline-element--work "
            dateClassName=''
            date={<div className=' text-black'>May 2023 - Sep 2024</div>}
            iconStyle={{ background: 'white' }}
            icon={<img src='https://i.imgur.com/MybuwP2.png'/>}
            >
            <h3 className="vertical-timeline-element-title text-cyan-500 font-bold">IT Operations Co-op</h3>
            <h4 className="vertical-timeline-element-subtitle text-black font-medium">HydroOne</h4>
            <p className=' text-lg text-gray-500 font-light'>During my 16-month co-op term at HydroOne, I worked as an IT Operations Co-op within the PCMIS team, focusing on 
            maintaining data integrity, managing user access, and enhancing system functionalities to support operational efficiency. 
            My primary tasks included data analysis using SQL and Python, developing scripts to align PCMIS with SAP databases, and 
            applying VBA for form enhancements. I also utilized Regular Expressions for text classification and managed security 
            protocols for user access. Additionally, I mentored new co-op students, contributing to their onboarding and development.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={<div className=' text-black'>June 2022 - Sep 2022</div>}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<img src='https://i.imgur.com/ExVtJTV.png'/>}
            >
            <h3 className="vertical-timeline-element-title text-cyan-500 font-bold">Front End Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle text-black font-medium">Mara Technologies</h4>
            <p className=' text-lg text-gray-500 font-light'>At Mara Technologies, I was initially hired as a Quality Engineer, responsible for 
              monitoring equipment and tracking data. During my term, a newly installed kiosk presented an opportunity for me, 
              as the sole software engineering student, to develop a navigation system website. I took charge of the front-end design, 
              ensuring a user-friendly interface and seamless navigation. This project allowed me to apply and enhance 
              my skills in HTML, CSS, JavaScript, and responsive design, contributing to a successful implementation that
              improved user interaction with the kiosk.</p>
            </VerticalTimelineElement>
            
         

           
        </VerticalTimeline>
        <div className=' h-5 w-5 rounded-full bg-gradient-radial bg-cyan-500 absolute ' style={{ left:'49.35%'}}></div>
        <div className=' h-5 w-5 rounded-full bg-gradient-radial bg-cyan-500 absolute ' style={{ left:'49.35%' ,top:'15%'}}></div>

        </div>
        
    </div>
  )
}

export default Experience