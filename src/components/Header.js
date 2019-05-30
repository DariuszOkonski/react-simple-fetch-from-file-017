import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h2>Fetch from file app</h2>
      {props.downloadingTime > 0 ?
        <h4>Downloading data time: <span>{(props.downloadingTime / 1000).toFixed(1)}</span>s</h4> : null}
    </div>
  );
}

export default Header;