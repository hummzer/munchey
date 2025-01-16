import React from 'react';

const Header =({ title, subtitle }) => {
  return (
    <header style={{ textAlign: 'center', padding: '1 rem', backgroundColor: '#282c34', color: 'white' }}>
      <h1>{title}</h1>
      {subtitle && <h3>{subtitle}</h3>}
    </header>
  );
};

export default Header;
