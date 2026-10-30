import Section from './Section'
import { profile } from '../data'
const ext = { target: '_blank', rel: 'noopener noreferrer' }
export default function Contact() {
  return (
    <Section id="contact" title="Get in Touch" sub="I'm open to suitable entry-level opportunities. Let's connect.">
      <div className="card contact">
        <p><strong>Email:</strong> {profile.email}</p>
        {profile.showPhone && <p><strong>Phone:</strong> {profile.phone}</p>}
        <p><strong>Location:</strong> {profile.location}</p>
        <div className="actions">
          <a className="btn" href={`mailto:${profile.email}`}>Email Me</a>
          {profile.showPhone && <a className="btn btn-ghost" href={`tel:+91${profile.phone}`}>Call</a>}
          <a className="btn btn-ghost" href={profile.linkedin} {...ext}>LinkedIn</a>
          <a className="btn btn-ghost" href={profile.github} {...ext}>GitHub</a>
          <a className="btn btn-ghost" href={profile.drive} {...ext}>Google Drive</a>
        </div>
      </div>
    </Section>
  )
}
