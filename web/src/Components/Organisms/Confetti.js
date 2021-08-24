import React from 'react';
import Confetti from 'react-confetti';

function index({ width, height }) {
  return (
    <Confetti
      style={{ position: 'absolute' }}
      width={width}
      height={height}
      numberOfPieces={80}
    />
  );
}

export default index;
