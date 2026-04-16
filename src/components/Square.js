export default function Square({ value, onSquareClick, isVanishing }) {
  return (
    <button
      type="button"
      className={`square ${value === 'X' ? 'is-x' : value === 'O' ? 'is-o' : ''} ${isVanishing ? 'vanishing' : ''}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}