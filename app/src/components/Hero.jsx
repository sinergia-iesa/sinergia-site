import { site } from '../data/site.js'
import { withBase } from '../utils/paths'
import './hero.css'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <img className="hero__bg" src={withBase('hero.png')} alt="" />
      <div className="hero__scrim" />

      <div className="hero__content wrap">
        <h1 className="hero__title">{site.name}</h1>
        <p className="hero__tagline">{site.tagline}</p>
        <p className="hero__subtitle">{site.heroSubtitle}</p>

        <a href="#guias-iniciales" className="hero__cta">
          Ver guías iniciales
        </a>
      </div>

      <a href="#quienes-somos" className="hero__scroll-cue" aria-label="Bajar a Quiénes somos">
        <span />
      </a>
    </header>
  )
}
