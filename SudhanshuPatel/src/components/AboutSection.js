import React from 'react'

export default function AboutSection() {
  return (
    <div>
          {/* <!-- ======= About Section ======= --> */}
  <section id="about" className="about">
    <div className="container">

      <div className="section-title">
        <h2>About</h2>
        <p>Welcome to my portfolio website! My name is Sudhanshu Patel, and I am a focused and driven Computer Science and Engineering student currently attending Feroze Gandhi Institute of Engineering and Technology in Raebareli.</p>
        <p>As a beginner in the field of Information Technology, I am passionate about leveraging my skills to contribute to the development of an organization while growing in my career journey. I am committed to continuous learning and improvement, and I strive to keep myself updated with the latest trends and technologies in the industry</p>
        <p>I believe that communication, critical thinking, and problem-solving skills are essential for success in any field, and I have honed these skills through my academic pursuits and practical experience. I am proficient in a range of programming languages and web development tools, including HTML, CSS, JavaScript, Bootstrap, Tailwind, React.js, Node.js, Express.js, and MongoDB.  version control system for software development</p>
        <p></p>
      </div>

      <div className="row">
        <div className="col-lg-4" data-aos="fade-right">
          <img src={require('../img/Sudhanshu.j.jpeg')} className="img-fluid" alt=""/>
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>Full Stack Developer</h3>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>02 July 2000</span></li>
                {/* <!-- <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li> --> */}
                <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>9336143193</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Maharajganj, Uttar Pradesh</span></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>23</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Graduation</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>sudhanshupatel0207@gmail.com</span></li>
                {/* <!-- <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li> --> */}
              </ul>
            </div>
          </div>
          <p>
            I am eager to associate myself with an organization where I can utilize my skills in the best possible manner and contribute to its success. If you're interested in working with me, please feel free to get in touch. Thank you for visiting my portfolio website, and I look forward to connecting with you!
          </p>
        </div>
      </div>

    </div>
  </section>
  {/* <!-- End About Section --> */}
    </div>
  )
}
