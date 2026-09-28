import { about, site } from '../data/site.js'
import { withBase } from '../utils/paths'
import './aboutUs.css'

export default function AboutUs() {
  return (
    <section id="quienes-somos" className="about">
      <div className="wrap">
        <div className="about__top">
          <div className="about__intro">
            <span className="about__eyebrow">{site.name}</span>
            <h2 className="about__title">{about.title}</h2>
            <p className="about__lede">{about.intro}</p>
          </div>

          <div className="about__identity">
            <div className="about__identity-card">
              <img src={withBase('logo-full.png')} alt="Sinerg[IA]²" />
            </div>
          </div>
        </div>

        <div className="about__goals">
          <div className="about__section about__section--general">
            <h3>Objetivo general</h3>
            <p>{about.objetivoGeneral}</p>
          </div>

          <div className="about__section about__section--especificos">
            <h3>Objetivos específicos</h3>
            <ul className="about__list">
              {about.objetivosEspecificos.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="about__section">
          <h3>{about.rolesIntro}</h3>
          <div className="about__roles">
            {about.roles.map((role) => (
              <div className="about__role" key={role.rol}>
                <h4>{role.rol}</h4>
                <p className="about__role-perfil">
                  <strong>Perfil: </strong>
                  {role.perfil}
                </p>
                <p className="about__role-resp-label">
                  <strong>Responsabilidades:</strong>
                </p>
                <ul className="about__list">
                  {role.responsabilidades.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <dl className="about__stats">
          {about.stats.map((stat) => (
            <div className="about__stat" key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
