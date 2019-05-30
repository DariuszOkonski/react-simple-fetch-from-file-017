import React from 'react';

const ButtonsController = (props) => {
  return (
    <div>
      <button
        onClick={props.handleFetchClick}
      >fetch from file</button>

      <button
        onClick={props.handleResetClick}
      >reset</button>
    </div>
  );
}

export default ButtonsController;