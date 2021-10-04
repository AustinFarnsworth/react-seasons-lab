import React from "react";
import ReactDOM  from "react-dom";



class App extends React.Component {
  constructor(props) {
    super(props);

      this.state = { latitude: null };

       // Calling the Geolocation API for current location
    window.navigator.geolocation.getCurrentPosition((position) => {
      this.setState({ latitude: position.coords.latitude});
    },
    (error) => console.log(error));
  }


  render() {
   

    return (
       <div>Latitude: {this.state.latitude}</div>
    );
  }
}

ReactDOM.render( <App />, document.querySelector('#root'));