import { useState, useRef } from 'react'
import './style.css'
import lovecat from './../../assets/positive energies - Forum.gif'
import one from '../../assets/08b58782c12322cf2ffa5b91472f97fd.gif'
import one1 from '../../assets/nn.gif'
import one2 from '../../assets/nn2.gif'
import one3 from '../../assets/nn3.gif'
import one4 from '../../assets/nn4.gif'
import SpotifyPlayer from '../SpotifyPlayer/SpotifyPlayer'


function Main() {
  const [isAccepted, setIsAccepted] = useState(false)
  const [yesScale, setYesScale] = useState(1)
  const [noScale, setNoScale] = useState(1)
  const [noClickCount, setNoClickCount] = useState(0)
  const [hearts, setHearts] = useState([]) // Состояние для летящих сердечек
  const audioRef = useRef(null)



  const createHearts = () => {
    const newHearts = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + 'vw',
      animationDuration: (Math.random() * 3 + 2) + 's',
      size: (Math.random() * 20 + 20) + 'px'
    }))
    setHearts(newHearts)
  }

  // Фразы для кнопки "Нет"
  const noPhrases = [
    "no", 
    "wait, r u sure?", 
    "think one more time?", 
    "pleasee...", 
    ":(", 
    "watafa pepe",
    "just click YES "
  ]

  const noGifs = [
  one,
  one1,
  one2,
  one3,
  one4
  ]

  const handleNo = () => {
    setNoClickCount(prev => prev + 1)
    setYesScale(prev => prev + 0.5) // Кнопка ДА растет
    setNoScale(prev => Math.max(prev - 0.1, 0.2)) // Кнопка НЕТ уменьшается
  }

 const handleYes = () => {
    setIsAccepted(true);
    const newHearts = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + "vw",
      delay: Math.random() * 3 + "s",
      size: Math.random() * 20 + 20 + "px",
      duration: Math.random() * 2 + 3 + "s"
    }));
    setHearts(newHearts);

  };

  return (
    <div className="app-container">


{isAccepted && <SpotifyPlayer key={isAccepted}/> && hearts.map(h => (
        <span key={h.id} className="floating-heart" 
              style={{ 
                left: h.left, 
                animationDelay: h.delay, 
                fontSize: h.size,
                animationDuration: h.duration 
              }}>
          ❤️ 
        </span>
      ))}
      {!isAccepted ? (
        <div className="card">
          <h1 className="question">will you be my valentine?🌹</h1>

          {noClickCount > 0 && (
              <div className="gif-container">
                <img 
                  src={noGifs[(noClickCount - 1) % noGifs.length]} 
                  alt="Sad reaction" 
                  className="reaction-gif"
                />
              </div>
            )}

          <div className="btn-wrapper">
            <button 
              className="btn yes" 
              style={{ transform: `scale(${yesScale})` }}
              onClick={handleYes}
            >
              YES!
            </button>
            <button 
              className="btn no" 
              style={{ transform: `scale(${noScale})` }}
              onClick={handleNo}
            >
              {noPhrases[noClickCount % noPhrases.length]}
            </button>
          </div>
        </div>
      ) : (
        <div className="celebration animate-fade-in">
          
  <div className="player fade-in">
    <SpotifyPlayer/>
  </div>
          
          <h1 className="success-text">YAAAY! 🥰</h1>
          <div className="floating-hearts"></div>
          <img 
            src={lovecat} 
            alt="Love cat" 
            className="love-gif"
          />
          <p className="final-message">thank you☺️❤️</p>
        </div>
      )}
    </div>
  )
}

export default Main