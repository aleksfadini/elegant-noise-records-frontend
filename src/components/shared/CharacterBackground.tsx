import React, { useState, useEffect, useRef } from 'react';

const CharacterBackground: React.FC = () => {
  const generateRandomString = () => {
    const possibleChars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let text = '';
    const charactersPerLine = Math.floor(window.innerWidth / 10); // Assuming average char width of 10px
    const totalLines = Math.floor(window.innerHeight / 20); // Assuming line height of 20px
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
      // Add the blur class before changing the random string
      setIsBlur(true);

      // Update the random string
      setRandomString(generateRandomString());

      // Remove the blur class after a short delay
      blurTimeoutRef.current = setTimeout(() => {
        setIsBlur(false);
      }, 400); // Adjust this delay to match the duration of your CSS animation
    }, 800);

    return () => {
      clearInterval(timer);
      if (blurTimeoutRef.current) clearTimeout(blurTimeoutRef.current);
    };
  }, []);

  return (
    <div
      className={`character-background ${isBlur ? 'blur' : ''}`}
      style={{
        maskImage: `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y}px, black 10px, transparent 300px)`,
        WebkitMaskImage: `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y}px, black 10px, transparent 300px)`,
      }}
    >
      <div className="text">{randomString}</div>
    </div>
  );
};

export default CharacterBackground;
