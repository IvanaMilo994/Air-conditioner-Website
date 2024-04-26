import React from 'react';
import backgroundImage from '../Images/lg.png'; // Importovanje slike

function BackgroundImage() {
  return (
    <div
      style={{
        background: 'pink', // Set the background image
        backgroundSize: 'cover', // Ensure the background covers the entire container
        height: '100vh',
        position: 'fixed', // Set position to fixed to cover entire screen
        width: '100%',
        zIndex: -1, // Set a lower z-index to be behind other content
      }}
    >
      {/* Sadržaj komponente */}
    </div>
  );
}

export default BackgroundImage;