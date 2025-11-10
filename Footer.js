import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>MovieFlix</h3>
          <p>Your ultimate destination for movies and TV shows.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Genres</h4>
          <ul>
            <li><a href="#action">Action</a></li>
            <li><a href="#comedy">Comedy</a></li>
            <li><a href="#drama">Drama</a></li>
            <li><a href="#horror">Horror</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect</h4>
          <ul>
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#instagram">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 MovieFlix. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;