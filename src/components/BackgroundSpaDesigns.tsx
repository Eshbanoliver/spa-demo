import React from 'react';
import '../styles/BackgroundSpaDesigns.css';

const BackgroundSpaDesigns = () => {
  return (
    <div className="spa-designs-container">
      {/* Lotus */}
      <div className="spa-design lotus-design">
        <svg viewBox="0 0 100 100" fill="none" stroke="var(--primary)" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M50 90 C 10 80, 5 40, 50 15 C 95 40, 90 80, 50 90 Z" />
          <path d="M50 90 C 25 80, 20 45, 50 25 C 80 45, 75 80, 50 90 Z" />
          <path d="M50 90 C 35 80, 35 50, 50 35 C 65 50, 65 80, 50 90 Z" />
        </svg>
      </div>

      {/* Leaf */}
      <div className="spa-design leaf-design">
        <svg viewBox="0 0 100 100" fill="none" stroke="var(--primary)" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 90 C 5 40, 40 5, 90 10 C 40 20, 20 40, 10 90 Z" />
          <path d="M10 90 C 40 80, 80 60, 90 10" />
          <path d="M30 73 C 45 60, 60 45, 65 30" />
          <path d="M50 83 C 65 70, 75 60, 80 45" />
        </svg>
      </div>

      {/* Mandala / Sun */}
      <div className="spa-design mandala-design">
        <svg viewBox="0 0 100 100" fill="none" stroke="var(--primary)" strokeWidth="0.3">
          <circle cx="50" cy="50" r="10" />
          <circle cx="50" cy="50" r="20" />
          <circle cx="50" cy="50" r="30" />
          <path d="M50 10 L 50 90 M 10 50 L 90 50 M 21 21 L 79 79 M 21 79 L 79 21" />
          <circle cx="50" cy="50" r="40" strokeDasharray="2 4" />
        </svg>
      </div>

      {/* Zen Stones & Water Drop */}
      <div className="spa-design stones-design">
        <svg viewBox="0 0 100 100" fill="none" stroke="var(--primary)" strokeWidth="0.5">
          {/* Stones */}
          <ellipse cx="50" cy="80" rx="30" ry="15" />
          <ellipse cx="50" cy="60" rx="20" ry="10" />
          <ellipse cx="50" cy="45" rx="12" ry="7" />
          {/* Water Drop */}
          <path d="M50 30 C 45 20, 50 5, 50 5 C 50 5, 55 20, 50 30 Z" />
        </svg>
      </div>
    </div>
  );
};

export default BackgroundSpaDesigns;
