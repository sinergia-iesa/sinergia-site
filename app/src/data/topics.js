// Estructura del catálogo: sitio -> tema -> subtema -> subtema (de ese subtema).
//
// Cada nivel usa exactamente la misma forma de objeto, así que la jerarquía
// puede ser tan profunda como haga falta con el mismo código:
//
//   {
//     slug: 'algo',                    // único entre sus hermanos, se usa como key/URL
//     title: 'Título visible',
//     description: 'Texto corto debajo del título (opcional)',
//     thumbnail: '/thumbnails/.../algo.png',  // opcional, ruta dentro de app/public
//     link: 'https://usuario.github.io/repo/', // opcional: URL externa a la presentación
//     subtopics: [ ... ],               // opcional: más nodos anidados
//   }
//
// Reglas:
//   - Las presentaciones NO viven en este repo: cada una es su propio
//     repo (con su propio slides.md y su propio GitHub Action que la
//     despliega). Acá solo se pone el link hacia esa presentación ya
//     publicada.
//   - Un nodo con `link` se ve como tarjeta clickeable que abre esa
//     presentación en una pestaña nueva.
//   - Un nodo con `subtopics` (no vacío) se ve como sección desplegable que
//     agrupa a sus hijos. Un nodo puede tener `link` y `subtopics` al mismo
//     tiempo si el tema en sí también es una presentación además de agrupar
//     subtemas.
//   - El orden dentro de cada arreglo `subtopics` es el orden en que
//     aparecen en el sitio.
//   - Las miniaturas se guardan en carpetas que reflejan la jerarquía, para
//     que nunca choquen nombres entre temas distintos:
//
//       app/public/thumbnails/<tema>/<subtema>/<subtema-del-subtema>.png
//
// Para agregar una presentación nueva basta con:
//   1. Ubicar (o crear) el tema/subtema donde va, dentro del arreglo de
//      `subtopics` correspondiente.
//   2. Agregar el objeto con su `link` apuntando al repo/GitHub Pages ya
//      desplegado de esa presentación.
//   3. (opcional) poner su miniatura en la ruta de thumbnails que le toca
//      según dónde quedó en la jerarquía, y referenciarla en `thumbnail`.

export const topics = [
  {
    slug: 'introduccion',
    title: 'Introducción',
    description:
      'Primeros pasos: cómo se organiza el material y cómo preparar el ambiente de trabajo.',
    subtopics: [
      {
        slug: 'preparacion-ambiente',
        title: 'Configuración del entorno de Python',
        description:
          'Instalación de Python, Visual Studio Code y GitHub para arrancar el curso desde cero.',
        link: 'https://sinergia-iesa.github.io/Preparacion-de-Ambiente/',
        subtopics: [
          // Ejemplo de un subtema DE ESTE subtema:
          //
          // {
          //   slug: 'instalar-python',
          //   title: 'Instalar Python',
          //   description: 'Paso a paso de la instalación en Windows y macOS.',
          //   thumbnail:
          //     '/thumbnails/introduccion/preparacion-ambiente/instalar-python.png',
          //   link: 'https://sinergia-iesa.github.io/instalar-python/',
          //   subtopics: [],
          // },
        ],
      },
      {
        slug: 'introduccion-python',
        title: 'Introducción a Python',
        description:
          'Lo básico para empezar a programar en Python desde cero: variables, tipos de datos, operadores, condicionales, ciclos y listas.',
        link: 'https://sinergia-iesa.github.io/Introduccion-a-Python/',
        subtopics: [],
      },
    ],
  },
]
