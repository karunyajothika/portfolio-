import { useState } from 'react'
import { profile, asset } from '../data'
export default function Hero() {
  const [noPhoto, setNoPhoto] = useState(false)
  return (
    <section id="home" className="hero">
      <div className="wrap hero-in">
        <div className="hero-text">
          <p className="eyebrow">Hello, I'm</p>
          <h1>{profile.name}</h1>
          <p className="headline">{profile.headline}</p>
          <p className="lead">{profile.intro}</p>
          <div className="actions">
            <a className="btn" href={asset(profile.resume)} download="Karunya_Jothika_Selvarajan_Resume.pdf">Download Resume</a>
            <a className="btn btn-ghost" href="#projects">Explore Projects</a>
          </div>
        </div>
        <div className="photo">
          {noPhoto
            ? <div className="initials" role="img" aria-label="Profile placeholder">KJ</div>
            : <img src={asset(profile.photo)} alt={`Portrait of ${profile.name}`} onError={() => setNoPhoto(true)} />}
        </div>
      </div>
    </section>
  )
}
