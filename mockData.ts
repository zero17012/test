import { Movie, Series, User, Category } from '../types';

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
  {
    id: 'movie-2',
    title: 'Midnight Runner',
    description: 'An adrenaline-fueled thriller about a courier who must deliver a mysterious package before dawn.',
    year: 2023,
    duration: 118,
    rating: 'R',
    genres: ['Action', 'Thriller', 'Crime'],
    thumbnail: 'https://images.pexels.com/photos/315788/pexels-photo-315788.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    banner: 'https://images.pexels.com/photos/315788/pexels-photo-315788.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    type: 'movie',
    similar: ['movie-1', 'movie-4']
  },
  {
    id: 'movie-3',
    title: 'Hearts in Harmony',
    description: 'A heartwarming story about two musicians who find love through their shared passion for music.',
    year: 2023,
    duration: 102,
    rating: 'PG',
    genres: ['Romance', 'Drama', 'Music'],
    thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    banner: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    type: 'movie',
    similar: ['movie-4', 'movie-5']
  },
  {
    id: 'movie-4',
    title: 'The Last Kingdom',
    description: 'An epic fantasy adventure about a young warrior who must unite the kingdoms against an ancient evil.',
    year: 2023,
    duration: 156,
    rating: 'PG-13',
    genres: ['Fantasy', 'Adventure', 'Action'],
    thumbnail: 'https://images.pexels.com/photos/1666816/pexels-photo-1666816.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    banner: 'https://images.pexels.com/photos/1666816/pexels-photo-1666816.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    type: 'movie',
    similar: ['movie-1', 'movie-3']
  },
  {
    id: 'movie-5',
    title: 'Digital Dreams',
    description: 'A cyberpunk thriller exploring the boundaries between reality and virtual worlds.',
    year: 2023,
    duration: 128,
    rating: 'R',
    genres: ['Sci-Fi', 'Thriller', 'Cyberpunk'],
    thumbnail: 'https://images.pexels.com/photos/2312040/pexels-photo-2312040.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    banner: 'https://images.pexels.com/photos/2312040/pexels-photo-2312040.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    type: 'movie',
    similar: ['movie-2', 'movie-4']
  },
  {
    id: 'movie-6',
    title: 'Digital Dreams',
    description: 'A cyberpunk thriller exploring the boundaries between reality and virtual worlds.',
    year: 2023,
    duration: 128,
    rating: 'R',
    genres: ['Sci-Fi', 'Thriller', 'Cyberpunk'],
    thumbnail: 'https://images.pexels.com/photos/2312040/pexels-photo-2312040.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    banner: 'https://images.pexels.com/photos/2312040/pexels-photo-2312040.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    type: 'movie',
    similar: ['movie-2', 'movie-4']
  },
  {
    id: 'movie-7',
    title: 'Digital Dreams',
    description: 'A cyberpunk thriller exploring the boundaries between reality and virtual worlds.',
    year: 2023,
    duration: 128,
    rating: 'R',
    genres: ['Sci-Fi', 'Thriller', 'Cyberpunk'],
    thumbnail: 'https://images.pexels.com/photos/2312040/pexels-photo-2312040.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    banner: 'https://images.pexels.com/photos/2312040/pexels-photo-2312040.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    type: 'movie',
    similar: ['movie-2', 'movie-4']
  },
  {
    id: 'movie-8',
    title: 'Digital Dreams',
    description: 'A cyberpunk thriller exploring the boundaries between reality and virtual worlds.',
    year: 2023,
    duration: 128,
    rating: 'R',
    genres: ['Sci-Fi', 'Thriller', 'Cyberpunk'],
    thumbnail: 'https://images.pexels.com/photos/2312040/pexels-photo-2312040.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    banner: 'https://images.pexels.com/photos/2312040/pexels-photo-2312040.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    type: 'movie',
    similar: ['movie-2', 'movie-4']
  },

  {
    id: 'movie-9',
    title: 'Digital Dreams',
    description: 'A cyberpunk thriller exploring the boundaries between reality and virtual worlds.',
    year: 2023,
    duration: 128,
    rating: 'R',
    genres: ['Sci-Fi', 'Thriller', 'Cyberpunk'],
    thumbnail: 'https://images.pexels.com/photos/2312040/pexels-photo-2312040.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    banner: 'https://images.pexels.com/photos/2312040/pexels-photo-2312040.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    type: 'movie',
    similar: ['movie-2', 'movie-4']
  },
  {
    id: 'movie-10',
    title: 'Digital Dreams',
    description: 'A cyberpunk thriller exploring the boundaries between reality and virtual worlds.',
    year: 2023,
    duration: 128,
    rating: 'R',
    genres: ['Sci-Fi', 'Thriller', 'Cyberpunk'],
    thumbnail: 'https://images.pexels.com/photos/2312040/pexels-photo-2312040.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    banner: 'https://images.pexels.com/photos/2312040/pexels-photo-2312040.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    type: 'movie',
    similar: ['movie-2', 'movie-4']
  },

  {
    id: 'movie-11',
    title: 'Digital Dreams',
    description: 'A cyberpunk thriller exploring the boundaries between reality and virtual worlds.',
    year: 2023,
    duration: 128,
    rating: 'R',
    genres: ['Sci-Fi', 'Thriller', 'Cyberpunk'],
    thumbnail: 'https://images.pexels.com/photos/2312040/pexels-photo-2312040.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    banner: 'https://images.pexels.com/photos/2312040/pexels-photo-2312040.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    type: 'movie',
    similar: ['movie-2', 'movie-4']
  },
  {
    id: 'movie-12',
    title: 'Digital Dreams',
    description: 'A cyberpunk thriller exploring the boundaries between reality and virtual worlds.',
    year: 2023,
    duration: 128,
    rating: 'R',
    genres: ['Sci-Fi', 'Thriller', 'Cyberpunk'],
    thumbnail: 'https://images.pexels.com/photos/2312040/pexels-photo-2312040.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    banner: 'https://images.pexels.com/photos/2312040/pexels-photo-2312040.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    type: 'movie',
    similar: ['movie-2', 'movie-4']
  },
  {
    id: 'movie-13',
    title: 'Digital Dreams',
    description: 'A cyberpunk thriller exploring the boundaries between reality and virtual worlds.',
    year: 2023,
    duration: 128,
    rating: 'R',
    genres: ['Sci-Fi', 'Thriller', 'Cyberpunk'],
    thumbnail: 'https://images.pexels.com/photos/2312040/pexels-photo-2312040.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    banner: 'https://images.pexels.com/photos/2312040/pexels-photo-2312040.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    type: 'movie',
    similar: ['movie-2', 'movie-4']
  },
  {
    id: 'movie-14',
    title: 'Digital Dreams',
    description: 'A cyberpunk thriller exploring the boundaries between reality and virtual worlds.',
    year: 2023,
    duration: 128,
    rating: 'R',
    genres: ['Sci-Fi', 'Thriller', 'Cyberpunk'],
    thumbnail: 'https://images.pexels.com/photos/2312040/pexels-photo-2312040.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    banner: 'https://images.pexels.com/photos/2312040/pexels-photo-2312040.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    type: 'movie',
    similar: ['movie-2', 'movie-4']
  },
  {
    id: 'movie-15',
    title: 'Digital Dreams',
    description: 'A cyberpunk thriller exploring the boundaries between reality and virtual worlds.',
    year: 2023,
    duration: 128,
    rating: 'R',
    genres: ['Sci-Fi', 'Thriller', 'Cyberpunk'],
    thumbnail: 'https://images.pexels.com/photos/2312040/pexels-photo-2312040.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    banner: 'https://images.pexels.com/photos/2312040/pexels-photo-2312040.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    type: 'movie',
    similar: ['movie-2', 'movie-4']
  },
  {
    id: 'movie-16',
    title: 'Digital Dreams',
    description: 'A cyberpunk thriller exploring the boundaries between reality and virtual worlds.',
    year: 2023,
    duration: 128,
    rating: 'R',
    genres: ['Sci-Fi', 'Thriller', 'Cyberpunk'],
    thumbnail: 'https://images.pexels.com/photos/2312040/pexels-photo-2312040.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    banner: 'https://images.pexels.com/photos/2312040/pexels-photo-2312040.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    type: 'movie',
    similar: ['movie-2', 'movie-4']
  }
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
  {
    id: 'series-2',
    title: 'Quantum Leap',
    description: 'Scientists discover the ability to travel between parallel dimensions, uncovering dark secrets.',
    year: 2023,
    rating: 'TV-14',
    genres: ['Sci-Fi', 'Mystery', 'Drama'],
    thumbnail: 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    banner: 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    type: 'series',
    seasons: [
      {
        id: 'season-2-1',
        seasonNumber: 1,
        title: 'Season 1',
        episodes: [
          {
            id: 'episode-2-1-1',
            title: 'First Jump',
            description: 'Dr. Emma Rodriguez makes the first successful dimension jump.',
            duration: 42,
            thumbnail: 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
            episodeNumber: 1
          },
          {
            id: 'episode-2-1-2',
            title: 'Parallel Lives',
            description: 'Emma encounters alternate versions of herself.',
            duration: 41,
            thumbnail: 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
            episodeNumber: 2
          }
        ]
      }
    ],
    similar: ['series-1', 'series-3']
  },
  {
    id: 'series-3',
    title: 'City of Shadows',
    description: 'A noir detective series set in a crime-ridden metropolis where nothing is as it seems.',
    year: 2023,
    rating: 'TV-MA',
    genres: ['Crime', 'Drama', 'Noir'],
    thumbnail: 'https://images.pexels.com/photos/2061168/pexels-photo-2061168.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    banner: 'https://images.pexels.com/photos/2061168/pexels-photo-2061168.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    type: 'series',
    seasons: [
      {
        id: 'season-3-1',
        seasonNumber: 1,
        title: 'Season 1',
        episodes: [
          {
            id: 'episode-3-1-1',
            title: 'Dark Streets',
            description: 'Detective Marcus Cole investigates a series of mysterious murders.',
            duration: 48,
            thumbnail: 'https://images.pexels.com/photos/2061168/pexels-photo-2061168.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
            episodeNumber: 1
          }
        ]
      }
    ],
    similar: ['series-1', 'series-2']
  }
];

export const allContent = [...movies, ...series];

export const categories: Category[] = [
  {
    id: 'trending',
    name: 'Trending Now',
    items: ['movie-1', 'series-1', 'movie-2', 'series-2', 'movie-3']
  },
  {
    id: 'continue-watching',
    name: 'Continue Watching',
    items: ['series-1', 'movie-4', 'series-3']
  },
  {
    id: 'recommended',
    name: 'Recommended for You',
    items: ['movie-3', 'series-2', 'movie-5', 'movie-1']
  },
  {
    id: 'new-releases',
    name: 'New Releases',
    items: ['movie-1', 'movie-2', 'series-1', 'movie-3', 'series-2']
  },
  {
    id: 'action',
    name: 'Action & Adventure',
    items: ['movie-2', 'movie-4', 'series-1', 'movie-1']
  },
  {
    id: 'sci-fi',
    name: 'Sci-Fi & Fantasy',
    items: ['movie-1', 'series-2', 'movie-5', 'movie-4']
  }
];

export const currentUser: User = {
  id: 'user-1',
  name: 'Jonathan Chavarría',
  email: 'jonathanchava1703@gmail.com',
  avatar: 'https://i.pinimg.com/736x/85/b7/e9/85b7e95ac49a2626e4fa63db315c0004.jpg',
  favorites: ['movie-1', 'series-1', 'movie-3'],
  watchHistory: [
    {
      contentId: 'series-1',
      title: 'Shadow Protocol',
      thumbnail: 'https://images.pexels.com/photos/1134204/pexels-photo-1134204.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      watchedAt: new Date('2024-01-15'),
      progress: 0.65,
      type: 'series',
      seasonNumber: 1,
      episodeNumber: 2
    },
    {
      contentId: 'movie-4',
      title: 'The Last Kingdom',
      thumbnail: 'https://images.pexels.com/photos/1666816/pexels-photo-1666816.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      watchedAt: new Date('2024-01-14'),
      progress: 0.42,
      type: 'movie'
    }
  ]
};