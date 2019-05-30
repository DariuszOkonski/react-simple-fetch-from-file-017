import React from 'react';

const SingleResult = (props) => {
  return (
    <li>
      <h4>id: {props.element.id}</h4>
      <p>English: {props.element.en}</p>
      <p>Polish: {props.element.pl}</p>
    </li>
  );
}

export default SingleResult;