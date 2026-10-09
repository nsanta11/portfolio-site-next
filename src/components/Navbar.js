// components/Navbar.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`frame${open ? ' nav-open' : ''}`}>
      <div className="ns-logo">
        <Link href="/" onClick={close}>
          <img
            className="logo"
            src="/img/ns_cream.png"
            alt="Nicole Santarsiero logo"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/nicole-santarsiero-81443752"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nicole Santarsiero on LinkedIn (opens in a new tab)"
        >
          <i className="devicon-linkedin-plain colored" aria-hidden="true"></i>
        </Link>
      </div>
      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="nav-toggle__bar"></span>
        <span className="nav-toggle__bar"></span>
        <span className="nav-toggle__bar"></span>
      </button>
      <nav id="primary-nav" className="nav-links">
        <Link className="scroll-link" href="/#about-me" onClick={close}>
          About Me
        </Link>
        <Link className="scroll-link" href="/#my-work" onClick={close}>
          My Work
        </Link>
        <Link href="/contact" onClick={close}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
