import { profile } from '../data'
export default function Footer() {
  return (
    <footer className="footer"><div className="wrap">
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <nav aria-label="Footer">{['about','experience','skills','projects','certificates','contact'].map(i => <a key={i} href={`#${i}`}>{i[0].toUpperCase()+i.slice(1)}</a>)}</nav>
    </div></footer>
  )
}
