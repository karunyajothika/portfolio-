export default function Section({ id, title, sub, children }) {
  return (
    <section id={id} className="section">
      <div className="wrap">
        <h2>{title}</h2>{sub && <p className="sub">{sub}</p>}
        {children}
      </div>
    </section>
  )
}
