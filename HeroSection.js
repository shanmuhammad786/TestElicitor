import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>The Ultimate Action Experience</h1>
        <p>Join the adventure in this blockbuster action movie that will keep you on the edge of your seat.</p>
        <div className="hero-buttons">
          <button className="btn-primary">▶ Play</button>
          <button className="btn-secondary">+ My List</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://appcodeanalyzerstorage.blob.core.windows.net/elicitorprojects/768bbe78-726e-4ce3-b16f-e5ff24c36db9/Projects/Project_78_Images/Action Movie Poster" alt="Featured Movie" />
      </div>
    </section>
  );
};

export default HeroSection;