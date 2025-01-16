import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '1 rem', backgroundColor: '#f1f1f1' }}>
      <p>{new Date().getFullYear()} Salim's website All rights reserved.</p>
    </footer>
  );
};

export default Footer;
