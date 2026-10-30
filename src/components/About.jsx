import Section from './Section'
import { education, interests } from '../data'
export default function About() {
  return (
    <Section id="about" title="About & Education" sub="A Computer Science graduate who enjoys learning and contributing to practical solutions.">
      <div className="grid two">
        <div className="card">
          <h3>Education</h3>
          <p className="strong">{education.degree}</p>
          <p>{education.college}</p>
          <p className="meta">Graduation: {education.year} &nbsp;·&nbsp; CGPA: {education.cgpa}</p>
        </div>
        <div className="card">
          <h3>Areas I'm open to</h3>
          <div className="chips">{interests.map(i => <span key={i} className="chip">{i}</span>)}</div>
          <p className="meta">Adaptable, quick to learn, and keen to contribute to different teams.</p>
        </div>
      </div>
    </Section>
  )
}
