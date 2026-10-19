import { useEffect, useRef } from 'react'
export default function Bg() {
  const r = useRef()
  useEffect(() => {
    const c = r.current, x = c.getContext('2d'), S = ['{ }', '</>', '=>', '()', '[]', 'const', 'let', '&&', '<div>', '#', '//', 'map()', 'useState']
    let w, h, id, p
    const rs = () => {
      w = c.width = innerWidth; h = c.height = innerHeight
      p = Array.from({ length: Math.floor(w / 60) }, () => ({ x: Math.random() * w, y: Math.random() * h, s: S[(Math.random() * S.length) | 0], v: 0.2 + Math.random() * 0.6, a: 0.06 + Math.random() * 0.14, f: 11 + Math.random() * 14 }))
    }
    rs(); addEventListener('resize', rs)
    const d = () => {
      x.clearRect(0, 0, w, h)
      const col = getComputedStyle(document.documentElement).getPropertyValue('--c4')
      p.forEach((o) => {
        o.y -= o.v; if (o.y < -20) { o.y = h + 20; o.x = Math.random() * w }
        x.globalAlpha = o.a; x.fillStyle = col; x.font = `${o.f}px JetBrains Mono, monospace`; x.fillText(o.s, o.x, o.y)
      })
      id = requestAnimationFrame(d)
    }
    d()
    return () => { cancelAnimationFrame(id); removeEventListener('resize', rs) }
  }, [])
  return <canvas ref={r} className="bg" />
}
