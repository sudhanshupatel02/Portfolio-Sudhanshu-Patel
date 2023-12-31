import React from 'react'

export default function PortfolioSection() {
    return (
        <div className="container portfolio">
            <div id='portfolio'></div>
            <div className="section-title">
                <h2>Portfolio</h2>
            </div>
            {/* first project container */}
            <div className="card-group  ">
                <div className="card mx-3">
                    <img src={require('../img/portfolio/p01.png')} className="img-fluid rounded-start projectImg" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">Interviewconnect</h5>
                        <p className="card-text">InterviewConnect is a collaborative project created by me and Sudhanshu Patel. The primary goal of this project is to offer a user-friendly platform where users can access a broad range of interview questions for different technologies and subjects</p>
                    </div>
                    <div className="card-footer">
                        <a href='https://interviewconnect.vercel.app//' className="projectbtn mx-2">Live</a>
                        <a href='https://github.com/vivekkumar9919/InterviewConnect' className="projectbtn mx-2"> &lt;/&gt; Code</a>
                    </div>
                </div>

                <div className="card mx-3">
                    <img src={require('../img/portfolio/p1.png')} className="img-fluid rounded-start projectImg" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">NewsApp</h5>
                        <p className="card-text"> Fetching news data from APIs: You can cover how to fetch news data from various APIs, such as the News API Times APP. This can include handling API errors, caching data, and pagination.</p>
                    </div>
                    <div className="card-footer">
                        <a href='https://github.com/sudhanshupatel02/newsapi' className="projectbtn mx-2">Live</a>
                        <a href='https://github.com/sudhanshupatel02/newsapi' className="projectbtn mx-2"> &lt;/&gt; Code</a>
                    </div>
                </div>

                <div className="card mx-3">
                    <img src={require('../img/portfolio/p2.png')} className="img-fluid rounded-start projectImg" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">Portfolio</h5>
                        <p className="card-text">A portfolio website is a personal website that showcases a person's skills, experience, and accomplishments, typically in a professional context.</p>
                    </div>
                    <div className="card-footer">
                        <a href='https://github.com/sudhanshupatel02/Portfolio-Sudhanshu-Patel' className="projectbtn mx-2">Live</a>
                        <a href='https://github.com/sudhanshupatel02/Portfolio-Sudhanshu-Patel' className="projectbtn mx-2"> &lt;/&gt; Code</a>
                    </div>
                </div>

            </div>
            {/* second project container */}
            <div className="card-group  mt-5">
                <div className="card mx-3">
                    <img src={require('../img/portfolio/p3.png')} className="img-fluid rounded-start projectImg" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">Weather Project</h5>
                        <p className="card-text">Utilized a weather API to dynamically display current weather conditions and forecasts for user-selected locations.</p>
                    </div>
                    <div className="card-footer">
                        <a href='https://github.com/sudhanshupatel02/weatherproject' className="projectbtn mx-2" disabled>Live</a>
                        <a href='https://github.com/sudhanshupatel02/weatherproject' className="projectbtn mx-2"> &lt;/&gt; Code</a>
                    </div>
                </div>
                <div className="card mx-3">
                    <img src={require('../img/portfolio/p4.png')} className="img-fluid rounded-start projectImg" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">Razorpay</h5>
                        <p className="card-text"> To integrate Razorpay into a web page using Tailwind CSS,.</p>
                    </div>
                    <div className="card-footer">
                        <a href='https://github.com/sudhanshupatel02/Tailwind' className="projectbtn mx-2">Live</a>
                        <a href='https://github.com/sudhanshupatel02/Tailwind' className="projectbtn mx-2"> &lt;/&gt; Code</a>
                    </div>
                </div>

                <div className="card mx-3">
                    <img src={require('../img/portfolio/p5.png')} className="img-fluid rounded-start projectImg" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">Text Tutils</h5>
                        <p className="card-text"> Live character count: Display a live count of the number of characters, words, and sentences in the text as the user types. This can help the user keep track of their progress and make it easier to edit their text. </p>
                    </div>
                    <div className="card-footer">
                        <a href='https://texttutils-5.vercel.app/' className="projectbtn mx-2">Live</a>
                        <a href='https://texttutils-5.vercel.app/' className="projectbtn mx-2"> &lt;/&gt; Code</a>
                    </div>
                </div>

            </div>

            {/* third project container */}
            {/* <div className="card-group  mt-5">
                <div className="card mx-3">
                    <img src={require('../img/portfolio/p6.png')} className="img-fluid rounded-start projectImg" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">Technostore</h5>
                        <p className="card-text">E-commerce website for selling electronic gadgets with more amazing features</p>
                    </div>
                    <div className="card-footer">
                        <a href='https://github.com/vivekkumar9919/TechnoStore' className="projectbtn mx-2">Live</a>
                        <a href='https://github.com/vivekkumar9919/TechnoStore' className="projectbtn mx-2"> &lt;/&gt; Code</a>
                    </div>
                </div>
                <div className="card mx-3">
                    <img src={require('../img/portfolio/p6.png')} className="img-fluid rounded-start projectImg" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">Technostore</h5>
                        <p className="card-text">E-commerce website for selling electronic gadgets with more amazing features</p>
                    </div>
                    <div className="card-footer">
                        <a href='https://github.com/vivekkumar9919/TechnoStore' className="projectbtn mx-2">Live</a>
                        <a href='https://github.com/vivekkumar9919/TechnoStore' className="projectbtn mx-2"> &lt;/&gt; Code</a>
                    </div>
                </div>
                <div className="card mx-3">
                    <img src={require('../img/portfolio/p6.png')} className="img-fluid rounded-start projectImg" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">Technostore</h5>
                        <p className="card-text">E-commerce website for selling electronic gadgets with more amazing features</p>
                    </div>
                    <div className="card-footer">
                        <a href='https://github.com/vivekkumar9919/TechnoStore' className="projectbtn mx-2">Live</a>
                        <a href='https://github.com/vivekkumar9919/TechnoStore' className="projectbtn mx-2"> &lt;/&gt; Code</a>
                    </div>
                </div>
            </div> */}

        </div>
    )
}





