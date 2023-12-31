import React from 'react'

// import Typed from 'react-typed';

export default function HeroSection() {

  return (
    <div>

      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data-aos="fade-in">
          <h1>Sudhanshu Patel</h1>
          <p>I'm Full stack Developer         
            {/* <Typed
            strings={[" Full stack Developer", " Frontend Developer"]}
            typeSpeed={150}
            backSpeed={100}
            loop
          >
          </Typed>   */}
          </p>

          {/* button html start */}
          <a href="https://drive.google.com/drive/folders/1d-_1Cfi2QYGwG54nmhGD3V-Ab80AZTGV" download><div data-tooltip="Size: 10kb" className="button">  
            <div className="button-wrapper  d-flex">
              <div className="text" >Resume</div>
                <span className="icon">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" height="2em" width="2em" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none"></path></svg>
                </span>
              </div>
          </div>
          </a>
          {/* button html end */}
       
        </div>
      </section>



    </div>
  )
}
