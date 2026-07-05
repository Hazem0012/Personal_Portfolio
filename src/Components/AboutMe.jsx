import React from 'react'
import { motion } from "framer-motion"
import { useSpring, animated, to } from '@react-spring/web'
function AboutMe() {

  const Constructor =(start) =>{
    return useSpring({
        from: { rotate: start},
        to: { rotate: start +360 },
        config: { duration: 20000 },
        loop:true
        
      });
}

  const technicalSkillsBuilder = (props, source, name,  w)=>{

    return (
      <animated.div
      style={{
        transform: props.rotate.to((value) => `rotateZ(${value}deg)`),
        width: '145%',transformOrigin: 'center center'
        
      }}
    >
      <animated.div style={{
        transform: props.rotate.to((value) => `rotate(${-1*value}deg)`),
        display: 'inline-block',alignItems: 'center', justifyContent: 'center',position: 'absolute', width: '24%', height:'24%'
      }}> {/* Counter-rotate the text */}
        <animated.img src={source} alt={name} style={{width:w, top:'-30%'}} />
      </animated.div>     

    </animated.div>
    )

  }

  const props = Constructor(0)
  const props2= Constructor(36)
  const props3= Constructor(72)
  const props4= Constructor(108)
  const props5= Constructor(144)
  const props6= Constructor(180)
  const props7= Constructor(216)
  const props8= Constructor(252)
  const props9= Constructor(288)
  const props10= Constructor(324)

  return (
    
    <div className=''>
        <div className=' text-gray-600' style={{paddingLeft: '15%', paddingRight: '15%', marginBottom:'12%', marginTop:'-4%'}}>
        <div className=' flex justify-center flex-col items-center' style={{marginBottom:'6%'}}>
            <p className=' text-6xl text-cyan-500 font-bold text-center' style={{marginBottom:'1.5%'}}>About Me</p>
            <hr className=' bg-black h-1 opacity-70 rounded-lg ' style={{width:'4%', marginTop:'0.2%'}} />
            
          </div>
          <div className=' flex flex-row '>
            <div className=' w-5/12'>
            <p className=' text-2xl font-bold text-black'> Who Am I?</p>
              <p className=' text-md' style={{marginBottom:'10%', marginTop:'1%'}}>
              I’m a software engineering graduate from Toronto Metropolitan University with a passion for technology and problem-solving. 
              I love diving into new challenges and creating solutions that combine creativity with technical skills. 
              Along the way, I’ve worked on some really exciting projects and always enjoy learning something new. I’m excited to find opportunities where I can keep growing, 
              contribute to meaningful work, and make an impact with my skills.
              </p>
              <p className=' text-2xl font-bold text-black'> Beyond the Screen</p>    
              <p className=' text-md' style={{marginTop: '1%'}}>
              When I’m not coding, I love staying active, whether it’s through exercise, sports, or Muay Thai. 
              These activities keep me motivated and help me build discipline and determination. I also enjoy rock climbing, 
              playing the piano, and challenging myself with chess, which keeps my problem-solving skills sharp and 
              pushes me to think creatively. 
              </p>

              </div>

              <div className=' w-1/3 relative' style={{marginTop: '15%', marginLeft:'20%'}}>
              
              <p className=' text-3xl font-bold absolute text-black' style={{marginLeft:'51%', margniTop:'5%'}}> Skills</p>
                {technicalSkillsBuilder(props,'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/3840px-Python-logo-notext.svg.png','Python','39%')}
                {technicalSkillsBuilder(props2,'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png','Java','45%')}
                {technicalSkillsBuilder(props3,'https://upload.wikimedia.org/wikipedia/commons/e/ea/Spark-logo-192x100px.png','Spark','50%')}
                {technicalSkillsBuilder(props4,'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png','SQL','55%')}
                {technicalSkillsBuilder(props5,'https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png','JavaScript','39%')}
                {technicalSkillsBuilder(props6,'https://pngimg.com/uploads/linux/linux_PNG1.png','Linux','35%')}
                {technicalSkillsBuilder(props7,'https://cdn.iconscout.com/icon/free/png-256/free-docker-logo-icon-svg-download-png-3029959.png?f=webp','Docker','67%')}
                {technicalSkillsBuilder(props8,'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png','React.js','37%')}
                {technicalSkillsBuilder(props9,'https://logospng.org/download/typescript/typescript-4096.png','TypeScript','37%')}
                {technicalSkillsBuilder(props10,'https://static.vecteezy.com/system/resources/previews/072/677/636/non_2x/tensorflow-logo-tensorflow-icon-free-png.png','TensorFlow','40%')}

              </div>
            </div>
            <div>
              
            </div>
        </div>
        
    </div>
  )
}

export default AboutMe