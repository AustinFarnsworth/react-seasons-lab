import React from "react";

const LoadingSpinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        {props.message}
      </div>
    </div>
  )
}

// In case that you dont pass a prop into LoadingSpinner
LoadingSpinner.defaultProps = {
  message: "Loading..."
}


export default LoadingSpinner; 