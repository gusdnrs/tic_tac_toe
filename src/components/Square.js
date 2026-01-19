export default function Square({ value, onSquareClick }) { // props로 value와 onSquareClick 받음
  return <button
    type="button"
    className={`square ${value === 'X' ? 'is-x' : value === 'O' ? 'is-o' : ''}`}
    onClick={onSquareClick} // 클릭 시 onSquareClick 함수 실행
  >
    {value}
  </button>
}