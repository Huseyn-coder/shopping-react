import React, { useState } from 'react';
import './chips.css';
import foto from './img/Chips.png';

export default function Chips() {
  const [imagePositions, setImagePositions] = useState([]);

  const handleClick = () => {
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    setImagePositions([...imagePositions, { x: randomX, y: randomY }]);
  };

  return (
    <>
      <div
        style={{
          position: 'relative',
          textAlign: 'center',
          border: '1px solid red',
          width: '100%',
          height: '100vh', // Ekran yüksekliği kadar
          overflow: 'hidden', // Ekran dışında olan resimlerin kaybolmasını sağlar
        }}
      >
        {imagePositions.map((position, index) => (
          <img
            key={index}
            src={foto}
            alt={`Sekil ${index}`}
            style={{
              position: 'fixed', // Ekranın içinde sabit kalır
              left: position.x + 'px',
              top: position.y + 'px',
              width: '35%',
              height: '60%',
            }}
          />
        ))}
        <div className='chipsdiv'>
          <p style={{ fontSize: '1.8em', fontWeight: 'bold', color: 'white' }}>
            BAGS EATEN: <span>{imagePositions.length}</span>
          </p>
          <button onClick={handleClick} className='chipsbutton' style={{ padding: '10px' }}>
            NOM NOM NOM
          </button>
          <div className='ul-li'>
            <ul className='div-ul' style={{ listStyleType: 'none' }}>
              <li className='div-li'>
                <a className='div-a' style={{ color: 'white', fontSize: '1.6em', fontWeight: 'bold' }} href='./'>
                  GO BACK
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
