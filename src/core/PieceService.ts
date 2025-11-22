import { Injectable } from '@angular/core';
import { IPiece } from './interfaces/IPiece';
// See https://angular.dev/guide/di/creating-and-using-services

@Injectable({ providedIn: 'root' })
export class PieceService {
  constructor() {}

  generateRandomPiece(): IPiece {
    const pieces = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
    var piecesWithColors: IPiece[] = pieces.map((type, index) => ({
      type,
      color: this.getColorByIndex(index),
      shape: this.getShapeByType(type),
      xCoord: 0,
      yCoord: 0,
    }));

    return this.getRandomPieceFromArray(piecesWithColors);
  }

  private getColorByIndex(index: number): string {
    const colors = ['cyan', 'blue', 'orange', 'yellow', 'green', 'purple', 'red'];
    return colors[index % colors.length];
  }

  private getShapeByType(type: string): number[][] {
    const shapes: { [key: string]: number[][] } = {
      I: [[1, 1, 1, 1]],
      J: [
        [1, 0, 0],
        [1, 1, 1],
      ],
      L: [
        [0, 0, 1],
        [1, 1, 1],
      ],
      O: [
        [1, 1],
        [1, 1],
      ],
      S: [
        [0, 1, 1],
        [1, 1, 0],
      ],
      T: [
        [0, 1, 0],
        [1, 1, 1],
      ],
      Z: [
        [1, 1, 0],
        [0, 1, 1],
      ],
    };
    return shapes[type];
  }

  private getRandomPieceFromArray(piecesWithColors: IPiece[]): IPiece {
    const randomIndex = Math.floor(Math.random() * piecesWithColors.length);
    return piecesWithColors[randomIndex];
  }
}
