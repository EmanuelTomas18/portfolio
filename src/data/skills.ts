import type { Lang } from '../i18n/ui';

export interface SkillGroup {
  title: Record<Lang, string>;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    title: { es: 'Lenguajes', en: 'Languages' },
    items: ['Python', 'SQL', 'PySpark', 'TypeScript', 'JavaScript', 'C# / .NET', 'Shell'],
  },
  {
    title: { es: 'Datos y cloud', en: 'Data & cloud' },
    items: [
      'Databricks',
      'Apache Spark',
      'Delta Lake',
      'Apache Airflow',
      'Azure Data Factory',
      'Azure Data Lake',
      'Azure Functions',
      'Azure Synapse',
      'Trino / Presto',
    ],
  },
  {
    title: { es: 'Machine learning y análisis', en: 'Machine learning & analytics' },
    items: ['Machine Learning', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI', 'Metabase', 'Excel'],
  },
  {
    title: { es: 'Forma de trabajo', en: 'Ways of working' },
    items: ['Scrum', 'Kanban', 'Azure DevOps', 'Git', 'Liderazgo técnico'],
  },
];

/** Traducciones de items puntuales que cambian según el idioma. */
export const skillLabel: Record<string, Record<Lang, string>> = {
  'Liderazgo técnico': { es: 'Liderazgo técnico', en: 'Technical leadership' },
};
