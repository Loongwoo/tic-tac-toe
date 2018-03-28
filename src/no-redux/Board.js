import React from 'react';
import Square from './Square'

export default class Board extends React.Component {

  randerSquare(i) {
    return <Square
                   value={ this.props.squares[i] }
                   onClick={ () => this.props.onClick(i) }>
           </Square>
  }

  render() {
    return (
      <div>
        <div className="board-row">
          { this.randerSquare(0) }
          { this.randerSquare(1) }
          { this.randerSquare(2) }
        </div>
        <div className="board-row">
          { this.randerSquare(3) }
          { this.randerSquare(4) }
          { this.randerSquare(5) }
        </div>
        <div className="board-row">
          { this.randerSquare(6) }
          { this.randerSquare(7) }
          { this.randerSquare(8) }
        </div>
      </div>
      );
  }
}