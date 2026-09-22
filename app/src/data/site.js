// Textos generales del sitio. Se cambia aquí el nombre del proyecto, el
// eslogan del hero y el contenido de "Quiénes somos" sin tocar componentes.

export const site = {
  name: 'Sinerg[IA]²',
  tagline: 'Informática aplicada e inteligencia artificial en la Sede del Atlántico',
  heroSubtitle:
    'Sitio para consultar los proyectos y guías de Sinerg[IA]²: instalación de herramientas, arquitectura de proyectos, entre otros...',
}

export const about = {
  title: 'Quiénes somos',
  intro:
    'Sinergia es una iniciativa académica extracurricular diseñada para promover, articular y explorar la informática aplicada y los modelos computacionales de inteligencia artificial en las diversas disciplinas y carreras de la Sede del Atlántico de la UCR. A través de un enfoque práctico, colaborativo, de mentoría y autosostenible, las personas miembros analizan datos de diversa naturaleza, transfieren conocimiento a la comunidad universitaria e interaccionan con redes científicas nacionales e internacionales.',

  objetivoGeneral:
    'Fomentar la investigación, desarrollo y divulgación de soluciones basadas en la inteligencia artificial y la informática aplicada para abordar problemas reales de las áreas académicas de la Sede del Atlántico y democratizar el conocimiento.',

  objetivosEspecificos: [
    'Capacitar a las personas integrantes, mediante talleres prácticos, en el procesamiento y análisis de datos cuantitativos, imágenes, texto y señales mediante modelos computacionales avanzados de inteligencia artificial.',
    'Garantizar un modelo de transferencia de conocimiento y continuidad generacional mediante mentorías de estudiantes avanzados hacia estudiantes de nuevo ingreso.',
    'Establecer vínculos con investigadores e investigadoras nacionales e internacionales para la realización de seminarios y proyectos colaborativos.',
  ],

  rolesIntro:
    'Estructura orgánica y roles: el laboratorio opera bajo un esquema horizontal y colaborativo.',

  roles: [
    {
      rol: 'Docente líder',
      perfil:
        'Docentes de la Sede del Atlántico de la UCR con experiencia en informática aplicada, IA o áreas afines.',
      responsabilidades: [
        'Ofrecer acompañamiento académico y validación metodológica.',
        'Gestionar avales institucionales, espacios físicos, recursos presupuestarios y técnicos.',
        'Facilitar el vínculo con redes de investigación y ponentes externos.',
      ],
    },
    {
      rol: 'Estudiantes mentores',
      perfil:
        'Estudiantes de la Sede del Atlántico de la UCR, de niveles avanzados (tercer año o más en la carrera) y con experiencia previa en el laboratorio.',
      responsabilidades: [
        'Efectuar propuestas de actividades y proyectos para el cronograma semestral en los espacios de planificación del laboratorio.',
        'Realizar mentoría en los equipos de trabajo multidisciplinares.',
        'Realizar propuestas de capacitaciones para los ciclos de formación interna en los espacios de planificación del laboratorio.',
      ],
    },
    {
      rol: 'Estudiantes nóveles',
      perfil: 'Estudiantes de diversas carreras que recién se incorporan al laboratorio.',
      responsabilidades: [
        'Aportar problemáticas y conjuntos de datos de sus áreas.',
        'Investigar e implementar modelos de IA aplicados a dichos datos.',
        'Asistir a las sesiones de formación y participar en la creación de talleres.',
      ],
    },
    {
      rol: 'Investigadores(as) invitados(as)',
      perfil: 'Especialistas externos, docentes o investigadores(as) nacionales e internacionales.',
      responsabilidades: [
        'Impartir charlas magistrales y seminarios especializados.',
        'Realizar retroalimentación sobre los proyectos desarrollados en el laboratorio.',
      ],
    },
  ],

  stats: [
    { value: '2', label: 'presentaciones publicadas' },
    { value: '100%', label: 'accesible desde el navegador' },
    { value: '0', label: 'instalaciones necesarias para verlas' },
  ],
}
