import { useState } from 'react';
import Board from './components/Board';

export default function Game() {
  const [history, setHistory] = useState([[]]); 
  const [currentMove, setCurrentMove] = useState(0); 

  const xIsNext = (currentMove % 2) === 0;
  const currentSequence = history[currentMove];

  const currentSquares = Array(9).fill(null);
  const startIndex = Math.max(0, currentSequence.length - 7);
  
  for (let i = startIndex; i < currentSequence.length; i++) {
    const squareIndex = currentSequence[i];
    currentSquares[squareIndex] = (i % 2 === 0 ? 'X' : 'O');
  }

  // 다음 수(8번째 이상)를 둘 때 사라질 칸의 인덱스 계산
  // 보드에 돌이 7개 이상일 때, 가장 오래된 돌이 다음에 사라질 대상입니다.
  const vanishingIndex = currentSequence.length >= 7 
    ? currentSequence[currentSequence.length - 7] 
    : null;

  const moves = history.map((_, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
      if (move > 7) description += ' (Stone vanished)';
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button type="button" onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  function handlePlay(clickedIndex) {
    const nextHistory = [
      ...history.slice(0, currentMove + 1), 
      [...currentSequence, clickedIndex]
    ];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board 
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          vanishingIndex={vanishingIndex}
        />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}