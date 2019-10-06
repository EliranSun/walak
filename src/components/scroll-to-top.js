import React from 'react';

const scrollToTopStyle = {
  display: 'block',
  position: 'fixed',
  zIndex: 1,
  bottom: 0,
  right: 0,
  width: '48px',
  height: '48px',
  background: 'grey',
  margin: '0 50px 50px 0',
  borderRadius: '5px',
  cursor: 'pointer'
};

const arrowUpStyle = {
  width: 0,
  height: '5px',
  borderLeft: '5px solid transparent',
  borderRight: '5px solid transparent',
  borderBottom: '5px solid white',
  zoom: 3,
  opacity: 0.5,
  marginRight: '3px'
};

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div id="scroll-to-top" style={ scrollToTopStyle } onClick={ scrollToTop }>
      <div style={ arrowUpStyle } />
    </div>
  );
};

export default ScrollToTop;
