import { about } from '../data/site.js'
import { withBase } from '../utils/paths'
import './aboutUs.css'

export default function AboutUs() {
  return (
    <section id="quienes-somos" className="about">
      <div className="wrap">
        <div className="about__intro">
          <h2 className="about__title">{about.title}</h2>
          <p className="about__lede">{about.intro}</p>
        </div>

        <div className="about__blocks">
          {about.blocks.map((block, i) => (
            <div
              className={`about__block ${i % 2 === 1 ? 'about__block--reverse' : ''}`}
              key={block.heading}
            >
              <div className="about__block-image">
                <img src={withBase(block.image)} alt="" />
              </div>
              <div className="about__block-text">
                <h3>{block.heading}</h3>
                <p>{block.text}</p>
              </div>
            </div>
          ))}
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
