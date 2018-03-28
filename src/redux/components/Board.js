import React from 'react';
import Square from './Square'
import PropTypes from 'prop-types'

function Board(props) {

  let renderSquare = (i) => {
    return <Square
                   value={ props.squares[i] }
                   onClick={ () => props.onClick(i) }>
           </Square>
  }

  return (
    <div>
      <div className="board-row">
        { renderSquare(0) }
        { renderSquare(1) }
        { renderSquare(2) }
      </div>
      <div className="board-row">
        { renderSquare(3) }
        { renderSquare(4) }
        { renderSquare(5) }
      </div>
      <div className="board-row">
        { renderSquare(6) }
        { renderSquare(7) }
        { renderSquare(8) }
      </div>
    </div>
    );
}

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired
}

export default Board