import { useEffect, useState } from 'react'
import { VscChevronRight } from 'react-icons/vsc'
export function useTyped(words, speed = 70) {
  const [t, setT] = useState(''), [i, setI] = useState(0), [del, setDel] = useState(false)
  useEffect(() => {
    const w = words[i % words.length]
    const id = setTimeout(() => {
      if (!del) { setT(w.slice(0, t.length + 1)); if (t.length + 1 === w.length) setTimeout(() => setDel(true), 1200) }
      else { setT(w.slice(0, t.length - 1)); if (t.length - 1 === 0) { setDel(false); setI(i + 1) } }
    }, del ? speed / 2 : speed)
    return () => clearTimeout(id)
  }, [t, del, i])
  return t
}
export function Count({ to }) {
  const [n, setN] = useState(0)
  useEffect(() => { let v = 0; const id = setInterval(() => { v++; setN(v); if (v >= to) clearInterval(id) }, 90); return () => clearInterval(id) }, [to])
  return n
}
export const Icon = ({ set, name, ...p }) => { const C = set[name]; return C ? <C {...p} /> : null }

export function Fold({ title, icon, badge, defaultOpen = true, children }) {
  const [o, setO] = useState(defaultOpen)
  return (
    <div className={'fold' + (o ? ' open' : '')}>
      <button className="fh" onClick={() => setO(!o)}><VscChevronRight className="ch" />{icon}<b>{title}</b>{badge && <em className="badge">{badge}</em>}</button>
      <div className="fb"><div className="fi"><div className="fp">{children}</div></div></div>
    </div>
  )
}
