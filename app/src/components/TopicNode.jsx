import { useEffect, useState } from 'react'
import { withBase } from '../utils/paths'

// Un solo componente se usa para tema, subtema y subtema-de-subtema: el
// nivel solo cambia el tamaño/indentación (ver topics.css). Si el nodo trae
// `subtopics`, se dibuja como sección desplegable; si trae `link`, se dibuja
// como tarjeta clickeable hacia la presentación (en otro repo).
export default function TopicNode({ node, level, searchActive }) {
  const hasChildren = Array.isArray(node.subtopics) && node.subtopics.length > 0
  const [open, setOpen] = useState(level === 1)

  // Mientras hay una búsqueda activa, las ramas que coinciden se expanden
  // solas. Al borrar la búsqueda, cada nodo respeta de nuevo su estado
  // manual (útil sobre todo en subtemas profundos).
  useEffect(() => {
    if (searchActive && node._forceOpen) setOpen(true)
  }, [searchActive, node._forceOpen])

  return (
    <li className={`topic-node topic-node--level-${level}`}>
      <div className="topic-node__row">
        {hasChildren ? (
          <button
            type="button"
            className={`topic-node__toggle${open ? ' is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? `Contraer ${node.title}` : `Expandir ${node.title}`}
          >
            <span aria-hidden="true">▸</span>
          </button>
        ) : (
          <span className="topic-node__toggle topic-node__toggle--spacer" aria-hidden="true" />
        )}

        {node.thumbnail && (
          <div className="topic-node__thumb">
            <img src={withBase(node.thumbnail)} alt="" loading="lazy" />
          </div>
        )}

        <div className="topic-node__info">
          <h3 className="topic-node__title">{node.title}</h3>
          {node.description && <p className="topic-node__desc">{node.description}</p>}
        </div>

        {node.link && (
          <a
            className="topic-node__link"
            href={node.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver guía ↗
          </a>
        )}
      </div>

      {hasChildren && open && (
        <ul className="topic-node__children">
          {node.subtopics.map((child) => (
            <TopicNode
              key={child.slug}
              node={child}
              level={level + 1}
              searchActive={searchActive}
            />
          ))}
        </ul>
      )}
    </li>
  )
}
