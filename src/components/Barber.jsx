import React from 'react';

const Barber = ({ src, name, about, className, }) => (
    <div className={className}>
        <img src={src} />
        <div className='details'>
        <h3>{name}</h3>
        <p>{about}</p>
        </div>
    </div>

 );

export default Barber