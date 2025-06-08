// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="frame">
      <div className="nav-links">
        <Link className="scroll-link" href="/#about-me">
          About Me
        </Link>
        <Link className="scroll-link" href="/#my-work">
          My Work
        </Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="ns-logo">
        <Link href="/">
          <img
            className="logo"
            src="/img/ns_white.png"
            alt="Nicole Santarsiero logo"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/nicole-santarsiero-81443752"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="devicon-linkedin-plain colored"></i>
        </Link>
      </div>
    </header>
  );
}
