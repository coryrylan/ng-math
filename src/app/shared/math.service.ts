import { Injectable } from '@angular/core';

export interface MathProblem {
  first: number;
  second: number;
  operator: string;
  value: number;
}

@Injectable()
export class MathService {

  constructor() { }

  getAdditionProblem(): MathProblem {
    const first = this.randomNumberFromRange(0, 9);
    const second = this.randomNumberFromRange(0, 9);

    return {
      first,
      second,
      operator: '+',
      value: first + second
    };
  }

  private randomNumberFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
