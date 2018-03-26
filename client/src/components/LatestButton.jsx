import React from 'react';

const LatestButton = (props) => {
  return (
    <div className="row justify-content-center col-12">
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.handleClick}
      > Get Latest Block </button>
    </div>
  );
};

export default LatestButton;
