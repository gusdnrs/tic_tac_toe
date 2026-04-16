import Square from './Square'; // Square 컴포넌트 임포트
import { calculateWinner } from '../script/calculateWinner'; // 승리자 계산 함수 임포트

export default function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares); // 승리자 계산
  let status; // 상태 메시지 변수
  winner ? status = 'Winner: ' + winner : status = 'Next Player: ' + (xIsNext ? 'X' : 'O'); // 승리자 있으면 승리자, 없으면 다음 플레이어 표시

  const board = [];
  for (let i = 0; i < 3; i++) {
    const boardRow = [];
    for (let j = 0; j < 3; j++) {
      const boardIndex = i * 3 + j;
      boardRow.push(
        <Square
          key={boardIndex}
          value={squares[boardIndex]}
          onSquareClick={() => handleClick(boardIndex)}
          isVanishing={boardIndex === vanishingIndex}
        />
      );
    }
    board.push(
      <div
        key={i}
        className="board-row"
      >
        {boardRow}
      </div>
    );
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return; 
    }
    // 부모 컴포넌트에 클릭된 인덱스를 전달합니다.
    onPlay(i);
  }


  return <>
    <div className="status">
      {status}
    </div>
    {board}
  </>
}