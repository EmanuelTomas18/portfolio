import type { Lang } from '../i18n/ui';

type L<T> = Record<Lang, T>;

export interface Study {
  title: L<string>;
  school: string;
  period: L<string>;
  detail?: L<string>;
}

export const education: Study[] = [
  {
    title: { es: 'Data Science', en: 'Data Science' },
    school: 'Digital House',
    period: { es: 'feb 2023 – nov 2023', en: 'Feb 2023 – Nov 2023' },
    detail: {
      es: 'Proyectos de punta a punta en Python: análisis exploratorio, modelos de machine learning y despliegue a producción.',
      en: 'End-to-end Python projects: exploratory analysis, machine learning models and production deployment.',
    },
  },
  {
    title: { es: 'Data Analytics', en: 'Data Analytics' },
    school: 'Coderhouse',
    period: { es: 'mar 2022 – may 2022', en: 'Mar 2022 – May 2022' },
    detail: {
      es: 'Bases de datos relacionales con SQL y tableros en Power BI con DAX, lenguaje M y Power Query.',
      en: 'Relational databases with SQL and Power BI dashboards with DAX, M and Power Query.',
    },
  },
  {
    title: { es: 'Ingeniería en Sistemas de Información', en: 'Information Systems Engineering' },
    school: 'Universidad Tecnológica Nacional',
    period: { es: '2016 – 2021, hasta 4.º año', en: '2016 – 2021, through 4th year' },
    detail: {
      es: 'Segundo puesto en Tecnomate 2016, la competencia de programación de la facultad. Pasante en el laboratorio de sistemas (2019–2020).',
      en: 'Second place at Tecnomate 2016, the faculty’s programming contest. Systems lab intern (2019–2020).',
    },
  },
  {
    title: { es: 'Formación continua', en: 'Continuous learning' },
    school: 'Platzi',
    period: { es: 'en curso', en: 'ongoing' },
    detail: {
      es: 'Escuela de Data Science: estadística descriptiva, funciones matemáticas para IA, Google Cloud Platform, además de inglés y habilidades blandas.',
      en: 'Data Science school: descriptive statistics, mathematical functions for AI, Google Cloud Platform, plus English and soft skills.',
    },
  },
];
