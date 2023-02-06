import React from 'react';

const Card = ({ title, className, price, icon, service }) => (
  <div className={`card ${className}`} style={{ padding: '1rem 1.2' }}>
    <div className="card-content" 
      style={{ 
        display: 'flex' , 
        justifyContent: 'space-between', 
        alignItems: 'center',
        }}>
        <h3 style={{ 
          margin: 0, 
          color: '#0e121a',
          fontSize: '1.1rem'          
           }}>
          <i className={icon} style={{
              color: '#f0b45b', 
              fontSize: '1.5rem',
              paddingRight: '3px',
            }}/>
          {title}
        </h3>
        <span style={{ 
           margin: 0,
           color: '#0e121a',
           fontWeight: 'bold'
            }}>
          {price}
        </span>
    </div>
      <p style={{ 
        color: '#666666',
        padding: '2px'  
      }}>
        {service}
      </p>
  </div>
);

export default Card;