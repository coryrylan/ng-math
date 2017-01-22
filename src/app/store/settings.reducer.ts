import { ActionReducer, Action } from '@ngrx/store';

export interface GameSettings {
  difficulty: GameDifficulty;
  mathType: MathType;
  gameType: GameType;
}

export enum GameDifficulty {
  easy,
  medium,
  hard
}

export enum MathType {
  all,
  addition,
  subtraction,
  multiplication,
  division
}

export enum GameType {
  standard,
  timed
}

export const SET_DIFFICULTY = 'SET_DIFFICULTY';
export const SET_MATH_TYPE = 'SET_MATH_TYPE';
export const SET_GAME_TYPE = 'SET_GAME_TYPE';

const defaultState = {
  difficulty: GameDifficulty.easy,
  gameType: GameType.standard,
  mathType: MathType.all
};

export function settingsReducer(state = defaultState, action: Action): GameSettings {
  switch (action.type) {
    case SET_DIFFICULTY:
      return Object.assign({}, {
        difficulty: action.payload,
        mathType: state.mathType,
        gameType: state.gameType
      });

    case SET_MATH_TYPE:
      return Object.assign({}, {
        difficulty: state.difficulty,
        mathType: action.payload,
        gameType: state.gameType
      });

    case SET_GAME_TYPE:
      return Object.assign({}, {
        difficulty: state.difficulty,
        mathType: state.mathType,
        gameType: action.payload
      });

    default:
      return state;
  }
}
