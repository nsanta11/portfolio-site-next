// components/Footer.js
import Link from 'next/link';

export default function Footer() {
    return (
      <footer className="site-footer">
        <div className="footer-content">
          <p>&copy; 2025 Nicole Santarsiero. All rights reserved.</p>
          <div className="footer-links">
            <Link href="/">Home</Link> | 
            <Link href="https://www.linkedin.com/in/nicole-santarsiero-81443752" target="_blank" rel="noopener noreferrer">LinkedIn</Link> | 
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    );
  }
  