// components/AboutMe.js
export default function AboutMe() {
  return (
    <section className="layout-wrapper left" id="about-me">
      <div className="flex-container about-card">
        <div className="image-container">
          <img src="img/nicole_toni.jpg" alt="Nicole Santarsiero smiling and holding her rescue dog, Toni" />
        </div>
        <div className="text-container">
          <h2>About Me</h2>
          <p>
            I love bringing creative ideas to life, on and off the web. With 8+ years in web development and an MBA in Marketing from UMass Boston, I combine logic with creative thinking to build digital experiences that look great, work well, and make an impact.
          </p>
          <p>
            Outside of work, I’ve volunteered across Central America, traveled my way to (almost) fluency in Spanish, and can often be found at concerts or spoiling my rescue pup, Toni.
          </p>
          <p>
            My life motto? always. stay. curious.
          </p>


          <div className="icon-wrapper">
            <i className="devicon-nodejs-plain colored"></i>
            <i className="devicon-react-original colored"></i>
            <i className="devicon-github-original colored"></i>
            <i className="devicon-php-plain colored"></i>
            <i className="devicon-wordpress-plain colored"></i>
            <i className="devicon-mysql-plain colored"></i>
            <i className="devicon-mongodb-plain colored"></i>
            <i className="devicon-sass-original colored"></i>
            <i className="devicon-html5-original colored"></i>
            <i className="devicon-html5-original colored"></i>
            <i className="devicon-css3-original colored"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
