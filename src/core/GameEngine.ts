import { inject } from '@angular/core';
import { IGameState } from './interfaces/IGameState';
import { PieceService } from './PieceService';

export class GameEngine {
  // Fields
  private cols: number;
  private rows: number;

  // PRoperties
  service = inject(PieceService);
  state: IGameState | undefined;

  constructor(
    public numberOfRows: number = 20,
    public numberOfColumns: number = 10,
  ) {
    this.cols = numberOfColumns;
    this.rows = numberOfRows;
    this.init();
  }

  init() {
    this.state = {
      board: Array(this.numberOfRows)
        .fill(0)
        .map(() => Array(this.numberOfColumns).fill(0)),
      score: 0,
      level: 1,
      linesCleared: 0,
      currentPiece: this.service.generateRandomPiece(),
      nextPiece: this.service.generateRandomPiece(),
      isGameOver: false,
    };
  }

  start() {
    console.log('Game Started!');
  }

  pause() {
    console.log('Game Paused');
  }

  reset() {
    console.log('Game Reset');
  }

  move(direction: 'left' | 'right' | 'down') {
    console.log('Move ()  ');

    if (direction === 'down') {
      this.state!.currentPiece!.yCoord++;
    }
    if (direction === 'right') {
      this.state!.currentPiece!.xCoord++;
    }
    if (direction === 'left') {
      this.state!.currentPiece!.xCoord--;
    }

  }

  lockPiece() {
    if (this.state!.isGameOver) {
      return;
    }
    const matrix = this.state!.currentPiece!.shape;
    const colorIndex = this.state!.currentPiece!.color;
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        const val = matrix[r * 4 + c];
        if (!val) {
          continue;
        }
        const x = this.state!.currentPiece!.xCoord + c;
        const y = this.state!.currentPiece!.yCoord + r;

        if (y >= 0 && y < this.rows && x >= 0 && x < this.cols) {
        }
      }
    }
  }

  // Collision?
  collision(): boolean {
    if (this.state?.isGameOver || undefined) {
      return false;
    }
    const matrix = this.state!.currentPiece!.shape;
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        const val = matrix[r * 4 + c];
        if (!val) {
          continue;
        }
        const x = this.state!.currentPiece!.xCoord + c;
        const y = this.state!.currentPiece!.yCoord + r;
        if (x < 0 || x >= this.cols || y >= this.rows) {
          return true;
        }
        if (y >= 0 && this.state!.currentPiece !== null) {
          return true;
        }
      }
    }
    return false;
  }

  // Rotation
  rotate() {
    console.log('Piece rotated');
  }
  hardDrop() { }

  stop() {
    console.log('STOP');
    this.state!.isGameOver = true;
  }

  checkColor(rowIndex: number, colIndex: number): boolean {
    const piece = this.state?.currentPiece!;
    const shape = piece.shape!;
    const offsetX = piece.xCoord;
    const offsetY = piece.yCoord;

    for (let r = 0; r < shape.length; r++) {
      for (let c = 0; c < shape[r].length; c++) {
        if (shape[r][c] === 1) {
          // Map shape cell to matrix coordinates
          const matrixRow = offsetY + r;
          const matrixCol = offsetX + c;

          if (matrixRow === rowIndex && matrixCol === colIndex) {
            return true;
          }
        }
      }
    }
    return false;
  }
}
