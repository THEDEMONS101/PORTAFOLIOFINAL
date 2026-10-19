export const me = {
  name: 'Edilson Roberto Camargo',
  short: 'Edilson Camargo',
  code: '2019100619G',
  uni: 'Universidad Nacional del Centro del Perú (UNCP)',
  course: 'Desarrollo de Aplicaciones Web · IS093A',
  teacher: 'Dr. Jaime Suasnabar Terrel',
  github: 'https://github.com/THEDEMONS101',
  roles: [
    'Frontend Developer',
    'React Enthusiast',
    'Estudiante de Ing. de Sistemas',
    'UI Tinkerer',
  ],
}

export const skills = [
  ['HTML5', 92, 'SiHtml5'],
  ['CSS3', 88, 'SiCss3'],
  ['JavaScript', 82, 'SiJavascript'],
  ['TypeScript', 60, 'SiTypescript'],
  ['React', 78, 'SiReact'],
  ['Tailwind CSS', 80, 'SiTailwindcss'],
  ['Bootstrap', 85, 'SiBootstrap'],
  ['Git / GitHub', 80, 'SiGit'],
]

// Helper para enlazar tus repos (apunta a THEDEMONS101)
const gh = (r) => `https://github.com/THEDEMONS101/${r}`

export const projects = [
  {
    id: 'PORTAFOLIOFINAL',
    name: 'Portafolio Final',
    cat: 'react',
    icon: 'FaReact',
    color: 'c4',
    tech: ['React', 'Vite', 'Tailwind'],
    desc: 'Portafolio personal desarrollado para el curso, con diseño moderno, modo oscuro y navegación interactiva.',
  },
  {
    id: 'DAW-SEMANA07',
    name: 'DAW Semana 07',
    cat: 'js',
    icon: 'FaBolt',
    color: 'c3',
    tech: ['JavaScript', 'DOM', 'Lógica'],
    desc: 'Práctica de la semana 7 aplicando interactividad, manipulación del DOM y lógica con JavaScript.',
  },
  {
    id: 'DAW-P-SEMANA05',
    name: 'DAW Práctica Semana 05',
    cat: 'js',
    icon: 'FaLaptopCode',
    color: 'c2',
    tech: ['JavaScript', 'DOM'],
    desc: 'Ejercicios prácticos de JavaScript enfocados en eventos y manipulación de elementos.',
  },
  {
    id: 'DAW_P_04',
    name: 'DAW Práctica 04',
    cat: 'css',
    icon: 'FaCss3Alt',
    color: 'c1',
    tech: ['HTML5', 'CSS3', 'Responsive'],
    desc: 'Maquetación web responsiva aplicando estilos avanzados con CSS3.',
  },
  {
    id: 'DAW_P_03_parte02',
    name: 'DAW Práctica 03 - Parte 02',
    cat: 'css',
    icon: 'FaCode',
    color: 'c5',
    tech: ['HTML5', 'Estructura'],
    desc: 'Segunda parte de la práctica 03, enfocada en estructuración semántica de HTML.',
  },
  {
    id: 'DAW_P_03',
    name: 'DAW Práctica 03',
    cat: 'css',
    icon: 'FaHtml5',
    color: 'c3',
    tech: ['HTML5'],
    desc: 'Primera parte de la práctica 03 con ejercicios base de etiquetas HTML.',
  },
  {
    id: 'Practica01_DAW',
    name: 'Práctica 01 DAW',
    cat: 'css',
    icon: 'FaGlobe',
    color: 'c4',
    tech: ['HTML5'],
    desc: 'Primera práctica del curso: introducción a HTML y estructura básica de una página web.',
  },
  {
    id: 'portafolio-web-uncp',
    name: 'Portafolio Web UNCP',
    cat: 'css',
    icon: 'FaClipboardCheck',
    color: 'c2',
    tech: ['HTML5', 'CSS3'],
    desc: 'Portafolio web inicial del curso con diseño responsivo y secciones organizadas.',
  },
].map((p) => ({ ...p, url: gh(p.id) }))

export const weeks = [
  {
    n: 1,
    topic: 'Fundamentos Web',
    theory: true,
    tags: ['DNS', 'HTTP', 'VS Code'],
    repos: [],
    desc: 'Funcionamiento de la web: DNS, HTTP y roles (Frontend, Backend, Fullstack). Configuración del entorno con VS Code.',
    ref: 'Entendí cómo viaja una petición por internet y preparé mi entorno de trabajo para todo el curso.',
  },
  {
    n: 2,
    topic: 'HTML y CSS',
    tags: ['HTML5', 'DOM', 'Flexbox', 'Grid'],
    repos: ['Practica01_DAW', 'portafolio-web-uncp'],
    desc: 'Estructura HTML5, árbol DOM, SEO, CSS3, Flexbox, Grid y diseño responsivo.',
    ref: 'Mi primer acercamiento real a la maquetación: pasar de un diseño a código que se adapta a cualquier pantalla.',
  },
  {
    n: 3,
    topic: 'Bootstrap y Tailwind',
    tags: ['Bootstrap', 'Tailwind'],
    repos: ['DAW_P_03', 'DAW_P_03_parte02', 'DAW_P_04'],
    desc: 'Interfaces con librerías CSS: componentes, grid system y utilidades.',
    ref: 'Descubrí cuánto aceleran el desarrollo las librerías CSS y cuándo conviene usar cada una.',
  },
  {
    n: 4,
    topic: 'JavaScript y TypeScript',
    tags: ['JS', 'TS', 'DOM', 'Canvas'],
    repos: ['DAW-P-SEMANA05'],
    desc: 'Variables, operadores, estructuras de control, funciones, manejo del DOM, TypeScript y Canvas.',
    ref: 'Las páginas cobraron vida al manipular el DOM; TypeScript me mostró el valor del tipado.',
  },
  {
    n: 5,
    topic: 'Framework JS (React)',
    theory: true,
    tags: ['JSX', 'Props', 'CSR'],
    repos: [],
    desc: 'Estructura de React, Client Side Rendering, componentes, JSX, Props y Children, estilos en React.',
    ref: 'Pensar en componentes cambió mi forma de estructurar interfaces.',
  },
  {
    n: 6,
    topic: 'Eventos y APIs',
    tags: ['Eventos', 'Fetch', 'Axios'],
    repos: ['DAW-SEMANA07', 'PORTAFOLIOFINAL'],
    desc: 'Eventos, renderizado condicional e iterativo, consumo de APIs con Fetch y Axios.',
    ref: 'Conectar mi app a datos reales fue el momento en que todo hizo clic.',
  },
]

export const reflexion = [
  [
    '¿Qué aprendí?',
    'Desarrollé aplicaciones frontend completas: desde la estructura con HTML y CSS hasta la lógica con JavaScript y React. Comprendí la importancia del diseño responsivo, el SEO y el consumo de APIs.',
  ],
  [
    '¿Cómo aprendí?',
    'Practicando de forma constante. Cada laboratorio me enfrentó a problemas reales: investigar, equivocarme, corregir y subir el resultado a GitHub. La retroalimentación del docente fue clave.',
  ],
  [
    'Reflexión metacognitiva',
    'Aún tengo mucho por aprender, sobre todo en manejo avanzado de estado en React y optimización de rendimiento, pero hoy me siento más seguro como desarrollador frontend y con ganas de profundizar.',
  ],
]

export const books = [
  'Media Active (2014). Aprende a Programar APPS con HTML5, CSS y JavaScript. Alfaomega.',
  'Zickert, F. (2020). React Architect: Full Stack React App Development and Serverless Deployment.',
  'Barklund, M. (2024). React in Depth. Manning Publications.',
  'Rappin, N. (2022). Modern CSS with Tailwind (2nd ed.). Pragmatic Bookshelf.',
  'Khan, Y. (2024). Advanced JavaScript Unleashed.',
]

export const links = [
  ['Bootstrap', 'https://getbootstrap.esdocu.com/docs/5.1/getting-started/introduction/'],
  ['Tailwind CSS', 'https://v2.tailwindcss.com/docs'],
  ['MDN · JavaScript', 'https://developer.mozilla.org/es/docs/Web/JavaScript'],
  ['React', 'https://es.react.dev/learn'],
  ['Vite', 'https://vite.dev/guide/'],
]