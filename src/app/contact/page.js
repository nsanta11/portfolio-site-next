// app/contact/page.js
'use client';

import { useContactForm } from "@/hooks/useContactForm";
import emailjs from '@emailjs/browser';
import '@/styles/base.css';

emailjs.init('W3wuNw5rHmwmLEoOk'); 

export default function ContactSection() {
    const { formRef, formStatus, isSending, handleSubmit } = useContactForm();

  return (
    <main className="about-card contact-page">

      <div className="layout-wrapper">
        <div className="flex-container contact-card" id="contact-me">
          <div className="image-container">
            <img src="/img/nic.png" alt="Circular Portrait" />
          </div>
          <section className="contact-section">
            <h2>Contact Me</h2>
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Your Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Your Message:</label>
              <textarea id="message" name="message" required></textarea>

              <button className="send" type="submit" disabled={isSending}>
                {isSending ? 'Sending...' : 'SEND MESSAGE'}
              </button>
            </form>
            {formStatus && <div className="confirmation message" id="form-status">{formStatus}</div>}
          </section>
        </div>
      </div>
    </main>
  );
}
