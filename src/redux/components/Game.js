import React from 'react';
import Board from './Board'
import PropTypes from 'prop-types'
import { calculateWinner } from '../../utils'

function Game(props) {
  const history = props.history
  const current = history[props.stepNumber]
  const winner = calculateWinner(current.squares)

  const moves = history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start';
    return (
      <li key={ move }>
        <button onClick={ props.onSetstep.bind(this, move) }>
          { desc }
        </button>
      </li>
      );
  })

  let status
  if (winner) {
    status = 'Winner ' + winner
  } else {
    status = 'Next Player: ' + (props.xIsNext ? 'X' : 'O')
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board
               squares={ current.squares }
               onClick={ props.onAddstep.bind(this) }></Board>
      </div>
      <div className="game-info">
        <div>
          { status }
        </div>
        <ol>
          { moves }
        </ol>
      </div>
    </div>
    );
}

Game.propTypes = {
  history: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  stepNumber: PropTypes.number.isRequired,
  xIsNext: PropTypes.bool.isRequired,
  onAddstep: PropTypes.func.isRequired,
  onSetstep: PropTypes.func.isRequired
}

export default Game