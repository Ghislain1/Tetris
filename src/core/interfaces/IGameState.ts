import { IPiece } from './IPiece';

// Definition of the IGameState interface
// which represents the state of the game
// including the board, score, level, and current piece.
export interface IGameState {
  board: number[][];
  score: number;
  level: number;
  linesCleared: number;
  currentPiece: IPiece | undefined;
  nextPiece: IPiece | undefined;
  isGameOver: boolean;
}
