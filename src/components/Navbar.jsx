import { useState } from 'react'
import { profile, asset } from '../data'
const links = [['home','Home'],['about','About'],['experience','Experience'],['skills','Skills'],['projects','Projects'],['certificates','Certificates'],['contact','Contact']]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#home" className="brand">KJ</a>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
        <nav className={open ? 'open' : ''} aria-label="Main">
          {links.map(([id, l]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{l}</a>)}
          <a className="btn btn-sm" href={asset(profile.resume)} target="_blank" rel="noopener noreferrer">Resume</a>
        </nav>
      </div>
    </header>
  )
}
