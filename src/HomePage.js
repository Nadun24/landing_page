import React from 'react'
import Lottie, { LorrieRefCurrentProps } from 'lottie-react'
import animationData from './assets/Animation - 1716610443883.json'
import { useRef } from 'react'
import Navbar from './component/Navbar'



const HomePage = () => {
    const animationRef = useRef(<LorrieRefCurrentProps />)

  return (
    <div className='container'>
      <div className='box '>
        <Navbar/>
        <div className='animation-text anim-logo'>
          <h1><span class='one'>E</span><span class='two'>M</span><span class='three'>U</span><span class='four'>Q</span> <span class='five'>T</span><span class='six'>E</span><span class='seven'>C</span><span class='eight'>H</span></h1>


          </div>
        <div className='contains'>

          <div className='section-1'>
            <h1 className='anim'>
              THE POWER OF <br />
              TECHNOLOGY
            </h1>
            <h2 className='anim'>Welcome to Emuq Tech!</h2>
            <p className='anim'>
              Pioneering the future of innovation through specialized
              mentorship, business development, and tech advancements.
              We Nurture Visionaries, Fuel Innovations, and Support Sustainable 
              Success
            </p>
            <div className='button anim'>
                <a href='##'>Contact Us</a>
                <a href='##'>Our Services</a>
              </div>
          </div>
          <div className='section-2'>
            <div className='animation anim'>
              <Lottie
                onComplete={() => {
                  console.log('complete')
                  animationRef.current?.setDirection(1)
                  animationRef.current?.play()
                }}
                lottieRef={animationRef}
                loop={true}
                animationData={animationData}
              />
            </div>
          </div>
          
        </div>
        
       
      </div>
    </div>
  )
}

export default HomePage
