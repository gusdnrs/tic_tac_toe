function calculateWinner(squares) { // 승리 조건 검사 함수
  const lines = [ // 가능한 승리 조합
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for( let i = 0; i < lines.length; i++ ) { // 가능한 승리 조합을 순회
    const [aIndex, bIndex, cIndex] = lines[i]; // 각 조합의 인덱스 추출
    if( squares[aIndex] && squares[aIndex] === squares[bIndex] && squares[aIndex] === squares[cIndex] ) { // 세 칸이 동일한 값일 때
      return squares[aIndex]; // 승리한 플레이어 반환
    }
  }
  return null; // 승리자가 없으면 null 반환
}

export {calculateWinner};