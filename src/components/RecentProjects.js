// components/RecentProjects.js
"use client";
import { useState } from "react";
import VideoModal from "./VideoModal";

export default function RecentProjects() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <section className="content content--more">
        <h2 id="my-work">Recent Projects</h2>
        <div className="card-wrap">
          <div className="card">
            <a
              href="https://valentinesday.noabuse.org/"
              className="card__image"
              style={{ backgroundImage: 'url("/img/no-abuse.png")' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="caption">VISIT WEBSITE</span>
            </a>
            <p className="card__title">Loveless Greetings</p>
          </div>
  
          <div className="card">
            <a
              href="https://rrpartners.com/"
              className="card__image"
              style={{ backgroundImage: 'url("/img/rrpartners.png")' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="caption">VISIT WEBSITE</span>
            </a>
            <p className="card__title">R&R Partners</p>
          </div>
  
          <div className="card">
            <a
              href="https://businessjets.boeing.com/737-max/#world-map"
              className="card__image"
              style={{ backgroundImage: 'url("/img/bbj_rangefinder.png")' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="caption">VISIT WEBSITE</span>
            </a>
            <p className="card__title">Boeing Business Jets Range Map Component</p>
          </div>
  
          <div className="card">
            <a
              href="https://businessjets.boeing.com/select/#select-configurator"
              className="card__image"
              style={{ backgroundImage: 'url("/img/bbj_configurator.png")' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="caption">VISIT WEBSITE</span>
            </a>
            <p className="card__title">Boeing Business Configurator Component</p>
          </div>
  
          <div className="card">
            <button
              className="card__image openModal"
              id="openModalBtn"
              style={{ backgroundImage: 'url("/img/ballysports.png")' }}
              onClick={() => setIsModalOpen(true)}
            >
              <span className="caption">OPEN WEBSITE DEMO</span>
            </button>
            <p className="card__title">Bally Sports Short Boys</p>
          </div>
  
          <div className="card">
            <a
              href="https://knowyourscript.org/progress/"
              className="card__image"
              style={{ backgroundImage: 'url("/img/knowyourscript.png")' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="caption">VISIT WEBSITE</span>
            </a>
            <p className="card__title">Know Your Script</p>
          </div>
        </div>
  
        <div id="videoModal" className="modal">
          <div className="modal-content">
            <span className="close-btn">&times;</span>
            <h2 className="modal-headline">Bally Short Boys Campaign 2024 — Website</h2>
            <div className="video-wrapper">
              <video id="modalVideo" poster="/img/ballysports.png" controls>
                <source src="/img/BallySports_ShortBoys.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </section>
    );
  }
  