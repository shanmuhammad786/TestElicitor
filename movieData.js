const movieData = {
  action: [
    {
      id: 1,
      title: 'Ultimate Action',
      description: 'High-octane action thriller',
      image: 'https://appcodeanalyzerstorage.blob.core.windows.net/elicitorprojects/768bbe78-726e-4ce3-b16f-e5ff24c36db9/Projects/Project_78_Images/Action Movie Poster',
      genre: 'action'
    },
    {
      id: 2,
      title: 'Crime Thriller',
      description: 'Edge of your seat thriller',
      image: 'https://appcodeanalyzerstorage.blob.core.windows.net/elicitorprojects/768bbe78-726e-4ce3-b16f-e5ff24c36db9/Projects/Project_78_Images/Crime Thriller Cover',
      genre: 'action'
    },
    {
      id: 3,
      title: 'Historical Drama',
      description: 'Epic historical adventure',
      image: 'https://appcodeanalyzerstorage.blob.core.windows.net/elicitorprojects/768bbe78-726e-4ce3-b16f-e5ff24c36db9/Projects/Project_78_Images/Historical Drama Poster',
      genre: 'action'
    }
  ],
  comedy: [
    {
      id: 4,
      title: 'Romantic Comedy',
      description: 'Heartwarming romantic story',
      image: 'https://appcodeanalyzerstorage.blob.core.windows.net/elicitorprojects/768bbe78-726e-4ce3-b16f-e5ff24c36db9/Projects/Project_78_Images/Romantic Comedy Thumbnail',
      genre: 'comedy'
    },
    {
      id: 5,
      title: 'Comedy Special',
      description: 'Hilarious stand-up comedy',
      image: 'https://appcodeanalyzerstorage.blob.core.windows.net/elicitorprojects/768bbe78-726e-4ce3-b16f-e5ff24c36db9/Projects/Project_78_Images/Comedy Special Banner',
      genre: 'comedy'
    }
  ],
  horror: [
    {
      id: 6,
      title: 'Horror Film',
      description: 'Spine-chilling horror experience',
      image: 'https://appcodeanalyzerstorage.blob.core.windows.net/elicitorprojects/768bbe78-726e-4ce3-b16f-e5ff24c36db9/Projects/Project_78_Images/Horror Film Cover',
      genre: 'horror'
    }
  ],
  'sci-fi': [
    {
      id: 7,
      title: 'Sci-Fi Blockbuster',
      description: 'Mind-bending science fiction',
      image: 'https://appcodeanalyzerstorage.blob.core.windows.net/elicitorprojects/768bbe78-726e-4ce3-b16f-e5ff24c36db9/Projects/Project_78_Images/Sci-Fi Blockbuster Poster',
      genre: 'sci-fi'
    },
    {
      id: 8,
      title: 'Fantasy Adventure',
      description: 'Epic fantasy journey',
      image: 'https://appcodeanalyzerstorage.blob.core.windows.net/elicitorprojects/768bbe78-726e-4ce3-b16f-e5ff24c36db9/Projects/Project_78_Images/Fantasy Adventure Thumbnail',
      genre: 'sci-fi'
    }
  ],
  kids: [
    {
      id: 9,
      title: 'Kids Animation',
      description: 'Fun animated adventure for kids',
      image: 'https://appcodeanalyzerstorage.blob.core.windows.net/elicitorprojects/768bbe78-726e-4ce3-b16f-e5ff24c36db9/Projects/Project_78_Images/Kids Animation Thumbnail',
      genre: 'kids'
    }
  ],
  documentary: [
    {
      id: 10,
      title: 'Documentary Series',
      description: 'Informative documentary series',
      image: 'https://appcodeanalyzerstorage.blob.core.windows.net/elicitorprojects/768bbe78-726e-4ce3-b16f-e5ff24c36db9/Projects/Project_78_Images/Documentary Series Banner',
      genre: 'documentary'
    }
  ]
};

export const getMoviesByGenre = (genre) => {
  return movieData[genre] || [];
};

export const getAllMovies = () => {
  return Object.values(movieData).flat();
};

export const searchMovies = (query) => {
  const allMovies = getAllMovies();
  return allMovies.filter(movie => 
    movie.title.toLowerCase().includes(query.toLowerCase()) ||
    movie.description.toLowerCase().includes(query.toLowerCase())
  );
};