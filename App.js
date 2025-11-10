import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MovieRow from './components/MovieRow';
import Footer from './components/Footer';
import { getMoviesByGenre } from './utils/movieData';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <HeroSection />
      <main className="main-content">
        <MovieRow title="Action Movies" movies={getMoviesByGenre('action')} />
        <MovieRow title="Comedy" movies={getMoviesByGenre('comedy')} />
        <MovieRow title="Horror" movies={getMoviesByGenre('horror')} />
        <MovieRow title="Sci-Fi" movies={getMoviesByGenre('sci-fi')} />
        <MovieRow title="Kids & Family" movies={getMoviesByGenre('kids')} />
      </main>
      <Footer />
    </div>
  );
}

export default App;