import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addstep, setstep } from '../reducers/game'
import Game from '../components/Game'

import React from 'react';

function GameContainer(props) {
  return (
    <Game
          history={ props.history }
          stepNumber={ props.stepNumber }
          xIsNext={ props.xIsNext }
          onAddstep={ props.addstep.bind(this) }
          onSetstep={ props.setstep.bind(this) } />
    );
}

GameContainer.propTypes = {
  addstep: PropTypes.func.isRequired,
  setstep: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return state
};

const mapDispathToProps = (dispatch) => {
  return {
    addstep: (step) => {
      dispatch(addstep(step))
    },
    setstep: (step) => {
      dispatch(setstep(step))
    }
  }
};

export default connect(mapStateToProps, mapDispathToProps)(GameContainer);