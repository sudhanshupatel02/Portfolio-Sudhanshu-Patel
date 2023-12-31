import React from 'react'

export default function temp() {
  return (
    <div>


{/* <!-- ======= Mobile nav toggle button ======= --> */}
<i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

{/* <!-- ======= Header ======= --> */}
<header id="header">
  <div className="d-flex flex-column">

    <div className="profile">
      <img src="assets/img/vivekkumar.jpeg" alt="" className="img-fluid rounded-circle"/>
      <h1 className="text-light"><a href="index.html">Sudhanshu Patel</a></h1>
      <div className="social-links mt-3 text-center">
        <a href="/" className="twitter"><i className="bx bxl-twitter"></i></a>
        <a href="/" className="facebook"><i className="bx bxl-facebook"></i></a>
        <a href="/" className="instagram"><i className="bx bxl-instagram"></i></a>
        <a href="/" className="google-plus"><i className="bx bxl-skype"></i></a>
        <a href="/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
      </div>
    </div>

    <nav id="navbar" className="nav-menu navbar">
      <ul>
        <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
        <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
        <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
        <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
        <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
        <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
      </ul>
    </nav>
    {/* <!-- .nav-menu --> */}
  </div>
</header>
{/* <!-- End Header --> */}

{/* <!-- ======= Hero Section ======= --> */}
<section id="hero" className="d-flex flex-column justify-content-center align-items-center">
  <div className="hero-container" data-aos="fade-in">
    <h1>Sudhanshu Patel</h1>
    <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
  </div>
</section>
{/* <!-- End Hero --> */}

<main id="main">

  {/* <!-- ======= About Section ======= --> */}
  <section id="about" className="about">
    <div className="container">

      <div className="section-title">
        <h2>About</h2>
        <p>Welcome to my portfolio website! My name is Sudhanshu Patel, and I am a focused and driven Computer Science and Engineering student currently attending Feroze Gandhi Institute of Engineering and Technology in Raebareli.</p>
        <p>As a beginner in the field of Information Technology, I am passionate about leveraging my skills to contribute to the development of an organization while growing in my career journey. I am committed to continuous learning and improvement, and I strive to keep myself updated with the latest trends and technologies in the industry</p>
        <p>I believe that communication, critical thinking, and problem-solving skills are essential for success in any field, and I have honed these skills through my academic pursuits and practical experience. I am proficient in a range of programming languages and web development tools, including HTML, CSS, JavaScript, Bootstrap, Tailwind, React.js/Vue.js, Node.js, Express.js, and MongoDB. I am also proficient in using Git, a version control system for software development</p>
        <p></p>
      </div>

      <div className="row">
        <div className="col-lg-4" data-aos="fade-right">
          <img src="assets/img/vivekkumar.jpeg" className="img-fluid" alt=""/>
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

  {/* <!-- ======= Facts Section ======= --> */}
  <section id="facts" className="facts">
    <div className="container">

      <div className="section-title">
        <h2>Facts</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div className="row no-gutters">

        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
          <div className="count-box">
            <i className="bi bi-emoji-smile"></i>
            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
            <p><strong>Happy Clients</strong> consequuntur quae</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
          <div className="count-box">
            <i className="bi bi-journal-richtext"></i>
            <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
            <p><strong>Projects</strong> adipisci atque cum quia aut</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
          <div className="count-box">
            <i className="bi bi-headset"></i>
            <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
            <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
          <div className="count-box">
            <i className="bi bi-people"></i>
            <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
            <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
          </div>
        </div>

      </div>

    </div>
  </section>
  {/* <!-- End Facts Section --> */}

  {/* <!-- ======= Skills Section ======= --> */}
  <section id="skills" className="skills section-bg">
    <div className="container">

      <div className="section-title">
        <h2>Skills</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div className="row skills-content">

        <div className="col-lg-6" data-aos="fade-up">

          <div className="progress">
            <span className="skill">HTML <i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">CSS <i className="val">85%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">Bootstrap <i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">JavaScript <i className="val">80%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

        </div>

        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

          <div className="progress">
            <span className="skill">Reactjs <i className="val">75%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">Tailwind <i className="val">80%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">Nodejs <i className="val">75%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">Expressjs <i className="val">75%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">MongoDB <i className="val">75%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="84" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
  {/* <!-- End Skills Section --> */}

  {/* <!-- ======= Resume Section ======= --> */}
  <section id="resume" className="resume">
    <div className="container">

      <div className="section-title">
        <h2>Resume</h2>
      </div>

      <div className="row">
        <div className="col-lg-6" data-aos="fade-up">
          {/* <!-- <h3 className="resume-title">Sumary</h3> --> */}
          {/* <!-- <div className="resume-item pb-0">
            <h4>Alex Smith</h4>
            <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
            <ul>
              <li>Portland par 127,Orlando, FL</li>
              <li>(123) 456-7891</li>
              <li>alice.barkley@example.com</li>
            </ul>
          </div> --> */}

          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h4>Bachelor of technology</h4>
            <h5>2019 - 2023</h5>
            <p><em>Feroze Gandhi Institute of engineering and technology Raebareli</em></p>
            <p>Graduation in Computer Science and Engineering</p>
            <p>Secure :- 7.28 CGPA</p>
          </div>
          <div className="resume-item">
            <h4>Intermediate</h4>
            <h5>2016 - 2017</h5>
            <p><em>M C IC Pakadiyar Bishunpur Maharajgan</em></p>
            <p>Passed with percentage :- 75.2%</p>
          </div>
          <div className="resume-item">
            <h4>High School</h4>
            <h5>2014 - 2015</h5>
            <p><em>Maharajganj I C Maharajganj</em></p>
            <p>Passed with CGPA :- 44.33</p>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <h3 className="resume-title">Professional Experience</h3>
          <div className="resume-item">
            <h4>Full stack with javascript</h4>
            <h5>2023 oCT - 2023 Dec</h5>
            <p><em>Fynd Academy</em></p>
            <ul>
              <li>3 months training in Full stack with javascript</li>
              <li>Learn JavaScript, React, Nodejs, Express, MongoDB </li>
              <li>I developed two minor projects during your training - Typing Master and E-commerce website Technostore - as well as one major project called Coding Profile Manager</li>
              
            </ul>
          </div>
          {/* <!-- <div className="resume-item">
            <h4>Graphic design specialist</h4>
            <h5>2017 - 2018</h5>
            <p><em>Stepping Stone Advertising, New York, NY</em></p>
            <ul>
              <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
              <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
              <li>Recommended and consulted with clients on the most appropriate graphic design</li>
              <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
            </ul>
          </div> --> */}

        </div>
      </div>

    </div>
  </section>
  {/* <!-- End Resume Section --> */}

  {/* <!-- ======= Portfolio Section ======= --> */}
  <section id="portfolio" className="portfolio section-bg">
    <div className="container">

      <div className="section-title">
        <h2>Portfolio</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div className="row" data-aos="fade-up">
        <div className="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-card">Card</li>
            <li data-filter=".filter-web">Web</li>
          </ul>
        </div>
      </div>

      <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
  {/* <!-- End Portfolio Section --> */}

  {/* <!-- ======= Services Section ======= --> */}
  <section id="services" className="services">
    <div className="container">

      <div className="section-title">
        <h2>Services</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
          <div className="icon"><i className="bi bi-briefcase"></i></div>
          <h4 className="title"><a href="">Lorem Ipsum</a></h4>
          <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
        </div>
        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
          <div className="icon"><i className="bi bi-card-checklist"></i></div>
          <h4 className="title"><a href="">Dolor Sitema</a></h4>
          <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
        </div>
        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
          <div className="icon"><i className="bi bi-bar-chart"></i></div>
          <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
          <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
          <div className="icon"><i className="bi bi-binoculars"></i></div>
          <h4 className="title"><a href="">Magni Dolores</a></h4>
          <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
          <div className="icon"><i className="bi bi-brightness-high"></i></div>
          <h4 className="title"><a href="">Nemo Enim</a></h4>
          <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
        </div>
        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
          <div className="icon"><i className="bi bi-calendar4-week"></i></div>
          <h4 className="title"><a href="">Eiusmod Tempor</a></h4>
          <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
        </div>
      </div>

    </div>
  </section>
  {/* <!-- End Services Section --> */}

  {/* <!-- ======= Testimonials Section ======= --> */}
  <section id="testimonials" className="testimonials section-bg">
    <div className="container">

      <div className="section-title">
        <h2>Testimonials</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper-wrapper">

          <div className="swiper-slide">
            <div className="testimonial-item" data-aos="fade-up">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
            </div>
          </div>
          {/* <!-- End testimonial item --> */}

          <div className="swiper-slide">
            <div className="testimonial-item" data-aos="fade-up" data-aos-delay="100">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt=""/>
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
            </div>
          </div>
          {/* <!-- End testimonial item --> */}

          <div className="swiper-slide">
            <div className="testimonial-item" data-aos="fade-up" data-aos-delay="200">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>
              <h3>Jena Karlis</h3>
              <h4>Store Owner</h4>
            </div>
          </div>
          {/* <!-- End testimonial item --> */}

          <div className="swiper-slide">
            <div className="testimonial-item" data-aos="fade-up" data-aos-delay="300">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt=""/>
              <h3>Matt Brandon</h3>
              <h4>Freelancer</h4>
            </div>
          </div>
          {/* <!-- End testimonial item --> */}

          <div className="swiper-slide">
            <div className="testimonial-item" data-aos="fade-up" data-aos-delay="400">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt=""/>
              <h3>John Larson</h3>
              <h4>Entrepreneur</h4>
            </div>
          </div>
          {/* <!-- End testimonial item --> */}

        </div>
        <div className="swiper-pagination"></div>
      </div>

    </div>
  </section>
  {/* <!-- End Testimonials Section --> */}

  {/* <!-- ======= Contact Section ======= --> */}
  <section id="contact" className="contact">
    <div className="container">

      <div className="section-title">
        <h2>Contact</h2>
      </div>

      <div className="row" data-aos="fade-in">

        <div className="col-lg-5 d-flex align-items-stretch">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>Maharajganj, Uttar Pradesh, India, 273302</p>
            </div>

            <div className="email">
              <i className="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>sudhanshupatel0207@gmail.com</p>
            </div>

            <div className="phone">
              <i className="bi bi-phone"></i>
              <h4>Call:</h4>
              <p>+91 9336143193</p>
            </div>

          </div>

        </div>

        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <form action="forms/contact.php" method="post" role="form" className="php-email-form">
            <div className="row">
              <div className="form-group col-md-6">
                <label for="name">Your Name</label>
                <input type="text" name="name" className="form-control" id="name" required/>
              </div>
              <div className="form-group col-md-6">
                <label for="name">Your Email</label>
                <input type="email" className="form-control" name="email" id="email" required/>
              </div>
            </div>
            <div className="form-group">
              <label for="name">Subject</label>
              <input type="text" className="form-control" name="subject" id="subject" required/>
            </div>
            <div className="form-group">
              <label for="name">Message</label>
              <textarea className="form-control" name="message" rows="10" required></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>

      </div>

    </div>
  </section>
  {/* <!-- End Contact Section --> */}

</main>
{/* <!-- End #main --> */}

{/* <!-- ======= Footer ======= --> */}

{/* <!-- End  Footer --> */}






    </div>
  )
}
