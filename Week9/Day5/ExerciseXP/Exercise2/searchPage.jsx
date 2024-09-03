import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = 'YOUR_PEXELS_API_KEY';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const fetchImages = async () => {
    try {
      const response = await axios.get(`https://api.pexels.com/v1/search`, {
        headers: {
          Authorization: API_KEY,
        },
        params: {
          query,
          per_page: 30,
          page,
        },
      });
      setImages(response.data.photos);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleSearch = () => {
    fetchImages();
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    fetchImages();
  };

  return (
    <div className="search">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for images..."
      />
      <button onClick={handleSearch}>Search</button>
      <div className="image-gallery">
        {images.map((image) => (
          <div key={image.id} className="image-container">
            <img src={image.src.medium} alt={image.alt} />
          </div>
        ))}
      </div>
      <button onClick={() => handlePageChange(page - 1)}>Previous</button>
      <button onClick={() => handlePageChange(page + 1)}>Next</button>
    </div>
  );
}

export default SearchPage;
