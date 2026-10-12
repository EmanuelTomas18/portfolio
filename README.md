# emanueltomas.com

Portfolio personal de **Sergio Emanuel Tomas**, Data Scientist Sr. Bilingüe (español / inglés), hecho con [Astro](https://astro.build) y TypeScript, y publicado en GitHub Pages con dominio propio.

## Correrlo en tu PC

Necesitás [Node.js](https://nodejs.org) 22.12 o superior.

```bash
npm install
npm run dev      # http://localhost:4321 con recarga automática
npm run build    # genera el sitio en dist/
npm run preview  # sirve dist/ para revisarlo antes de publicar
```

## Dónde se edita cada cosa

| Qué querés cambiar | Archivo |
| --- | --- |
| Email, teléfono, LinkedIn, CV, ubicación | `src/data/site.ts` |
| Textos de la interfaz, "Sobre mí", títulos | `src/i18n/ui.ts` |
| Resultados de la celda del notebook del inicio | `notebookOutputs` en `src/i18n/ui.ts` |
| Experiencia laboral | `src/data/experience.ts` |
| Skills | `src/data/skills.ts` |
| Formación | `src/data/education.ts` |
| Proyectos | `src/content/projects/es/*.md` y `src/content/projects/en/*.md` |
| Colores y tipografía | `src/styles/global.css` (variables al inicio) |
| CV descargable | `public/cv/` |

### Agregar un proyecto

Creá el mismo archivo en las dos carpetas, por ejemplo `src/content/projects/es/mi-proyecto.md` y `src/content/projects/en/mi-proyecto.md`:

```md
---
title: Nombre del proyecto
company: Empresa o "Personal"
year: '2026'
role: Desarrollé
tags: [Python, LLMs]
order: 7
link: https://github.com/EmanuelTomas18/mi-proyecto   # opcional
---
Una o dos frases: qué problema resolvía y qué resultado tuvo.
```

### Poner tu foto

Guardala como `src/assets/foto.jpg` (también sirve `.png` o `.webp`). Si no hay foto, se muestran las iniciales. Astro la optimiza sola.

## Publicación

Cada push a `main` dispara `.github/workflows/deploy.yml`, que compila el sitio y lo publica en GitHub Pages. El archivo `public/CNAME` le dice a GitHub que el dominio es `emanueltomas.com`.

## Estructura

```
src/
  components/   secciones de la página (Hero, Notebook, Experience…)
  content/      proyectos en Markdown
  data/         datos personales, experiencia, skills, formación
  i18n/         textos en español e inglés
  layouts/      <head>, SEO y metadatos
  pages/        / (español), /en/ (inglés) y 404
  styles/       estilos globales y paleta
public/         favicon, imagen para redes, CV y CNAME
```
