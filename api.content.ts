export const movies: Movie[] = [
   {
    id: 'movie-1',
    title: 'Arcane',
    description: 'Con las dispares ciudades de Piltover y Zaun como telón de fondo, dos hermanas luchan en bandos opuestos de una guerra entre tecnologías mágicas y creencias enfrentadas.',
    year: 2023,
    duration: 145,
    rating: 'PG-13',
    genres: ['Sci-Fi', 'Drama', 'Adventure'],
    thumbnail: 'https://gkids.com/wp-content/themes/blankslate/assets/pages/ARCN1/images/products/ARCANE_AppleTV2000x3000.jpg',
    banner: 'https://i.redd.it/no-spoilers-made-for-cool-jinx-1920x1080-wallpaper-v0-0bhz19r95u2e1.png?width=1920&format=png&auto=webp&s=dee809d2de7c91e7138fe8ece30f79e050e5f8ac',
    type: 'movie',
    similar: ['movie-2', 'movie-3'],
    youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',  
    drive: '',   
    mega: 'https://mega.nz/embed/vd1xnRZD#SdBNvk7AHsGX3vmTrxzUsoyENv56fD9dpIpHYlFA98Q'          
  },
  // [...] Otros objetos movie-2 a movie-16 con datos similares a 'Digital Dreams' repetidos
];

export const series: Series[] = [
  {
    id: 'series-1',
    title: 'Shadow Protocol',
    description: 'A gripping espionage thriller following elite agents as they navigate international conspiracies.',
    year: 2023,
    rating: 'TV-MA',
    genres: ['Thriller', 'Drama', 'Espionage'],
    thumbnail: 'https://images.pexels.com/photos/1134204/pexels-photo-1134204.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    banner: 'https://images.pexels.com/photos/1134204/pexels-photo-1134204.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    type: 'series',
    seasons: [
      {
        id: 'season-1-1',
        seasonNumber: 1,
        title: 'Season 1',
        episodes: [
          {
            id: 'episode-1-1',
            title: 'The Awakening',
            description: 'Agent Sarah Chen discovers a conspiracy that threatens global security.',
            duration: 45,
            thumbnail: 'https://images.pexels.com/photos/1134204/pexels-photo-1134204.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
            episodeNumber: 1
          },
          {
            id: 'episode-1-2',
            title: 'Deep Cover',
            description: 'Sarah goes undercover to infiltrate a criminal organization.',
            duration: 47,
            thumbnail: 'https://images.pexels.com/photos/1134204/pexels-photo-1134204.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
            episodeNumber: 2
          },
          {
            id: 'episode-1-3',
            title: 'Betrayal',
            description: 'A trusted ally reveals their true intentions.',
            duration: 43,
            thumbnail: 'https://images.pexels.com/photos/1134204/pexels-photo-1134204.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
            episodeNumber: 3
          }
        ]
      },
      {
        id: 'season-1-2',
        seasonNumber: 2,
        title: 'Season 2',
        episodes: [
          {
            id: 'episode-2-1',
            title: 'New Beginnings',
            description: 'Sarah faces the consequences of her previous actions.',
            duration: 44,
            thumbnail: 'https://images.pexels.com/photos/1134204/pexels-photo-1134204.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
            episodeNumber: 1
          },
          {
            id: 'episode-2-2',
            title: 'The Hunt',
            description: 'A new threat emerges from the shadows.',
            duration: 46,
            thumbnail: 'https://images.pexels.com/photos/1134204/pexels-photo-1134204.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
            episodeNumber: 2
          }
        ]
      }
    ],
    similar: ['series-2', 'series-3']
  },
  // [...] series-2 y series-3
];