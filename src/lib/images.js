import heroDogReal from '@/assets/photos/hero-dog.jpg'
import historiaMural from '@/assets/photos/historia-mural.jpg'
import historiaCat from '@/assets/photos/historia-cat.jpg'
import historiaSantyDog from '@/assets/photos/historia-santy-dog.jpg'
import historiaTeamLake from '@/assets/photos/historia-team-lake.jpg'
import historiaDogGrass from '@/assets/photos/historia-dog-grass.jpg'
import historiaKitten from '@/assets/photos/historia-kitten.jpg'
import tallerCards from '@/assets/photos/taller-cards.jpg'
import tallerDrawing from '@/assets/photos/taller-drawing.jpg'
import tallerComunidad from '@/assets/photos/taller-comunidad.jpg'
import tallerArte from '@/assets/photos/taller-arte.jpg'
import teamSanty from '@/assets/photos/team-santy.jpg'

// Fotos reales de Maestro Animal, mas algunas de stock (Unsplash) donde aun no hay foto propia.
export const IMAGES = {
  heroDog: heroDogReal,
  dogToy: tallerCards,
  catDog: historiaMural,
  twoDogs: historiaTeamLake,
  puppyFlowers: historiaDogGrass,
  catPortrait: historiaCat,
  dogSmile: historiaSantyDog,
  guineaPigs: tallerComunidad,
  vaccination: tallerDrawing,
  vetCheck: tallerArte,
  catRescue: historiaKitten,
  volunteerGroup: tallerComunidad,
}

export const TEAM = [
  {
    name: 'Mayra',
    role: 'Fundadora y directora de Maestro Animal',
    bio: 'Magíster en Historia del Arte, convencida de que los grandes cambios nacen de la voluntad, la sensibilidad y la educación. Lidera Maestro Animal con una mirada creativa y humana.',
    photo: null,
  },
  {
    name: 'Santy',
    role: 'Facilitador y co-creador de experiencias educativas',
    bio: 'Acompaña la construcción pedagógica de Maestro Animal desde el diseño de talleres, metodologías y experiencias de aprendizaje que enseñan sintiendo.',
    photo: teamSanty,
  },
]
