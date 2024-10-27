import React from 'react';
import './AboutPage.css'; // Importing the CSS file

const AboutPage = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Our Book Application</h1>
            <p className="about-description">
                Welcome to our Book Application! This app is designed to help you find and manage your favorite books easily, all in one place.
            </p>
            <h2 className="about-subtitle">Features:</h2>
            <ul className="features-list">
                <li>📚 Search for books by title, author, or genre</li>
                <li>🔍 View detailed information about each book</li>
                <li>📖 Keep track of your reading list</li>
                <li>⭐ Rate and review books you've read</li>
            </ul>
            <h2 className="about-subtitle">Get Started!</h2>
            <p className="about-description">
                Explore our extensive collection of books and enhance your reading experience. Happy reading!
            </p>
        </div>
    );
};

export default AboutPage;
