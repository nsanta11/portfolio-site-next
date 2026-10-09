// components/RecentProjects.js
"use client";
import { useState } from "react";
import VideoModal from "./VideoModal";
import projects from "@/data/recent-projects.json";

export default function RecentProjects() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="content content--more">
      <h2 id="my-work">Recent Projects</h2>
      <div className="card-wrap">
        {projects.map((project) => (
          <div className="card" key={project.title}>
            {project.opensModal ? (
              <button
                className="card__image openModal"
                id="openModalBtn"
                style={{ backgroundImage: `url("${project.image}")` }}
                onClick={() => setIsModalOpen(true)}
              >
                <span className="caption">{project.caption}</span>
              </button>
            ) : (
              <a
                href={project.href}
                className="card__image"
                style={{ backgroundImage: `url("${project.image}")` }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="caption">{project.caption}</span>
              </a>
            )}
            <p className="card__title">{project.title}</p>
          </div>
        ))}
      </div>
      <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
