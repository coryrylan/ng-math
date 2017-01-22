import { ActionReducer, Action } from '@ngrx/store';

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
  mathType: MathType.addition
};

export function settingsReducer(state = defaultState, action: Action) {
  switch (action.type) {
    case SET_DIFFICULTY:
      const settings = Object.assign({ }, state);
      settings.difficulty = action.payload;
      return settings;

    case SET_MATH_TYPE:
      return state.mathType = action.payload;

    case SET_GAME_TYPE:
      return state.gameType = action.payload;

    default:
      return state;
  }
}