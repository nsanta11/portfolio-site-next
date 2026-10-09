// components/RecentProjects.js
"use client";
import { useState, Fragment } from "react";
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
                   <p className="card__title">
              {project.title.split(":").map((part, i, parts) => (
                <Fragment key={i}>
                  {part}
                  {i < parts.length - 1 && (
                    <>
                      :<br />
                    </>
                  )}
                </Fragment>
              ))}
            </p>
            {project.opensModal ? (
              <button
                className="card__image openModal"
                id="openModalBtn"
                aria-label={`${project.title} – ${project.caption}`}
                style={{ backgroundImage: `url("${project.image}")` }}
                onClick={() => setIsModalOpen(true)}
              >
                <span className="caption">{project.caption}</span>
              </button>
            ) : (
              <a
                href={project.href}
                className="card__image"
                aria-label={`${project.title} – ${project.caption} (opens in a new tab)`}
                style={{ backgroundImage: `url("${project.image}")` }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="caption">{project.caption}</span>
              </a>
            )}
          </div>
        ))}
      </div>
      <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
