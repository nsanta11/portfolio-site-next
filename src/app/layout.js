// app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from '@/components/PageLoader';
import { Instrument_Sans, Jost, Montserrat, Sixtyfour } from 'next/font/google';
import '../styles/base.css';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});


export const metadata = {
  title: "Nicole Santarsiero | Portfolio Site",
  description: "8+ years of web development experience",
  icons: {
    icon: "/favicon.ico",
  },
  authors: [{ name: "Nicole Santarsiero" }],
  keywords: ["web dev", "development", "design", "accessibility", "work"],
};

export default function RootLayout({ children }) {  
  

  return (
    <html lang="en"  className={`js ${instrumentSans.variable} ${montserrat.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
          precedence="default"
        />
      </head>
      <body className='loading'>
        <PageLoader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
