import React from 'react';

import './error-indicator.css';
import icon from './snoopie-crashed.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon" className="crashed-icon"/>
      <span className="boom">BOOM!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        (but we already sent SnoopDog to fix it)
      </span>
    </div>
  );
};

export default ErrorIndicator;
