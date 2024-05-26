import Lottie, { LorrieRefCurrentProps } from 'lottie-react'
import animationData from './assets/Animation - 1716610443883.json'
import { useRef } from 'react'
import './New.css'

function App () {
  const animationRef = useRef(<LorrieRefCurrentProps />)

  return (
    <div className='container'>
      <div className='box '>
        <nav className='anim'>
          <img
            className='logo'
            src='https://www.emuqtech.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Femuq-logo-bg.9e8dd182.png&w=640&q=75'
            alt='LOGO'
          />
          
          
        
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Service</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </nav>
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
        
        {/*<div class='card'>
       <Hero/>
       </div>
     
      <Feature/>
      <div className='box'>
        <div className='nav'>
          <nav>
            <img src='' alt='' />

            
              
          </nav>
        </div>
        
        <div className='content'>
          <div className='text'>
            <h1>
              Explore Your Business Globly.
              <br /> You Can Touch Up!
            </h1>
          </div>
          <div className='animation'>
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
      <div class='card'>
      <div className='header'>
          <nav className='navbar'>
            <img
              className='logo'
              src='https://www.emuqtech.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Femuq-logo-bg.9e8dd182.png&w=640&q=75'
              alt=''
            />
            <ul>
              <li>Service</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
          </nav>
        </div>
        <div className='content'>
          <div className='text'>
            <h1>
              THE POWER OF
              <br />
              TECHNOLOGY
            </h1>
            
          </div>
          <div className='animation'>
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
        <h2>
              Welcome to Emuq Tech!
              <br /><br/>
              Pioneering the future of innovation through specialized
              mentorship, business development, and tech advancements.
            </h2>
            </div>*/}
      </div>
      
    </div>
  )
}

export default App
