import React from 'react';
import PropTypes from 'prop-types'

function Square(props) {
  return (
    <div
         className="square"
         onClick={ props.onClick }>
      { props.value }
    </div>
    );
}

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default Square