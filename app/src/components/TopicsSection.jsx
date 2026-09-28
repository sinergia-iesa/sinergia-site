import { useMemo, useState } from 'react'
import { topics } from '../data/topics.js'
import TopicNode from './TopicNode.jsx'
import './topics.css'

// Filtra el árbol completo conservando la jerarquía:
//  - si un nodo coincide con la búsqueda, se muestra completo (con todos
//    sus subtemas tal cual, sin filtrarlos más).
//  - si un nodo NO coincide pero alguno de sus descendientes sí, se muestra
//    solo con esos descendientes que coincidieron (podado).
// `_forceOpen` le indica a TopicNode que se abra solo mientras se busca.
function filterTopics(nodes, query) {
  if (!query) return nodes

  const q = query.toLowerCase()
  const result = []

  for (const node of nodes) {
    const selfMatch = `${node.title} ${node.description ?? ''}`.toLowerCase().includes(q)
    const children = node.subtopics ?? []

    if (selfMatch) {
      result.push({ ...node, _forceOpen: children.length > 0 })
      continue
    }

    const filteredChildren = filterTopics(children, query)
    if (filteredChildren.length > 0) {
      result.push({ ...node, subtopics: filteredChildren, _forceOpen: true })
    }
  }

  return result
}

export default function TopicsSection() {
  const [query, setQuery] = useState('')
  const trimmed = query.trim()
  const searchActive = trimmed.length > 0

  // Filtra pero nunca reordena: el orden visible siempre respeta el orden
  // en el que los temas/subtemas están escritos en topics.js
  const results = useMemo(() => filterTopics(topics, trimmed), [trimmed])

  return (
    <section id="guias-iniciales" className="topics">
      <div className="wrap">
        <div className="topics__head">
          <div>
            <h2>Guías iniciales</h2>
            <p>Explora el material de las guías organizado por tema y subtema.</p>
          </div>

          <label className="topics__search">
            <span className="sr-only">Buscar tema o guía</span>
            <input
              type="search"
              placeholder="Buscar por título o tema…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>

        {results.length > 0 ? (
          <ul className="topics__tree">
            {results.map((node) => (
              <TopicNode key={node.slug} node={node} level={1} searchActive={searchActive} />
            ))}
          </ul>
        ) : (
          <p className="topics__empty">
            No hay temas ni guías que coincidan con “{query}”.
          </p>
        )}
      </div>
    </section>
  )
}
