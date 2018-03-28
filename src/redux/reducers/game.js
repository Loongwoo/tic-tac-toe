import { calculateWinner } from '../../utils'

export const ADD_STEP = "ADD_SETP"
export const SET_STEP = "SET_STEP"

export default function reducer(state, action) {
  if (!state) {
    return {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
      stepNumber: 0
    }
  }
  switch (action.type) {
  case ADD_STEP: {
    const history = state.history.slice(0, state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[action.step]) {
      return state
    }
    squares[action.step] = state.xIsNext ? 'X' : 'O'
    return {
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !state.xIsNext,
    };
  }
  case SET_STEP:
    return {
      ...state,
      stepNumber: action.step,
      xIsNext: (action.step % 2) === 0
    };
  default:
    return state
  }
}

export function addstep(step) {
  return {
    type: ADD_STEP,
    step: step
  }
}

export function setstep(step) {
  return {
    type: SET_STEP,
    step: step
  }
}