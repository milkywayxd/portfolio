import React from "react";
const PhotoWithSVGShapes = () => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <img
        src="/images/headshot.png"
        alt="Your photo"
        style={{ display: 'block', width: '100%', height: 'auto', borderRadius: '8px' }}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        style={{ position: 'absolute', bottom: '0px', left: '0px' }}
      >
        <rect x="0" y="0" width="80" height="50" fill="rgba(255, 0, 0, 0.5)" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        style={{ position: 'absolute', top: '200px', left: '100px' }}
      >
        <circle cx="50" cy="50" r="40" fill="rgba(0, 0, 255, 0.5)" />
      </svg>
    </div>
  );
};

export default PhotoWithSVGShapes;