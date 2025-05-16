// components/VideoModal.js
"use client";
import { useRef } from "react";

export default function VideoModal({ isOpen, onClose }) {
  const videoRef = useRef(null);

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    onClose();
  };

  return (
    <section id="videoModal" className={`modal ${isOpen ? "show" : ""}`}>
      <div className="modal-content">
        <span className="close-btn" onClick={handleClose}>&times;</span>
        <h2 className="modal-headline">Bally Short Boys Campaign 2024 — Website</h2>
        <div className="video-wrapper">
          <video ref={videoRef} poster="/img/ballysports.png" controls>
            <source src="/img/BallySports_ShortBoys.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
