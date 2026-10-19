import { VscLibrary, VscLinkExternal } from 'react-icons/vsc'
import { books, links } from '../data/portfolio'
import { Fold } from '../components/hooks'
export default function Bibliografia() {
  return (
    <section className="view">
      <h1 className="title"><span className="k">import</span> {'{ referencias }'} <span className="k">from</span> <span className="s">"./bibliografia"</span></h1>
      <div className="two">
        <Fold title="Libros" icon={<VscLibrary />} badge={books.length}><ul>{books.map((b) => <li key={b}>{b}</li>)}</ul></Fold>
        <Fold title="Recursos web" icon={<VscLinkExternal />} badge={links.length}><ul>{links.map(([n, u]) => <li key={n}><a href={u} target="_blank" rel="noreferrer">{n}</a></li>)}</ul></Fold>
      </div>
    </section>
  )
}
