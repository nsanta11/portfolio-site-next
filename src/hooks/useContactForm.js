"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

export function useContactForm() {
  const formRef = useRef(null);
  const [formStatus, setFormStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  // GSAP scroll animation
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact-me",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      "#contact-me",
      { x: "-50%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1, ease: "power2.out" }
    );    
  
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setFormStatus("Sending...");

    emailjs
      .sendForm("service_smdi5ij", "template_pg47z1t", formRef.current)
      .then(() => {
        setFormStatus("Thank you for your message — I'll be in touch with you soon!");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setFormStatus("❌ Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return { formRef, formStatus, isSending, handleSubmit };
}
