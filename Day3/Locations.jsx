// Gallery.js
import  { useState } from 'react';
import './Locations.css';

const Gallery = () => {
  const defaultImages = [
    'https://source.unsplash.com/400x300/?nature',
    'https://source.unsplash.com/400x300/?travel',
    'https://source.unsplash.com/400x300/?architecture',
    'https://source.unsplash.com/400x300/?food',
    'https://source.unsplash.com/400x300/?technology',
    'https://source.unsplash.com/400x300/?fashion',
    // Add more default image URLs as needed
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      {defaultImages.map((imageUrl, index) => (
        <div key={index} className="gallery-item" onClick={() => openLightbox(index)}>
          <img src={imageUrl} alt={`Image ${index + 1}`} className="gallery-image" />
        </div>
      ))}

      {selectedImage !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <img
            src={defaultImages[selectedImage]}
            alt={`Image ${selectedImage + 1}`}
            className="lightbox-image"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
