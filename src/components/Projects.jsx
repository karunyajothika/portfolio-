import Section from './Section'
import { projects, profile } from '../data'
const ext = { target: '_blank', rel: 'noopener noreferrer' }
export default function Projects() {
  return (
    <Section id="projects" title="Projects & Work Samples" sub="Source files and work samples are in my Google Drive folder (view-only) and on GitHub.">
      <div className="actions">
        <a className="btn" href={profile.drive} {...ext}>Open Google Drive</a>
        <a className="btn btn-ghost" href={profile.github} {...ext}>GitHub</a>
        <a className="btn btn-ghost" href={profile.linkedin} {...ext}>LinkedIn</a>
      </div>
      <div className="grid three">
        {projects.map(p => (
          <article key={p.name} className={`card ${p.featured ? 'featured' : ''}`}>
            <span className="tag">{p.tag}</span>
            <h3>{p.name}</h3><p>{p.text}</p>
            {p.tech && <div className="chips">{p.tech.map(t => <span key={t} className="chip">{t}</span>)}</div>}
          </article>
        ))}
      </div>
      <p className="meta">Not every project is public on GitHub. Please see the Google Drive folder for the complete work samples.</p>
    </Section>
  )
}
