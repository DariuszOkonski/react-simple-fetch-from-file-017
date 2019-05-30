import React from 'react';
import SingleResult from './SingleResult';

const DisplayResults = (props) => {

  let display = null;

  if (props.isFetched && props.data !== null) {
    display = props.data.map(el => <SingleResult key={el.id} element={el} />)
  }

  return (
    <div>
      <ul>
        {display}
      </ul>
    </div>
  );
}

export default DisplayResults;