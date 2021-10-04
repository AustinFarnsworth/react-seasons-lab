import React from "react";
import ReactDOM  from "react-dom";

const App = () => {


// Calling the Geolocation API for current location
  window.navigator.geolocation.getCurrentPosition((position) => console.log(position),
  (error) => console.log(error));


  return (

    <h1>Latitude</h1>
  )
}

ReactDOM.render( <App />, document.querySelector('#root'));