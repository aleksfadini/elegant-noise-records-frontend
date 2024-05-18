// components/CharacterBackground.tsx
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

  //   const generateRandomString = (length: number) => {
  //     const possibleChars =
  //       'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //     let text = '';
  //     for (let i = 0; i < length; i++) {
  //       text += possibleChars.charAt(
  //         Math.floor(Math.random() * possibleChars.length),
  //       );
  //     }
  //     return text;
  //   };

  const [randomString, setRandomString] = useState<string>('');

  useEffect(() => {
    const handleMouseMove = () => {
      // Update the random string on mouse move
      setRandomString(generateRandomString()); // Adjust length as needed for your screen size
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className="character-background">{randomString}</div>;
};

export default CharacterBackground;
