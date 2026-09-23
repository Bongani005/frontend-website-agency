import { useEffect, useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { getProjects } from '../utils/api'
import type { Project } from '../types'

export function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([])
  const [error, setError] = useState(false)
  useEffect(() => { getProjects().then(setProjects).catch(() => setError(true)) }, [])
  return <main className="page-shell"><div className="page-heading"><p className="eyebrow">Selected work</p><h1>Proof, not promises.</h1></div>{error && <p className="notice">Projects are unavailable right now. Please check that the API is running.</p>}<div className="project-grid">{projects.map((project) => <ProjectCard key={project.projectId} project={project} />)}</div>{!error && projects.length === 0 && <p className="notice">Loading projects...</p>}</main>
}