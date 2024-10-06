import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ScreenDemarrage.css'; 
import video from './demarrage.mp4';

const ScreenDemarrage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard'); // Redirect to dashboard after 3 seconds
    }, 5000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, [navigate]);

  return (
    <div className="screen-demarrage">
   <video className="demarrage-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
     </video>
       <h1>Bienvenue dans ECO +</h1>
      <p>Agissez aujourd'hui, protegez demain.</p>
    </div>
  );
};

export default ScreenDemarrage;
