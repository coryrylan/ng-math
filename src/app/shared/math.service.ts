import { Injectable } from '@angular/core';

import { GameSettings, MathType, GameDifficulty } from './../store/settings.reducer';

export interface MathProblem {
  first: number;
  second: number;
  operator: string;
  value: number;
}

@Injectable()
export class MathService {
  private settings: GameSettings;
  constructor() { }

  getAdditionProblem(difficulty: GameDifficulty): MathProblem {
    const first = this.getRandomNumberFromRangeDifficulty(difficulty);
    const second = this.getRandomNumberFromRangeDifficulty(difficulty, true);

    if (second > first) {
      return this.getAdditionProblem(difficulty);
    }

    return {
      first,
      second,
      operator: '+',
      value: first + second
    };
  }

  getSubtractionProblem(difficulty: GameDifficulty): MathProblem {
    const first = this.getRandomNumberFromRangeDifficulty(difficulty, true);
    const second = this.getRandomNumberFromRangeDifficulty(difficulty);
    const value = first - second;

    if (second > first) {
      return this.getSubtractionProblem(difficulty);
    }

    return {
      first,
      second,
      operator: '-',
      value
    };
  }

  getMultiplicationProblem(difficulty: GameDifficulty): MathProblem {
    const first = this.getRandomNumberFromRangeDifficulty(difficulty, true);
    const second = this.getRandomNumberFromRangeDifficulty(difficulty);
    const value = first * second;

    if (second > first) {
      return this.getMultiplicationProblem(difficulty);
    }

    return {
      first,
      second,
      operator: 'x',
      value
    };
  }

  getDivisionProblem(difficulty: GameDifficulty): MathProblem {
    const first = this.getRandomNumberFromRangeDifficulty(difficulty);
    const second = this.getRandomNumberFromRangeDifficulty(difficulty, true);

    if (first === 0 || first % second !== 0) {
      return this.getDivisionProblem(difficulty);
    }

    const value = first / second;

    return {
      first,
      second,
      operator: '÷',
      value
    };
  }

  getRandomProblem(difficulty: GameDifficulty): MathProblem {
    const rand = this.getRandomNumberFromRange(0, 4);

    switch (rand) {
      case MathType.addition:
        return this.getAdditionProblem(difficulty);
      case MathType.subtraction:
        return this.getSubtractionProblem(difficulty);
      case MathType.multiplication:
        return this.getMultiplicationProblem(difficulty);
      case MathType.division:
        return this.getDivisionProblem(difficulty);
      default:
        return this.getSubtractionProblem(difficulty);
    }
  }

  private getRandomNumberFromRangeDifficulty(difficulty: GameDifficulty, second = false) {
    const min = 0;
    let max = 9;

    if (second) {
      switch (difficulty) {
        case GameDifficulty.hard:
          max = 999;
          break;
        case GameDifficulty.medium:
          max = 99;
          break;
        default:
          max = 9;
          break;
      }
    } else {
      switch (difficulty) {
        case GameDifficulty.hard:
          max = 99;
          break;
        default:
          max = 9;
          break;
      }
    }

    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getRandomNumberFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
