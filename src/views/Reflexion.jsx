import { VscQuestion, VscSync, VscLightbulb } from 'react-icons/vsc'
import { reflexion } from '../data/portfolio'
import { Fold } from '../components/hooks'
const I = [<VscQuestion />, <VscSync />, <VscLightbulb />]
export default function Reflexion() {
  return (
    <section className="view">
      <h1 className="title"><span className="k">return</span> <span className="s">"Reflexión final (Semanas 1-6)"</span></h1>
      {reflexion.map(([t, p], i) => <Fold key={t} title={t} icon={I[i]} defaultOpen={i === 0}><p>{p}</p></Fold>)}
    </section>
  )
}
