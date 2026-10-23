import { useEffect, useState } from 'react';

type Player = 'X' | 'O';
type Cell = Player | null;
type Board = Cell[];

const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function getWinner(board: Board): Player | null {
  for (const [first, second, third] of WINNING_LINES) {
    const player = board[first];
    if (player && player === board[second] && player === board[third]) return player;
  }
  return null;
}

function withMove(board: Board, index: number, player: Player): Board {
  return board.map((cell, cellIndex) => (cellIndex === index ? player : cell));
}

function computerMove(board: Board): Board {
  const emptyCells = board.flatMap((cell, index) => (cell === null ? [index] : []));
  const findWinningMove = (player: Player) =>
    emptyCells.find((index) => getWinner(withMove(board, index, player)) === player);

  const move =
    findWinningMove('O') ??
    findWinningMove('X') ??
    (board[4] === null ? 4 : undefined) ??
    [0, 2, 6, 8].find((index) => board[index] === null) ??
    emptyCells[Math.floor(Math.random() * emptyCells.length)];

  return withMove(board, move, 'O');
}

export function MindGame() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const winner = getWinner(board);
  const isDraw = !winner && board.every(Boolean);
  const playerCount = board.filter((cell) => cell === 'X').length;
  const computerThinking = !winner && !isDraw && playerCount > board.filter((cell) => cell === 'O').length;

  useEffect(() => {
    if (!computerThinking) return;
    const timeout = window.setTimeout(() => {
      setBoard((current) => (getWinner(current) ? current : computerMove(current)));
    }, 450);
    return () => window.clearTimeout(timeout);
  }, [board, computerThinking]);

  function play(index: number) {
    if (board[index] || winner || isDraw || computerThinking) return;
    setBoard((current) => withMove(current, index, 'X'));
  }

  function restart() {
    setBoard(Array(9).fill(null));
  }

  const status = winner
    ? winner === 'X'
      ? 'You win! Great play.'
      : 'The computer wins this round.'
    : isDraw
      ? 'It’s a draw. Nicely matched!'
      : computerThinking
        ? 'Computer is thinking…'
        : 'Your turn — you are X.';

  return (
    <section id="game" className="section game-section" aria-labelledby="game-heading">
      <div className="container game-layout">
        <div className="game-intro">
          <p className="game-kicker">A moment to play</p>
          <h2 id="game-heading">Tic-tac-toe</h2>
          <p>Take on the computer. You’re X, it’s O. Get three in a row to win.</p>
        </div>
        <div className="mind-game" aria-labelledby="mind-game-title">
          <h3 id="mind-game-title">Your move</h3>
          <div className="tic-tac-toe-board" role="group" aria-label="Tic-tac-toe board">
            {board.map((cell, index) => (
              <button
                key={index}
                className={`tic-tac-toe-cell${cell ? ` is-${cell.toLowerCase()}` : ''}`}
                type="button"
                aria-label={`Row ${Math.floor(index / 3) + 1}, column ${(index % 3) + 1}${cell ? `: ${cell}` : ': empty'}`}
                disabled={Boolean(cell || winner || isDraw || computerThinking)}
                onClick={() => play(index)}
              >
                {cell}
              </button>
            ))}
          </div>
          <p className="mind-game-feedback" role="status" aria-live="polite">
            {status}
          </p>
          {(winner || isDraw) && (
            <button className="mind-game-next" type="button" onClick={restart}>
              Play again
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
