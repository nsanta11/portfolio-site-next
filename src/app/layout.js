// app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import Loader from "@/components/Loader";
import { Instrument_Sans, Jost, Montserrat, Sixtyfour } from "next/font/google";
import "../styles/base.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
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
    <html
      lang="en"
      className={`js ${instrumentSans.variable} ${montserrat.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
          precedence="default"
        />
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YR53C0DB96"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-YR53C0DB96');
        `}
      </Script>
      <body className="loading">
        <div
          id="initial-loader"
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <Loader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
