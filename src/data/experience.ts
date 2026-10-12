import type { Lang } from '../i18n/ui';

type L<T> = Record<Lang, T>;

export interface Job {
  company: string;
  /** Cliente o aclaración que va junto a la empresa (opcional). */
  note?: L<string>;
  role: L<string>;
  /** Formato AAAA-MM. Dejá `end` vacío si es tu trabajo actual. */
  start: string;
  end?: string;
  highlights: L<string[]>;
  stack: string[];
}

export const experience: Job[] = [
  {
    company: 'AB InBev',
    role: { es: 'Data Scientist Sr', en: 'Senior Data Scientist' },
    start: '2025-05',
    highlights: {
      es: [
        'Desarrollé dos chatbots internos: uno acompaña el onboarding de nuevos empleados y otro ayuda a entender una nueva plataforma de desarrollo de la compañía.',
        'Lidero técnicamente al equipo en las iniciativas del canal offline, centradas en los vendedores y su comportamiento.',
        'Capacité e incorporé a varias personas nuevas del equipo de Data Science.',
        'Soy referente técnico del equipo de datos dentro de la compañía.',
      ],
      en: [
        'Built two internal chatbots: one guides new employees through onboarding, the other helps people understand a new in-house development platform.',
        'Lead the team technically on offline-channel initiatives focused on salespeople and their behavior.',
        'Trained and onboarded several new members of the Data Science team.',
        'Act as a technical reference for the data team across the company.',
      ],
    },
    stack: ['Python', 'PySpark', 'Databricks', 'SQL', 'Delta Lake', 'Airflow'],
  },
  {
    company: 'Datalytics',
    note: { es: 'para AB InBev', en: 'for AB InBev' },
    role: { es: 'Data Scientist', en: 'Data Scientist' },
    start: '2022-10',
    end: '2025-04',
    highlights: {
      es: [
        'Lideré y desarrollé un algoritmo que optimiza los tiempos de visita a clientes con cuatro módulos: relevancia del cliente, oportunidades frente a la competencia, nivel de servicio e independencia del cliente.',
        'Lideré, desarrollé y automaticé un algoritmo que prioriza y envía acciones comerciales a cada cliente según su propensión de compra, KPIs comerciales e histórico.',
        'Detecté fraude en una de las campañas promocionales más importantes de la compañía y generé ahorros significativos en Trade Spend (2022).',
        'Mejoré la asignación de activos comerciales entendiendo el beneficio de ubicarlos en distintos canales de venta (2023).',
        'Participé en un modelo de probabilidad de adhesión a campañas que ayudó a aumentar la participación de clientes (2022).',
      ],
      en: [
        'Led and built an algorithm that optimizes customer visit times through four modules: customer relevance, competitive opportunities, service level and customer independence.',
        'Led, built and automated an algorithm that prioritizes and sends commercial actions to each customer based on purchase propensity, commercial KPIs and history.',
        'Detected fraud in one of the company’s most important promotional campaigns, generating significant Trade Spend savings (2022).',
        'Improved the allocation of commercial assets by measuring the benefit of placing them in different sales channels (2023).',
        'Contributed to a campaign-adherence probability model that helped increase customer participation (2022).',
      ],
    },
    stack: ['Python', 'PySpark', 'Databricks', 'Machine Learning', 'SQL'],
  },
  {
    company: 'Datalytics',
    note: { es: 'para AB InBev', en: 'for AB InBev' },
    role: { es: 'Data Engineer', en: 'Data Engineer' },
    start: '2021-09',
    end: '2022-09',
    highlights: {
      es: [
        'Desarrollé, validé y documenté procesos ETL, modelos dimensionales para Power BI y tablas para los equipos de Data Science.',
        'Mejoré la relación con los Business Partners del equipo, que al principio desconfiaban del área de datos.',
        'Impulsé el trabajo con metodologías ágiles en los dos equipos en los que participé.',
      ],
      en: [
        'Built, validated and documented ETL processes, dimensional models for Power BI and tables for the Data Science teams.',
        'Rebuilt trust with the team’s Business Partners, who were initially skeptical of the data area.',
        'Drove agile ways of working in the two teams I was part of.',
      ],
    },
    stack: ['SQL', 'Spark', 'Azure Data Factory', 'Azure Data Lake', 'Power BI', 'Presto'],
  },
  {
    company: 'GlobalLogic',
    note: { es: 'ex Hexacta', en: 'formerly Hexacta' },
    role: { es: 'Software Developer (Trainee a Semi Senior)', en: 'Software Developer (Trainee to Mid-level)' },
    start: '2019-12',
    end: '2021-08',
    highlights: {
      es: [
        'Desarrollé APIs y componentes de frontend, con testing y documentación.',
        'Logré mejoras de performance considerables en la aplicación.',
        'Dicté una capacitación interna sobre RxJS y observables en Angular.',
        'Desarrollé ETLs con SSIS y migraciones de datos sobre tablas productivas.',
      ],
      en: [
        'Built APIs and frontend components, with tests and documentation.',
        'Delivered significant performance improvements to the application.',
        'Ran an internal training on RxJS and observables in Angular.',
        'Built SSIS ETLs and data migrations on production tables.',
      ],
    },
    stack: ['ASP.NET Core', 'Angular', 'TypeScript', 'Vue', 'SQL Server', 'SSIS'],
  },
];
