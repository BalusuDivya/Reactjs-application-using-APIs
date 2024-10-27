import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DataPage.css'; // Import a CSS file for custom styling

function DataPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://potterapi.onrender.com/en/books') // Use a relevant API endpoint for books
      .then(response => {
        console.log(response.data); // Log the entire response data for debugging
        setData(response.data); // Adjust this based on the API response structure
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="data-container">
      <h2>Book Collection</h2>
      <ul>
        {data.map((book, index) => (
          <li key={index} className="book-item">
            {/* Display the book cover image */}
            {book.cover && <img src={book.cover} alt={book.title} className="book-image" />}
            <h3>{book.title}</h3>
            <p><strong>Original Title:</strong> {book.originalTitle}</p>
            <p><strong>Release Date:</strong> {book.releaseDate}</p>
            <p><strong>Pages:</strong> {book.pages}</p>
            <p>{book.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataPage;
