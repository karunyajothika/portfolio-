import Section from './Section'
import { certificates, asset } from '../data'
export default function Certificates() {
  return (
    <Section id="certificates" title="Certifications & Achievements" sub="Click any certificate to view the original document.">
      {certificates.map(g => (
        <div key={g.group}>
          <h3 className="h-small">{g.group}</h3>
          <div className="grid three">
            {g.items.map(c => (
              <article className="card cert" key={c.file}>
                <a href={asset(c.file)} target="_blank" rel="noopener noreferrer" aria-label={`View ${c.title}`}>
                  <img src={asset(c.thumb)} alt={`Thumbnail of ${c.title}`} loading="lazy" />
                </a>
                <h4>{c.title}</h4>
                <p className="meta">{c.issuer}{c.date && ` · ${c.date}`}</p>
                <a className="btn btn-ghost btn-sm" href={asset(c.file)} target="_blank" rel="noopener noreferrer">View Certificate</a>
              </article>
            ))}
          </div>
        </div>
      ))}
    </Section>
  )
}
