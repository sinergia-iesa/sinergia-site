# Sitio de Sinerg[IA]²

Portal en React + Vite que cataloga presentaciones hechas en Slidev, publicado
en GitHub Pages con GitHub Actions.

## URLs en producción

Este repo se llama `sinergia-site`, así que GitHub Pages **siempre** sirve
el sitio bajo esa subruta — nunca en la raíz de `sinergia-iesa.github.io`.
Esto no es configurable desde el código: así funciona GitHub Pages para
cualquier repo de proyecto que no se llame exactamente `sinergia-iesa.github.io`.

- Portal: https://sinergia-iesa.github.io/sinergia-site/

## Estructura

```
sinergia-site/
└── app/                      → portal React (hero, quiénes somos, investigaciones, guías iniciales)
    ├── public/
    │   ├── hero.png          → fondo del hero (reemplázalo a tu gusto)
    │   └── thumbnails/       → miniaturas, organizadas igual que la jerarquía
    │       └── <tema>/<subtema>/<subtema-del-subtema>.png
    └── src/
        ├── data/
        │   ├── site.js       → nombre del proyecto, textos del hero y "quiénes somos"
        │   ├── research.js   → campos + lista de investigaciones (filtrables por campo)
        │   └── topics.js     → árbol de guías: tema → subtema → subtema (el orden aquí = el orden visible)
        └── components/
            ├── Hero.jsx
            ├── AboutUs.jsx
            ├── ResearchSection.jsx → investigaciones con filtro por campo y búsqueda
            ├── TopicsSection.jsx → busca y renderiza el árbol de guías iniciales
            └── TopicNode.jsx     → un solo componente recursivo para tema/subtema/subtema
```

**Importante** este repo **no** contiene ninguna
presentación**. Cada presentación es su propio repositorio (con su propio
`slides.md` y su propio GitHub Action que la despliega por separado, como
`preparacion-ambiente`). Acá en el portal solo se guarda, a mano, el
**link** hacia cada presentación ya publicada.

## Cómo correr en local

```bash
npm install --ignore-scripts
npm run dev   # portal en http://localhost:5173
```

Para correr una presentación en local, entra a su propio repo (ej.
`preparacion-ambiente`) y corre `npm run dev` ahí — ver el README de ese
repo.

## Agregar una nueva guía (o tema/subtema)

Las presentaciones viven en repos aparte, ya desplegados con su propio
GitHub Action. Acá en el portal solo se edita `app/src/data/topics.js`:

1. Ubica (o crea) el tema/subtema donde va, dentro del arreglo `subtopics`
   que le corresponde en `app/src/data/topics.js`.
2. Agrega el objeto del nuevo nodo con su `link` apuntando a la URL ya
   publicada de esa presentación (el repo aparte, desplegado con su propio
   Action).
3. (opcional) Agrega su miniatura en
   `app/public/thumbnails/<tema>/<subtema>/.../archivo.png` — la ruta de
   carpetas debe reflejar dónde quedó el nodo en la jerarquía — y referéncia
   esa ruta en el campo `thumbnail`.
4. Haz commit y push a `main`.

`topics.js` trae comentarios y un ejemplo de plantilla para cada nivel
(tema, subtema, subtema de subtema) — solo hay que copiar el objeto y
llenarlo.

## Agregar una investigación

Se edita solo `app/src/data/research.js` (trae la plantilla comentada):

1. Si el campo no existe (Medicina, Agronomía…), agrégalo al arreglo `fields`
   con un `slug` y un `label`. El orden ahí es el orden de los filtros.
2. Agrega un objeto a `research` con `title`, `summary`, `fields` (uno o
   varios slugs), y opcionalmente `authors`, `year`, `status`, `link` y
   `thumbnail`.
3. (opcional) Miniatura en `app/public/thumbnails/investigaciones/<slug>.png`.
4. Haz commit y push a `main`.

Una investigación puede pertenecer a varios campos. Las de ejemplo llevan
`[Ejemplo]` en el título: bórralas cuando agregues las reales.
