import Section from './Section'
import { experience, asset } from '../data'
export default function Experience() {
  return (
    <Section id="experience" title="Internship Experience" sub="Three internships across data automation and web development.">
      <div className="timeline">
        {experience.map(e => (
          <article key={e.org} className={`card exp ${e.primary ? 'primary' : ''}`}>
            {e.primary && <span className="badge">Primary experience</span>}
            <h3>{e.role}</h3>
            <p className="strong">{e.org}</p>
            <p className="meta">{e.period}{e.project && <> &nbsp;·&nbsp; Project: {e.project}</>}</p>
            <ul>{e.points.map(p => <li key={p}>{p}</li>)}</ul>
            {e.tech && <div className="chips">{e.tech.map(t => <span key={t} className="chip">{t}</span>)}</div>}
            <a className="btn btn-ghost btn-sm" href={asset(e.cert)} target="_blank" rel="noopener noreferrer">View Certificate</a>
          </article>
        ))}
      </div>
    </Section>
  )
}
