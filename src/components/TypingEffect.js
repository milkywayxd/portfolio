import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isBlinking, setIsBlinking] = useState(true); // For the cursor blinking effect

  useEffect(() => {
    let index = 0;
    
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 500); // Cursor blinks every 500ms

    // Cleanup on unmount
    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [text, speed]);

  return (
    <div style={{ fontFamily: 'monospace', fontSize: '24px' }}>
      {displayedText}
      <span style={{ visibility: isBlinking ? 'visible' : 'hidden' }}>|</span>
    </div>
  );
};

export default TypingEffect;