/**
 * Datos personales y de contacto.
 * Editá este archivo para cambiar email, teléfono, links o el CV.
 */
export const site = {
  name: 'Sergio Emanuel Tomas',
  shortName: 'Ema Tomas',
  initials: 'ET',
  url: 'https://emanueltomas.com',
  location: { es: 'Paraná, Entre Ríos, Argentina', en: 'Paraná, Entre Ríos, Argentina' },

  email: 'tomassergioemanuel@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sergioemanueltomasdatascientist',

  /** Poné `showPhone: false` para ocultar el teléfono del sitio. */
  showPhone: true,
  phoneDisplay: '+54 9 343 621-9067',
  whatsapp: 'https://wa.me/5493436219067',

  /** CV descargable. Si sumás uno en español, cambiá la ruta de `es`. */
  cv: {
    es: '/cv/Sergio-Emanuel-Tomas-CV.pdf',
    en: '/cv/Sergio-Emanuel-Tomas-CV.pdf',
  },

  /** Fechas de inicio para calcular los años de experiencia automáticamente. */
  techSince: new Date('2019-12-01'),
  dataSince: new Date('2021-09-01'),
};

export function yearsSince(date: Date, now = new Date()): number {
  return Math.floor((now.getTime() - date.getTime()) / (365.25 * 24 * 3600 * 1000));
}
