import { Component, signal } from '@angular/core';

import { GameBoard } from './game-board/game-board';
import { NextBoard } from './next-board/next-board';
import { GameEngine } from '../core/GameEngine';

@Component({
  selector: 'app-root',
  imports: [NextBoard, GameBoard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('tetris');

  // Properties
  gameEngine = new GameEngine();

  /**
   *
   */
  constructor() {
    this.gameEngine.init();
  }
}
