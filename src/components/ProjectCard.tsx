import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      {project.imageUrl ? <img src={project.imageUrl} alt={project.title} /> : <div className="project-placeholder">MAGERA</div>}
      <div className="project-card__body">
        <p className="eyebrow">Case study</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.clientStory && <small>{project.clientStory}</small>}
        {project.proofOfWork && <p className="project-proof"><strong>Proof of work:</strong> {project.proofOfWork}</p>}
      </div>
    </article>
  )
}