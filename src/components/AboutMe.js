// components/AboutMe.js
export default function AboutMe() {
  return (
    <section className="layout-wrapper left" id="about-me">
      <div className="flex-container about-card">
        <div className="image-container">
          <img src="img/nic.png" alt="Circular Image" />
        </div>
        <div className="text-container">
          <h2>About Me</h2>
          <p>
          Full stack developer with a background in digital marketing for creative agencies and nonprofits, and an MBA from UMass Boston. I’ve volunteered across Central America, partnering with community leaders on local initiatives. My love for travel led me to (almost) fluency in Spanish, and when I’m not coding, you’ll find me at concerts or spoiling my rescue pup, Toni.
          </p>
          <p>
            <strong>Goal: </strong>To use my technical and creative skills in a role that supports meaningful, socially conscious work.
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
