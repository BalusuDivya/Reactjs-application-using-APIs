import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <header className="navbar">
        <h1 className="logo">Book Haven</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/data">Book Data</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero-section">
        <h2>Welcome to Book Haven</h2>
        <p>Your gateway to a world of books and knowledge. Dive into our collection!</p>
        <button className="cta-button">Explore Now</button>
      </section>

      <footer className="footer">
        <p>@ 2024 Book Haven. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
