import { JsonPipe, NgStyle } from '@angular/common';
import { Component, inject, OnInit, signal, NgZone, input, HostListener } from '@angular/core';

import { PieceService } from '../../core/PieceService';
import { GameEngine } from '../../core/GameEngine';
import { IPiece } from '../../core/interfaces/IPiece';

@Component({
  selector: 'app-game-board',
  imports: [NgStyle, JsonPipe],
  templateUrl: './game-board.html',
  styleUrl: './game-board.scss',
})
export class GameBoard implements OnInit {
  // Fields
  private lastFrame: number = 0;
  private dropInterval: number = 10 * 700; // dropInterval = 700; // ms
  private intervalId: any;
  private engine: GameEngine;

  // Properties
  currentPiece = signal<IPiece | undefined>(undefined)!;
  matrix = signal<number[][]>([]);
  service = inject(PieceService);
  engine$ = input<GameEngine>(new GameEngine());

  // Construction
  constructor() {
    this.engine = this.engine$();
    this.currentPiece.set(this.engine.state!.currentPiece || undefined);
    this.matrix.set(this.engine.state!.board);
  }

  // Init
  ngOnInit() {
    this.engine.start();
  }

  tick(): void {
    if (this.engine.state?.isGameOver || undefined) {
      return;
    }

    const moved = {
      ...this.engine.state!.currentPiece!,
      y: this.engine.state!.currentPiece!.yCoord + 1,
    };

    this.engine.move('down');
    // this.currentPiece.set(this.engine.state!.currentPiece);
    this.safeUpdate();
  }

  // To update the view:
  safeUpdate() {}

  canPaintCell(rowIndex: number, colIndex: number): boolean {
    if (!this.currentPiece) {
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
        this.tick();
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
