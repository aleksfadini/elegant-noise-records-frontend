import React, { useState, useEffect } from 'react';

const CharacterBackground: React.FC = () => {
  const generateRandomString = () => {
    const possibleChars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let text = '';
    const charactersPerLine = Math.floor(window.innerWidth / 5); // Assuming average char width of 10px
    const totalLines = Math.floor(window.innerHeight / 5); // Assuming line height of 20px
    const totalChars = charactersPerLine * totalLines;

    for (let i = 0; i < totalChars; i++) {
      text += possibleChars.charAt(
        Math.floor(Math.random() * possibleChars.length),
      );
      if ((i + 1) % charactersPerLine === 0) {
        // Insert a new line at every 'charactersPerLine' characters
        text += '\n';
      }
    }
    return text;
  };

  const [randomString, setRandomString] = useState<string>('');
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Update the position of the radial gradient
      setGradientPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      // Update the random string every 0.4 seconds
      setRandomString(generateRandomString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div
      className="character-background"
      style={{
        maskImage: `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y}px, black 10px, transparent 300px)`,
        WebkitMaskImage: `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y}px, black 10px, transparent 300px)`,
      }}
    >
      {randomString}
    </div>
  );
};

export default CharacterBackground;
