import { useEffect, useState } from 'react'
import { VscHome, VscAccount, VscFolderOpened, VscBook, VscLightbulb, VscLibrary, VscClose, VscSearch, VscSourceControl, VscFiles, VscChevronDown, VscSymbolColor } from 'react-icons/vsc'
import { FaReact } from 'react-icons/fa'
import Bg from './components/Bg'
import Inicio from './views/Inicio'
import SobreMi from './views/SobreMi'
import Proyectos from './views/Proyectos'
import Cuaderno from './views/Cuaderno'
import Reflexion from './views/Reflexion'
import Bibliografia from './views/Bibliografia'
import { me } from './data/portfolio'
const V = [
  { id: 'inicio', file: 'Inicio.jsx', I: VscHome, C: Inicio },
  { id: 'sobre', file: 'SobreMi.jsx', I: VscAccount, C: SobreMi },
  { id: 'proyectos', file: 'Proyectos.jsx', I: VscFolderOpened, C: Proyectos },
  { id: 'cuaderno', file: 'Cuaderno.jsx', I: VscBook, C: Cuaderno },
  { id: 'reflexion', file: 'Reflexion.jsx', I: VscLightbulb, C: Reflexion },
  { id: 'biblio', file: 'Bibliografia.jsx', I: VscLibrary, C: Bibliografia },
]
const THEMES = [['tokyo', 'Neon Night'], ['dracula', 'Dracula'], ['monokai', 'Monokai'], ['aurora', 'Aurora']]
export default function App() {
  const [cur, setCur] = useState('inicio'), [open, setOpen] = useState(['inicio'])
  const [th, setTh] = useState(0), [pal, setPal] = useState(false), [q, setQ] = useState('')
  useEffect(() => { document.documentElement.dataset.theme = THEMES[th][0] }, [th])
  useEffect(() => {
    const h = (e) => { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setPal((p) => !p); setQ('') } if (e.key === 'Escape') setPal(false) }
    addEventListener('keydown', h); return () => removeEventListener('keydown', h)
  }, [])
  const go = (id) => { setOpen((o) => (o.includes(id) ? o : [...o, id])); setCur(id); setPal(false) }
  const close = (id, e) => {
    e.stopPropagation()
    const n = open.filter((x) => x !== id); const rest = n.length ? n : ['inicio']
    setOpen(rest); if (cur === id) setCur(rest[rest.length - 1])
  }
  const cmds = [...V.map((v) => ({ n: `Abrir ${v.file}`, f: () => go(v.id) })), ...THEMES.map(([, n], i) => ({ n: `Tema: ${n}`, f: () => { setTh(i); setPal(false) } }))].filter((c) => c.n.toLowerCase().includes(q.toLowerCase()))
  const View = V.find((v) => v.id === cur).C
  return (
    <div className="ide">
      <Bg />
      <header className="titlebar">
        <span className="lights"><i /><i /><i /></span>
        <span className="ttl">{V.find((v) => v.id === cur).file} — CAMARGO ALVARADO — Visual Studio Code</span>
        <button className="kbd" onClick={() => setPal(true)}><VscSearch /> Ctrl+K</button>
      </header>
      <aside className="act">
        {[VscFiles, VscSearch, VscSourceControl].map((I, i) => <button key={i} className={i === 0 ? 'on' : ''} onClick={() => i === 1 && setPal(true)}><I /></button>)}
        <button className="bot" onClick={() => setTh((th + 1) % THEMES.length)} title="Cambiar tema"><VscSymbolColor /></button>
      </aside>
      <nav className="exp">
        <h6>EXPLORADOR</h6>
        <p className="dir"><VscChevronDown /> PORTAFOLIO</p>
        <p className="dir sub"><VscChevronDown /> src / views</p>
        {V.map((v) => <button key={v.id} className={cur === v.id ? 'on' : ''} onClick={() => go(v.id)}><v.I /> {v.file}</button>)}
        <p className="dir sub">package.json</p>
        <p className="dir sub">vite.config.js</p>
        <div className="me"><b>{me.short}</b><span>{me.course}</span></div>
      </nav>
      <main>
        <div className="tabs">
          {open.map((id) => { const v = V.find((x) => x.id === id); return (
            <div key={id} className={'tab' + (cur === id ? ' on' : '')} onClick={() => setCur(id)}><FaReact className="rx" /> {v.file} <VscClose onClick={(e) => close(id, e)} /></div>
          ) })}
        </div>
        <div className="scroll"><View key={cur} go={go} /></div>
      </main>
      <footer className="status">
        <span><VscSourceControl /> main</span><span>React 18 · Vite</span>
        <span className="sp" />
        <button onClick={() => setTh((th + 1) % THEMES.length)}><VscSymbolColor /> {THEMES[th][1]}</button><span>UTF-8</span><span>JSX</span>
      </footer>
      <nav className="mnav">{V.map((v) => <button key={v.id} className={cur === v.id ? 'on' : ''} onClick={() => go(v.id)}><v.I /></button>)}</nav>
      {pal && (
        <div className="ov" onClick={() => setPal(false)}>
          <div className="pal" onClick={(e) => e.stopPropagation()}>
            <input autoFocus placeholder="> Escribe un comando…" value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && cmds[0]?.f()} />
            {cmds.map((c) => <button key={c.n} onClick={c.f}>{c.n}</button>)}
          </div>
        </div>
      )}
    </div>
  )
}
