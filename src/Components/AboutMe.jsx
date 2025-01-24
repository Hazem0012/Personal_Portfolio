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
            <p className=' text-6xl text-cyan-500 font-bold text-center' style={{marginBottom:'1.5%'}}>About ME</p>
            <hr className=' bg-black h-1 opacity-70 rounded-lg ' style={{width:'4%', marginTop:'0.2%'}} />
            
          </div>
          <div className=' flex flex-row '>
            <div className=' w-5/12'>
            <p className=' text-2xl font-bold text-black'> Who Am I?</p>
              <p className=' text-md' style={{marginBottom:'10%', marginTop:'1%'}}>
              I’m a software engineering student at Toronto Metropolitan University with a passion for technology and problem-solving. 
              I love diving into new challenges and creating solutions that combine creativity with technical skills. 
              Along the way, I’ve worked on some really exciting projects and always enjoy learning something new. 
              As I get closer to finishing my degree, I’m excited to find opportunities where I can keep growing, 
              contribute to meaningful work, and make an impact with my skills.
              </p>
              <p className=' text-2xl font-bold text-black'> Beyond the Screen</p>    
              <p className=' text-md' style={{marginTop: '1%'}}>
              When I’m not coding, I love staying active—whether it’s through exercise, sports, or Muay Thai. 
              These activities keep me motivated and help me build discipline and determination. I also enjoy rock climbing, 
              playing the piano, and challenging myself with chess, which keeps my problem-solving skills sharp and 
              pushes me to think creatively. 
              </p>

              </div>

              <div className=' w-1/3 relative' style={{marginTop: '15%', marginLeft:'20%'}}>
              
              <p className=' text-3xl font-bold absolute text-black' style={{marginLeft:'51%', margniTop:'5%'}}> Skills</p>
                {technicalSkillsBuilder(props,'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/2048px-Python_logo_01.svg.png','Python','39%')}
                {technicalSkillsBuilder(props2,'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png','Java','45%')}
                {technicalSkillsBuilder(props3,'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png','C','37%')}
                {technicalSkillsBuilder(props4,'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png','SQL','55%')}
                {technicalSkillsBuilder(props5,'https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png','JavaScript','39%')}
                {technicalSkillsBuilder(props6,'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png','HTML','39%')}
                {technicalSkillsBuilder(props7,'https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png','CSS','45%')}
                {technicalSkillsBuilder(props8,'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png','React.js','40%')}
                {technicalSkillsBuilder(props9,'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAAEbCAMAAABJMC7IAAAAqFBMVEX///8TB1T/ygDnBIgAAE4NAFHu7fPm5e0aD1ksH2oaBWAAAEyyrcdoYJJfVYyvqsb/+OL/+/2XkbG5tc2no70wI2z/7KA/NXX0ms3mAILrIZyhnLpMQ37/7avvXrP3qdc6LnT/0iD/3FEAAEUAAEeHgKnSz95YTYfFw9Xh3+m9us8jE2coGWh3b53/8sH/2kX/4Wz//PT/++v5veD72+7yeMAAAEAAAFky1gKGAAACPElEQVR4nO3dWW/TUBCA0RSyQA2lgYYCZSkkgbSUspTl//8zoDyhlImu4lyPxfke8pDI1nm0ornjwSBdk/3RXtCdrn03hFwj5Boh1wi5Rsg1Qq4Rco3aJ08ehb1NSL43b4Lm7zKSm+iGwwNkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGTknZOnca2Qp4Pf9/lzs+vP6d/fFZIfhp2s37KYvDoKOysmR7NNzWJ/vD35/mIYNH9QTI5+3RvdbYM8jC5Y9I/cICMjI+ciL0ZBTUby+ftZ0MWHhOTpZBw0Wb+ge3JxyMjIyMjIyMjIyMiZyYePwy4Tkl/cCvvYP/IbZGRkZGRkZGRkZGRkZGRkZGRk5HbJl6/DPiUkfz4M+5KQXFwfyU00P1Vjsra45elx0Ow8Ibl0Dj0BuTRkZGRkZGRk5H6Qz+LjdmvPkgnIG048VNglXk7u/CBoBXLnj/jF5KsnYV8Tkl8+DXuVknw7CBkZGRkZGRkZGRkZGRkZGRkZGblt8rdnYVcJyd2PkPwX/+IjIyMjIyMjIyMjI/+TvDoJK98lvnvywTxaV/69f2t27RJHRkZG3pY8L5ys7Z68On4etdye/KMJ3rzRjMrJ02iV+K+2Jo+P4oeShAdBr18aE5WRvCFkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZOTekQt3iScgL2enQRfl+x93T45HhTbMEd1UBXLbIdcIuUbINUKuEXKNkGuEXKP+kX8C9+oFpMxygMoAAAAASUVORK5CYII=','Pandas.py','25%')}
                {technicalSkillsBuilder(props10,'https://images.seeklogo.com/logo-png/39/2/tensorflow-logo-png_seeklogo-394548.png','TensorFlow','48%')}

              </div>
            </div>
            <div>
              
            </div>
        </div>
        
    </div>
  )
}

export default AboutMe