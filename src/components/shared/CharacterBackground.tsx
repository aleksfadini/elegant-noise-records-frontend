import React, { useState, useEffect, useRef } from 'react';

const CharacterBackground: React.FC = () => {
  const generateRandomString = () => {
    const possibleChars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let text = '';
    const charactersPerLine = Math.floor(window.innerWidth / 4); // Assuming average char width of 10px
    const totalLines = Math.floor(window.innerHeight / 3); // Assuming line height of 20px
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
  const [isBlur, setIsBlur] = useState(false);
  const blurTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [gradientSize, setGradientSize] = useState(300);

  useEffect(() => {
    const timer = setInterval(() => {
      // Update the random string
      setRandomString(generateRandomString());
    }, 1400);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Update the position of the radial gradient
      setGradientPosition({ x: event.clientX, y: event.clientY });

      // Add the blur class when the mouse is moving
      setIsBlur(true);
      // Reduce the size of the gradient when the mouse is moving
      setGradientSize(150);
      // Remove the blur class after a short delay
      if (blurTimeoutRef.current) clearTimeout(blurTimeoutRef.current);
      blurTimeoutRef.current = setTimeout(() => {
        setIsBlur(false);
        setGradientSize(200);
      }, 200); // Adjust this delay to match the duration of your CSS animation
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (blurTimeoutRef.current) {
        clearTimeout(blurTimeoutRef.current);
        blurTimeoutRef.current = null;
      }
    };
  }, []);

  return (
    <div className={`character-background ${isBlur ? 'blur' : ''}`}>
      <div
        className="gradient"
        style={{
          maskImage: `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y}px, black 10px, transparent 200px)`,
          WebkitMaskImage: `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y}px, black 10px, transparent 200px)`,
          opacity: isBlur ? 0 : 1,
          transition: 'opacity 0.4s',
        }}
      >
        <div className="text">{randomString}</div>
      </div>
      <div
        className="gradient"
        style={{
          maskImage: `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y}px, black 10px, transparent 150px)`,
          WebkitMaskImage: `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y}px, black 10px, transparent 150px)`,
          opacity: isBlur ? 1 : 0,
          transition: 'opacity 0.4s',
        }}
      >
        <div className="text">{randomString}</div>
      </div>
    </div>
  );
};

export default CharacterBackground;
