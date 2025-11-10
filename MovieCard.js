import React, { useState } from 'react';

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="movie-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie.image} alt={movie.title} />
      {isHovered && (
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
          <div className="movie-actions">
            <button className="play-btn">▶</button>
            <button className="add-btn">+</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;