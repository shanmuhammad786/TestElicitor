import React from 'react';

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>MovieFlix</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#movies">Movies</a></li>
            <li><a href="#series">TV Series</a></li>
            <li><a href="#mylist">My List</a></li>
          </ul>
        </nav>
        <div className="header-right">
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Search movies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="user-menu">
            <span>Profile</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;