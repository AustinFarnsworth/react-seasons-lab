import React from "react";
import ReactDOM  from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import LoadingSpinner from "./LoadingSpinner";



class App extends React.Component {

  //  State initialzation with constructor

//   constructor(props) {
//     super(props);

//       this.state = { latitude: null,
//         errorMessage: '', 
//          };
//  }


// State initialzation alternate way
   state = { latitude: null,
            errorMessage: ''
          };
 


//  Refactoring to Lifecycle methods
  componentDidMount() {

      // Calling the Geolocation API for current location
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
      this.setState({ latitude: position.coords.latitude,
       longitude: position.coords.longitude});
    },
    (error) => {
      this.setState({ errorMessage: error.message })
    });
  }


  render() {
   if(this.state.errorMessage && !this.state.latitude) {
     return <div>Error: {this.state.errorMessage}</div>
   } else if (!this.state.errorMessage && this.state.latitude){
      return<SeasonDisplay latitude={this.state.latitude}/>
   }
   return <LoadingSpinner message="Please accept location request"/>
  }
  
}

ReactDOM.render( <App />, document.querySelector('#root'));