/**
 * Textos de la interfaz en los dos idiomas.
 * Para cambiar un texto, editá la clave en `es` y en `en`.
 */
export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    'meta.title': 'Sergio Emanuel Tomas | Data Scientist Sr',
    'meta.description':
      'Data Scientist Sr en AB InBev. Modelos predictivos, machine learning e IA aplicados a problemas reales de negocio.',

    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Skills',
    'nav.contact': 'Contacto',
    'nav.menu': 'Menú',
    'nav.switch': 'Ver en inglés',
    'nav.skip': 'Saltar al contenido',

    'hero.role': 'Data Scientist Sr en AB InBev',
    'hero.pitch':
      'Resuelvo problemas complejos con datos, machine learning e inteligencia artificial, y los llevo a producción.',
    'hero.cv': 'Descargar CV',
    'hero.contact': 'Escribime',
    'hero.relocate': 'Abierto a relocación',

    'nb.run': 'Ejecutar',
    'nb.running': 'Ejecutando…',
    'nb.hint': 'Ejecutá la celda para ver otro problema resuelto',

    'about.title': 'Sobre mí',
    'about.p1':
      'Soy Data Scientist Sr y lo que más disfruto es resolver problemas complicados: los que no tienen una respuesta obvia y obligan a entender bien el negocio antes de escribir la primera línea de código.',
    'about.p2':
      'Amo la tecnología. Todos los días investigo y pruebo cosas nuevas del mundo tech, y hoy me apasiona cómo está creciendo la inteligencia artificial. Quiero seguir aprendiendo y creciendo en ese camino.',
    'about.p3':
      'Antes de trabajar con datos fui desarrollador de software, así que me siento cómodo en todo el recorrido: desde el análisis y el modelo hasta el pipeline que lo pone en producción.',
    'about.facts.tech': 'En tecnología',
    'about.facts.data': 'En datos',
    'about.facts.years': 'años',
    'about.facts.base': 'Base',
    'about.facts.open': 'Disponible para',
    'about.facts.openValue': 'Relocación y desafíos internacionales',

    'exp.title': 'Experiencia',
    'exp.present': 'actualidad',

    'projects.title': 'Proyectos destacados',
    'projects.lead':
      'Son proyectos hechos en mi trabajo. Por confidencialidad cuento el problema y el resultado, no el código ni los datos.',

    'skills.title': 'Skills',

    'edu.title': 'Formación',

    'contact.title': 'Contacto',
    'contact.lead': '¿Tenés un problema difícil de datos o IA? Contame y lo vemos.',
    'contact.copy': 'Copiar email',
    'contact.copied': 'Email copiado',
    'contact.linkedin': 'LinkedIn',
    'contact.whatsapp': 'WhatsApp',
    'contact.cv': 'Descargar CV',

    'footer.built': 'Hecho con Astro y publicado en GitHub Pages.',
  },
  en: {
    'meta.title': 'Sergio Emanuel Tomas | Senior Data Scientist',
    'meta.description':
      'Senior Data Scientist at AB InBev. Predictive models, machine learning and AI applied to real business problems.',

    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.switch': 'Ver en español',
    'nav.skip': 'Skip to content',

    'hero.role': 'Senior Data Scientist at AB InBev',
    'hero.pitch': 'I solve hard problems with data, machine learning and AI, and take the solutions to production.',
    'hero.cv': 'Download CV',
    'hero.contact': 'Get in touch',
    'hero.relocate': 'Open to relocation',

    'nb.run': 'Run',
    'nb.running': 'Running…',
    'nb.hint': 'Run the cell to see another solved problem',

    'about.title': 'About me',
    'about.p1':
      'I’m a Senior Data Scientist, and what I enjoy most is solving hard problems: the ones without an obvious answer, where you have to understand the business before writing the first line of code.',
    'about.p2':
      'I love technology. Every day I research and try new things in tech, and right now I’m fascinated by how fast artificial intelligence is growing. I want to keep learning and growing along that path.',
    'about.p3':
      'Before working with data I was a software developer, so I’m comfortable across the whole journey: from analysis and modeling to the pipeline that runs it in production.',
    'about.facts.tech': 'In tech',
    'about.facts.data': 'In data',
    'about.facts.years': 'years',
    'about.facts.base': 'Based in',
    'about.facts.open': 'Open to',
    'about.facts.openValue': 'Relocation and international roles',

    'exp.title': 'Experience',
    'exp.present': 'present',

    'projects.title': 'Featured projects',
    'projects.lead':
      'These projects were built at work. For confidentiality I describe the problem and the outcome, not the code or the data.',

    'skills.title': 'Skills',

    'edu.title': 'Education',

    'contact.title': 'Contact',
    'contact.lead': 'Have a hard data or AI problem? Tell me about it.',
    'contact.copy': 'Copy email',
    'contact.copied': 'Email copied',
    'contact.linkedin': 'LinkedIn',
    'contact.whatsapp': 'WhatsApp',
    'contact.cv': 'Download CV',

    'footer.built': 'Built with Astro and published on GitHub Pages.',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];

export function useTranslations(lang: Lang) {
  return (key: UIKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

/** Ruta de la home en cada idioma. */
export const homePath: Record<Lang, string> = { es: '/', en: '/en/' };

/**
 * Resultados que muestra la celda del notebook del inicio.
 * Cada vez que alguien la ejecuta aparece el siguiente.
 */
export const notebookOutputs: Record<Lang, string[]> = {
  es: [
    'Fraude detectado en una campaña promocional clave',
    'Acciones comerciales priorizadas por propensión de compra',
    'Tiempos de visita optimizados con 4 módulos',
    'Chatbot de onboarding listo para nuevos empleados',
    'Activos comerciales asignados al canal correcto',
    'Adhesión a campañas en aumento',
  ],
  en: [
    'Fraud detected in a key promotional campaign',
    'Commercial actions prioritized by purchase propensity',
    'Visit times optimized across 4 modules',
    'Onboarding chatbot ready for new hires',
    'Commercial assets allocated to the right channel',
    'Campaign adherence on the rise',
  ],
};

export function formatMonth(ym: string, lang: Lang): string {
  const [y, m] = ym.split('-').map(Number);
  const d = new Date(Date.UTC(y, m - 1, 1));
  const month = d.toLocaleString(lang === 'es' ? 'es-AR' : 'en-US', { month: 'short', timeZone: 'UTC' });
  return `${month.replace('.', '')} ${y}`;
}
