import { useMemo, useState } from 'react'
import { fields, research } from '../data/research.js'
import { withBase } from '../utils/paths'
import './research.css'

const fieldLabel = Object.fromEntries(fields.map((f) => [f.slug, f.label]))

// Orden: año descendente; a igual año se respeta el orden de research.js
const sorted = research
  .map((item, index) => ({ item, index }))
  .sort((a, b) => (b.item.year ?? 0) - (a.item.year ?? 0) || a.index - b.index)
  .map(({ item }) => item)

// Solo se ofrecen los campos que tienen al menos una investigación
const activeFields = fields
  .map((f) => ({ ...f, count: research.filter((r) => r.fields?.includes(f.slug)).length }))
  .filter((f) => f.count > 0)

function matches(item, query) {
  const haystack = [
    item.title,
    item.summary,
    ...(item.authors ?? []),
    ...(item.fields ?? []).map((slug) => fieldLabel[slug] ?? slug),
  ]
    .join(' ')
    .toLowerCase()
  return haystack.includes(query)
}

export default function ResearchSection() {
  const [query, setQuery] = useState('')
  const [field, setField] = useState('todas')

  const trimmed = query.trim().toLowerCase()

  const results = useMemo(
    () =>
      sorted.filter(
        (item) =>
          (field === 'todas' || item.fields?.includes(field)) &&
          (!trimmed || matches(item, trimmed)),
      ),
    [field, trimmed],
  )

  return (
    <section id="investigaciones" className="research">
      <div className="wrap">
        <div className="research__head">
          <div>
            <h2>Investigaciones</h2>
            <p>Proyectos de investigación de Sinerg[IA]² clasificados por campo.</p>
          </div>

          <label className="research__search">
            <span className="sr-only">Buscar investigación</span>
            <input
              type="search"
              placeholder="Buscar por título, autor o campo…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>

        {activeFields.length > 0 && (
          <div className="research__filters" role="group" aria-label="Filtrar por campo">
            <button
              type="button"
              className={`research__chip${field === 'todas' ? ' is-active' : ''}`}
              aria-pressed={field === 'todas'}
              onClick={() => setField('todas')}
            >
              Todas <span>{research.length}</span>
            </button>
            {activeFields.map((f) => (
              <button
                key={f.slug}
                type="button"
                className={`research__chip${field === f.slug ? ' is-active' : ''}`}
                aria-pressed={field === f.slug}
                onClick={() => setField(f.slug)}
              >
                {f.label} <span>{f.count}</span>
              </button>
            ))}
          </div>
        )}

        {results.length > 0 ? (
          <ul className="research__grid">
            {results.map((item) => (
              <li className="research-card" key={item.slug}>
                {item.thumbnail && (
                  <div className="research-card__thumb">
                    <img src={withBase(item.thumbnail)} alt="" loading="lazy" />
                  </div>
                )}

                <div className="research-card__body">
                  <div className="research-card__tags">
                    {(item.fields ?? []).map((slug) => (
                      <span className="research-card__tag" key={slug}>
                        {fieldLabel[slug] ?? slug}
                      </span>
                    ))}
                  </div>

                  <h3 className="research-card__title">{item.title}</h3>
                  {item.summary && <p className="research-card__summary">{item.summary}</p>}

                  <p className="research-card__meta">
                    {[
                      item.authors?.length ? item.authors.join(', ') : null,
                      item.year,
                      item.status,
                    ]
                      .filter(Boolean)
                      .join(' · ')}
                  </p>

                  {item.link && (
                    <a
                      className="research-card__link"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver investigación ↗
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="research__empty">
            {research.length === 0
              ? 'Pronto publicaremos nuestras investigaciones.'
              : 'No hay investigaciones que coincidan con la búsqueda o el campo seleccionado.'}
          </p>
        )}
      </div>
    </section>
  )
}
