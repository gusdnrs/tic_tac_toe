import React from 'react';

export default function Square({ value, onSquareClick, isVanishing }) {
  return (
    <button
      type="button"
      className={`square ${isVanishing ? 'vanishing' : ''}`}
      onClick={onSquareClick}
    >
      {value === 'X' && (
        <div className="icon-x">
          <div className="icon-x__line"></div>
          <div className="icon-x__line"></div>
        </div>
      )}
      {value === 'O' && (
        <div className="icon-o"></div>
      )}
    </button>
  );
}