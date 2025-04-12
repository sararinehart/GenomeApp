"use client";
import { useState } from 'react';

export default function Home() {
  const [mood, setMood] = useState('happy');
  const [messageIndex, setMessageIndex] = useState(0);
  
  const messages = [
    "Hello! I'm your Beauty Genome Guide.",
    "I can analyze your unique beauty patterns!",
    "What does your skin crave lately?",
    "Your Beauty Genome reveals fascinating patterns...",
    "Let me show you what makes your beauty unique!"
  ];
  
  const getNextMessage = () => {
    const nextIndex = (messageIndex + 1) % messages.length;
    setMessageIndex(nextIndex);
    
    // Change mood based on message
    if (nextIndex === 1) setMood('excited');
    if (nextIndex === 2) setMood('thinking');
    if (nextIndex === 3) setMood('surprised');
    if (nextIndex === 4) setMood('happy');
  };
  
  // Simple eyes based on mood
  const getEyeStyle = () => {
    switch(mood) {
      case 'happy': return { height: '30px' };
      case 'surprised': return { height: '36px' };
      case 'thinking': return { height: '30px', transform: 'translateX(3px)' };
      case 'excited': return { height: '32px', animation: 'pulse 0.5s infinite' };
      default: return { height: '30px' };
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f6f3e8',
      padding: '20px'
    }}>
      <h1 style={{ fontFamily: 'serif', marginBottom: '20px' }}>
        Pretty Baby Oracle
      </h1>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: '24px',
        border: '2px solid black',
        maxWidth: '400px',
        width: '100%'
      }}>
        {/* Character */}
        <div style={{ width: '200px', height: '200px', position: 'relative' }}>
          <div style={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            backgroundColor: '#edbcb2',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            {/* Eyes */}
            <div style={{
              width: '20px',
              ...getEyeStyle(),
              borderRadius: '50%',
              backgroundColor: 'black',
              position: 'absolute',
              top: '70px',
              left: '60px'
            }}></div>
            <div style={{
              width: '20px',
              ...getEyeStyle(),
              borderRadius: '50%',
              backgroundColor: 'black',
              position: 'absolute',
              top: '70px',
              right: '60px'
            }}></div>
            
            {/* Nose */}
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#d44b39',
              position: 'absolute',
              top: '100px'
            }}></div>
            
            {/* Mouth */}
            <div style={{
              width: '40px',
              height: '20px',
              borderBottom: '2px solid black',
              borderRadius: mood === 'happy' ? '0 0 40px 40px' : mood === 'surprised' ? '40px 40px 0 0' : '0',
              position: 'absolute',
              top: '120px'
            }}></div>
          </div>
        </div>
        
        {/* Message */}
        <div style={{
          backgroundColor: 'white',
          border: '2px solid black',
          borderRadius: '12px',
          padding: '12px',
          maxWidth: '250px',
          marginTop: '12px',
          minHeight: '60px'
        }}>
          <p style={{ margin: 0, fontFamily: 'serif' }}>
            {messages[messageIndex]}
          </p>
        </div>
        
        {/* Next Message Button */}
        <button 
          onClick={getNextMessage}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#edbcb2',
            color: '#d44b39',
            border: '2px solid #d44b39',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          NEXT MESSAGE
        </button>
        
        {/* Mood Controls */}
        <div style={{ 
          marginTop: '24px', 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr',
          gap: '8px',
          width: '100%'
        }}>
          <button 
            onClick={() => setMood('happy')}
            style={{
              padding: '8px',
              border: '2px solid',
              borderColor: mood === 'happy' ? '#d44b39' : 'black',
              backgroundColor: mood === 'happy' ? '#edbcb2' : 'white',
              cursor: 'pointer'
            }}
          >
            HAPPY
          </button>
          <button 
            onClick={() => setMood('thinking')}
            style={{
              padding: '8px',
              border: '2px solid',
              borderColor: mood === 'thinking' ? '#d44b39' : 'black',
              backgroundColor: mood === 'thinking' ? '#edbcb2' : 'white',
              cursor: 'pointer'
            }}
          >
            THINKING
          </button>
          <button 
            onClick={() => setMood('excited')}
            style={{
              padding: '8px',
              border: '2px solid',
              borderColor: mood === 'excited' ? '#d44b39' : 'black',
              backgroundColor: mood === 'excited' ? '#edbcb2' : 'white',
              cursor: 'pointer'
            }}
          >
            EXCITED
          </button>
          <button 
            onClick={() => setMood('surprised')}
            style={{
              padding: '8px',
              border: '2px solid',
              borderColor: mood === 'surprised' ? '#d44b39' : 'black',
              backgroundColor: mood === 'surprised' ? '#edbcb2' : 'white',
              cursor: 'pointer'
            }}
          >
            SURPRISED
          </button>
        </div>
      </div>
    </div>
  );
}
