"use client";
import React, { useState, useEffect } from 'react';

export default function CharacterDialog({ message = "" }) {
  const [displayedMessage, setDisplayedMessage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Reset and start typing animation when message changes
  useEffect(() => {
    setDisplayedMessage('');
    setCurrentIndex(0);
    
    if (!message) return;
    
    const intervalId = setInterval(() => {
      if (currentIndex < message.length) {
        setDisplayedMessage(prev => prev + message[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 30);
    
    return () => clearInterval(intervalId);
  }, [message, currentIndex]);
  
  return (
    <div style={{
      backgroundColor: 'white',
      border: '2px solid black',
      borderRadius: '12px',
      padding: '12px',
      maxWidth: '250px',
      position: 'relative',
      marginTop: '12px'
    }}>
      <div style={{
        position: 'absolute',
        top: '-10px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '0',
        height: '0',
        borderLeft: '10px solid transparent',
        borderRight: '10px solid transparent',
        borderBottom: '10px solid black'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '-7px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '0',
        height: '0',
        borderLeft: '8px solid transparent',
        borderRight: '8px solid transparent',
        borderBottom: '8px solid white',
        zIndex: 1
      }}></div>
      
      <p style={{ margin: 0, fontFamily: 'serif' }}>
        {displayedMessage}
        {currentIndex < message.length && (
          <span style={{ animation: 'blink 1s infinite' }}>|</span>
        )}
      </p>
    </div>
  );
}
