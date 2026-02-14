import React from 'react';
import './style.css'

const SpotifyPlayer = () => {
  return (
    <div style={{ marginTop: '20px', width: '100%', maxWidth: '400px' }}>
      <iframe
      
  className="music"
        style={{ borderRadius: '15px'}}
        src="https://open.spotify.com/embed/track/1oAwsWBovWRIp7qLMGPIet?utm_source=generator&theme=0&autoplay=1"// Замени на ссылку своей песни
        width="100%"
        height="152"
        frameBorder="0"      
        allowFullScreen        
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        title="Favorite Song"
      ></iframe>
    </div>
  );
};

export default SpotifyPlayer;