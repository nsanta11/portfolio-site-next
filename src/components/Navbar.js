// components/Navbar.js
export default function Navbar() {
  return (
    <header className="frame">
      <div className="nav-links">
        <a className="scroll-link" href="/#about-me">
          About Me
        </a>
        <a className="scroll-link" href="/#my-work">
          My Work
        </a>
        <a href="/contact">Contact</a>
      </div>
      <div className="ns-logo">
        <a href="/">
          <img
            className="logo"
            src="/img/ns_white.png"
            alt="Nicole Santarsiero logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/nicole-santarsiero-81443752"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="devicon-linkedin-plain colored"></i>
        </a>
      </div>
    </header>
  );
}
