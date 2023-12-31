import React from 'react'
// import 'boxicons';

export default function NavBar() {
  return (
    <div>
<header id="header">
  <div className="d-flex flex-column">

    <div className="profile">
      <img src={require('../img/Sudhanshu.j.jpeg')} alt="" className="img-fluid rounded-circle"/>
      <h1 className="text-light"><a href="index.html">Sudhanshu Patel</a></h1>
      <div className="social-links mt-3 text-center">
        <a href="https://www.linkedin.com/in/sudhanshu-patel-7039b4226/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        <a href="https://github.com/sudhanshupatel02" className="twitter"><i className='bx bxl-github bx-flip-horizontal' ></i></a>
        <a href="https://www.facebook.com/profile.php?id=100" className="facebook"><i className="bx bxl-facebook"></i></a>
        <a href="https://www.instagram.com/sudhanshupatel399/" className="instagram"><i className="bx bxl-instagram"></i></a>
        <a href="mailto:sudhanshupatel0207@gmail.com" className="google-plus"><i className='bx bxl-gmail'></i></a>
      </div>
    </div>

    <nav id="navbar" className="nav-menu navbar">
      <ul>
        <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
        <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
        <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
        <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
        {/* <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li> */}
        <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
      </ul>
    </nav>

  </div>
<footer>
  <div style={{marginTop:"150px",color:"gray"}}>Developed By Sudhanshu Patel </div>
</footer>
</header>

    </div>
  )
}
