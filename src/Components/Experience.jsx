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
            date={<div className=' text-black'>Mar 2026 - present</div>}
            iconStyle={{ background: 'white' }}
            icon={<img className='rounded-full'src='https://media.licdn.com/dms/image/v2/D4E0BAQF-KC8tCwrr1g/company-logo_200_200/B4EZz71oISIsAI-/0/1773751665465/jarvisconsulting_logo?e=2147483647&v=beta&t=nqtNrtgFx95p5QoGPnqawU6Zd17k5-rGlVOBRwHQVt0'/>}
            >
            <h3 className="vertical-timeline-element-title text-cyan-500 font-bold">Data Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle text-black font-medium">Jarvis Consulting Group</h4>
            <p className=' text-lg text-gray-500 font-light'>Working in a fast-paced, sprint-driven engineering environment focused on building scalable software and data-driven solutions across multiple technologies and domains. Collaborate with peers through daily standups, technical discussions, and project reviews while consistently delivering projects under tight deadlines. Regularly apply problem-solving, debugging, and system design skills in an iterative development setting, adapting quickly to new tools, frameworks, and engineering concepts while communicating technical decisions clearly.</p>
            </VerticalTimelineElement>

             <VerticalTimelineElement
            className="vertical-timeline-element--work "
            dateClassName=''
            date={<div className=' text-black'>Sep 2024 - Apr 2025</div>}
            iconStyle={{ background: 'white' }}
            icon={<img src='https://media.licdn.com/dms/image/v2/C4E0BAQETJQQ7RW7qZQ/company-logo_200_200/company-logo_200_200/0/1630603805167/cybersecurity_research_lab_logo?e=2147483647&v=beta&t=DftWjqWsTf4pPNQGpmQbDTqQRNeMbAZE3iFYjisMVLo'/>}
            >
            <h3 className="vertical-timeline-element-title text-cyan-500 font-bold">Research Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle text-black font-medium">CyberSecurity Research Lab</h4>
            <p className=' text-lg text-gray-500 font-light'>Conducted end-to-end analysis of a BERTopic pipeline on large-scale cybersecurity corpora, evaluating embedding performance and topic coherence. Identified inefficiencies in the default topic selection process, which relied on static parameter choices and led to suboptimal clustering. Designed an interval-based optimization strategy to iteratively evaluate topic counts and cluster configurations, improving coherence and interpretability. Presented findings to senior researchers, contributing to refinement of the modeling approach.</p>
            </VerticalTimelineElement>


            <VerticalTimelineElement
            className="vertical-timeline-element--work "
            dateClassName=''
            date={<div className=' text-black'>May 2023 - Sep 2024</div>}
            iconStyle={{ background: 'white' }}
            icon={<img src='https://i.imgur.com/MybuwP2.png'/>}
            >
            <h3 className="vertical-timeline-element-title text-cyan-500 font-bold">Data Analyst Co-op</h3>
            <h4 className="vertical-timeline-element-subtitle text-black font-medium">HydroOne</h4>
            <p className=' text-lg text-gray-500 font-light'>Designed an SQL and Python-based ETL pipeline to spot and resolve data inconsistencies across enterprise systems, saving the company a potential regulatory fine of $1M/day. Wrote complex SQL queries to analyze large datasets and generate actionable insights, enabling stakeholders to make faster, data-driven decisions. Resolved data quality issues at the source across cross-functional systems, improving overall data reliability by 66%. Mentored incoming co-op students on SQL development, system workflows, and best practices, strengthening team efficiency.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={<div className=' text-black'>Jun 2022 - Sep 2022</div>}
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
        

        </div>
        
    </div>
  )
}

export default Experience