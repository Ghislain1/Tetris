import { Component, HostListener, input, signal } from '@angular/core';
import { GameEngine } from '../../core/GameEngine';
import { IPiece } from '../../core/interfaces/IPiece';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-next-board',
  imports: [],
  templateUrl: './next-board.html',
  styleUrl: './next-board.scss',
})
export class NextBoard {
  // Fields
  private engine: GameEngine;
  private numberOfRows: number;
  private numberOfColumns: number;

  // Properties
  matrix$ = signal<number[][]>([]);
  engine$ = input<GameEngine>(new GameEngine());
  piece: IPiece | undefined;

  // Constructor
  constructor() {
    this.engine = this.engine$();
    this.piece = this.engine$()?.state?.nextPiece!;
    this.numberOfRows = 4;
    this.numberOfColumns = 4;
    let smallMatrix = Array(this.numberOfRows)
      .fill(0)
      .map(() => Array(this.numberOfColumns).fill(0));

    this.matrix$.set(smallMatrix);
    this.piece.xCoord = this.piece.xCoord + 3;
    this.piece.yCoord = this.piece.yCoord + 3;
  }

  // Methods
  canPaintCell(rowIndex: number, colIndex: number): boolean {
    if (!this.piece) {
      return false;
    }

    return this.engine.checkColor(rowIndex, colIndex);
  }

  // Keyboard controls
  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (this.engine.state?.isGameOver && event.key !== 'p') {
      return;
    }
    switch (event.key) {
      case 'ArrowLeft':
        this.engine.move('left');
        break;
      case 'ArrowRight':
        this.engine.move('right');
        break;
      case 'ArrowDown':
        break; // soft drop
      case ' ':
        this.engine.hardDrop();
        break; // space - hard drop
      case 'ArrowUp':
        this.engine.rotate();
        break;
      case 'p':
        this.engine.pause();
        break;
    }
  }
}
