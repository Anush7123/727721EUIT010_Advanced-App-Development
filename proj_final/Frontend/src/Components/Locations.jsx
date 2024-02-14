// Gallery.js
import  { useState } from 'react';
import './Locations.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';
import img11 from '../assets/img11.jpg';
import img12 from '../assets/img12.jpg';

const Gallery = () => {
  const defaultImages = [
    img3,
    img1,
    img10,img5,img2,img6,img7,img8,img9,
    img4,img11,img12,

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
