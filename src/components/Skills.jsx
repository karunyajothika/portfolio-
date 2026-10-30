import Section from './Section'
import { skills } from '../data'
export default function Skills() {
  return (
    <Section id="skills" title="Skills" sub="Used in internships and projects, with training-based knowledge listed separately.">
      <h3 className="h-small">Used in internships & projects</h3>
      <div className="grid three">
        {skills.applied.map(s => (
          <div className="card" key={s.title}><h3>{s.title}</h3>
            <div className="chips">{s.items.map(i => <span key={i} className="chip">{i}</span>)}</div></div>
        ))}
      </div>
      <h3 className="h-small">Learned through training & courses</h3>
      <div className="chips">{skills.training.map(i => <span key={i} className="chip soft">{i}</span>)}</div>
    </Section>
  )
}
