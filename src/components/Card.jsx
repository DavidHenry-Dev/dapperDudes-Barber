import React from 'react';

const Card = ({ title, children, className }) => (
  <div className={`card ${className}`}>
    <h3>{title}</h3>
    <div className="card-content">
      {children}
    </div>
  </div>
);

export default Card;