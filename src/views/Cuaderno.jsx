import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { Fold } from '../components/hooks'
import { weeks, projects } from '../data/portfolio'
export default function Cuaderno() {
  const [a, setA] = useState({ k: 0, o: false })
  return (
    <section className="view">
      <h1 className="title"><span className="k">git</span> log <span className="s">--semanas 1..6</span></h1>
      <div className="chips">
        <button onClick={() => setA({ k: a.k + 1, o: true })}>Expandir todo</button>
        <button onClick={() => setA({ k: a.k + 1, o: false })}>Contraer todo</button>
      </div>
      {weeks.map((w) => (
        <Fold key={w.n + '-' + a.k} defaultOpen={a.k ? a.o : w.n === 2} icon={<span className="dot2">{w.n}</span>} title={`Semana ${w.n} · ${w.topic}`} badge={w.theory ? 'teórica' : null}>
          <p>{w.desc}</p>
          <div className="tech">{w.tags.map((t) => <span key={t}>{t}</span>)}</div>
          <p className="cm">// Reflexión: {w.ref}</p>
          {w.repos.map((r) => <a key={r} className="btn" href={projects.find((p) => p.id === r).url} target="_blank" rel="noreferrer"><FaGithub /> {r}</a>)}
          {!w.repos.length && <p className="cm">// Semana teórica, sin laboratorio práctico</p>}
        </Fold>
      ))}
    </section>
  )
}
