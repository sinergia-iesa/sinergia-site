import { site } from '../data/site.js'
import { withBase } from '../utils/paths'
import './navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="wrap navbar__inner">
        <a href="#top" className="navbar__brand">
          <img src={withBase('logo.png')} alt="" className="navbar__logo" />
          <span>{site.name}</span>
        </a>
        <div className="navbar__links">
          <a href="#quienes-somos">Quiénes somos</a>
          <a href="#guias-iniciales">Guías iniciales</a>
          <a href="#investigaciones">Investigaciones</a>
        </div>
      </div>
    </nav>
  )
}
