import {useState} from 'react';
import Board from './components/Board'; // Board 컴포넌트 임포트

export default function Game(){
  const [history, setHistory] = useState([Array(9).fill(null)]); // 9개의 null 요소를 가진 배열로 초기화
  const [currentMove, setCurrentMove] = useState(0); // 현재 이동 단계 상태
  const xIsNext = (currentMove % 2) === 0; // 짝수 이동 단계면 X 차례, 홀수면 O 차례
  const currentSquares = history[currentMove]; // 현재 진행 단계 정보를 변수에 저장
  const moves = history.map((squares, move) => {
    let description; // 이동 설명 변수
    if(move > 0) { // 첫 이동이 아닐 때
      description = 'Go to move #' + move;
    } else { //        이동일 때
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button type="button" onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  } );

  function handlePlay(nextSquares) { // Board 컴포넌트에서 호출되는 함수
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]; // 현재 이동 단계까지의 기록과 새로운 상태를 합침
    setHistory(nextHistory); // 기록 상태 업데이트
    setCurrentMove(nextHistory.length -1); // 현재 이동 단계를 최신 상태로 설정
  }

  function jumpTo(nextMove){
    setCurrentMove(nextMove); // 현재 이동 단계 업데이트
  }

  return<>
    <div className="game">
      <div className="game-board">
        <Board 
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  </>
}