// Catálogo de investigaciones. Se edita a mano, igual que topics.js.
//
// 1) `fields` define los campos disponibles (una sola vez). Agregar un campo
//    nuevo es agregar una línea; el orden acá es el orden de los filtros.
//    Solo aparecen en el filtro los campos que tengan al menos una
//    investigación.
//
// 2) `research` es una lista plana. Cada investigación:
//
//   {
//     slug: 'algo-unico',                 // único, se usa como key
//     title: 'Título visible',
//     summary: 'Resumen corto (1-3 líneas)',
//     fields: ['medicina', 'ambiente'],   // uno o varios slugs de `fields`
//     authors: ['Nombre Apellido'],       // opcional
//     year: 2026,                         // opcional
//     status: 'En curso',                 // opcional: 'En curso' | 'Finalizada'
//     link: 'https://...',                // opcional: paper, repo o presentación
//     thumbnail: '/thumbnails/investigaciones/algo-unico.png', // opcional (app/public)
//   }
//
//   - Sin `link` la tarjeta se muestra igual, sin botón.
//   - El orden visible es por año (más reciente primero); a igual año, el
//     orden en que están escritas acá.

export const fields = [
  { slug: 'medicina', label: 'Medicina' },
  { slug: 'agronomia', label: 'Agronomía' },
  { slug: 'ciencias-sociales', label: 'Ciencias sociales' },
  { slug: 'ambiente', label: 'Ambiente' },
]

export const research = [
  // Ejemplos de plantilla: reemplázalos por investigaciones reales.
  {
    slug: 'ejemplo-imagenes-medicas',
    title: '[Ejemplo] Clasificación de imágenes médicas con redes neuronales',
    summary:
      'Plantilla de una investigación en Medicina. Reemplaza este texto por un resumen breve del proyecto.',
    fields: ['medicina'],
    authors: ['Nombre Apellido'],
    year: 2026,
    status: 'En curso',
  },
  {
    slug: 'ejemplo-cultivos',
    title: '[Ejemplo] Monitoreo de cultivos con imágenes satelitales',
    summary:
      'Plantilla de una investigación interdisciplinar: aparece tanto en Agronomía como en Ambiente.',
    fields: ['agronomia', 'ambiente'],
    authors: ['Nombre Apellido', 'Nombre Apellido'],
    year: 2025,
    status: 'Finalizada',
  },
]
