import { useState } from 'react'
import * as Fa from 'react-icons/fa'
import { VscCheck, VscCopy } from 'react-icons/vsc'
import { projects } from '../data/portfolio'
import { Icon, Fold } from '../components/hooks'
const G = [['react', 'React · Aplicaciones', <Fa.FaReact />], ['css', 'HTML / CSS · Maquetación', <Fa.FaCss3Alt />], ['js', 'JavaScript · DOM', <Fa.FaJs />]]
export default function Proyectos() {
  const [all, setAll] = useState({ k: 0, o: true }), [cp, setCp] = useState('')
  const copy = (p) => { navigator.clipboard?.writeText(`git clone ${p.url}.git`); setCp(p.id); setTimeout(() => setCp(''), 1500) }
  const mv = (e) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--mx', e.clientX - r.left + 'px'); e.currentTarget.style.setProperty('--my', e.clientY - r.top + 'px') }
  return (
    <section className="view">
      <h1 className="title"><span className="k">export</span> <span className="f">proyectos</span> = [{projects.length}]</h1>
      <div className="chips">
        <button onClick={() => setAll({ k: all.k + 1, o: true })}>Expandir todo</button>
        <button onClick={() => setAll({ k: all.k + 1, o: false })}>Contraer todo</button>
      </div>
      {G.map(([cat, name, ic]) => {
        const list = projects.filter((p) => p.cat === cat)
        return (
          <Fold key={cat + all.k} title={name} icon={ic} badge={list.length} defaultOpen={all.o}>
            <div className="grid">
              {list.map((p, i) => (
                <article className="card proj" key={p.id} onMouseMove={mv} style={{ '--ac': `var(--${p.color})`, animationDelay: i * 0.07 + 's' }}>
                  <div className="pico"><Icon set={Fa} name={p.icon} /></div>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <div className="tech">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
                  <div className="row">
                    <a className="btn pri" href={p.url} target="_blank" rel="noreferrer"><Fa.FaGithub /> Repositorio</a>
                    <button className="btn" onClick={() => copy(p)} title="Copiar git clone">{cp === p.id ? <VscCheck /> : <VscCopy />}</button>
                  </div>
                </article>
              ))}
            </div>
          </Fold>
        )
      })}
    </section>
  )
}
