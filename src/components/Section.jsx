import React from 'react';

const Section = ({ className, title, children}) => (
  <section className={className}>
    <h2>{title}</h2>
    {children}
  </section>
);

export default Section