import * as Si from 'react-icons/si'
import { VscAccount, VscTools } from 'react-icons/vsc'
import { skills, me } from '../data/portfolio'
import { Icon, Fold } from '../components/hooks'

export default function SobreMi() {
  return (
    <section className="view">
      <h1 className="title">
        <span className="k">class</span> <span className="f">SobreMi</span> {'{'}
      </h1>
      
      <div className="two">
        <Fold title="Perfil Profesional" icon={<VscAccount />}>
          <p>
            Soy estudiante de <b>Ingeniería de Sistemas</b> en la {me.uni}. 
            Me apasiona el desarrollo web, especialmente el <b>Frontend</b>: diseñar y construir 
            interfaces atractivas, interactivas y altamente responsivas.
          </p>
          <p>
            A lo largo del curso he consolidado mis conocimientos en HTML, CSS, JavaScript, 
            React y Tailwind CSS. Disfruto enfrentar retos que me permitan mejorar continuamente 
            y aportar soluciones innovadoras y eficientes.
          </p>
          <p className="cm">
            // Docente: {me.teacher}<br />
            // Curso: {me.course}
          </p>
        </Fold>

        <Fold title="Habilidades Técnicas" icon={<VscTools />}>
          {skills.map(([n, p, ic], i) => (
            <div className="skill" key={n}>
              <span>
                <Icon set={Si} name={ic} /> {n}
              </span>
              <div className="bar">
                <i style={{ '--w': p + '%', animationDelay: i * 0.1 + 's' }} />
              </div>
              <em>{p}%</em>
            </div>
          ))}
        </Fold>
      </div>
    </section>
  )
}